const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");
const auth = require("../middleware/auth");
var pool = require("../config/db");

// @route   GET api/auth
// @desc    Get a logged in user
// @access  Private
router.get("/", auth, async (req, res) => {
   try {
      let sql = `SELECT * FROM USER WHERE email = '${req.user.email}'`;
      const results = await pool.query(sql);

      if (results.length < 1)
         res.status(400).json({ msg: "User not found..."});

      res.json(results[0]);

   } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server Error" });
   }
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post(
   "/",
   [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a password").exists()
   ],
   async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      try {
         let sql = `SELECT * FROM USER WHERE email = '${email}'`;
         const results = await pool.query(sql);

         if (results.length < 1)
            return res.status(400).json({ msg: "Invalid credentials..." });

         const isMatch = await bcrypt.compare(password, results[0].password);

         if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials..." });
         }

         const payload = {
            user: {
               email
            }
         };

         jwt.sign(
            payload,
            config.get("jwtSecret"),
            {
               expiresIn: 360000
            },
            (err, token) => {
               if (err) throw err;

               res.json({ token });
            }
         );
      } catch (err) {
         console.error(err.message);
         return res.status(500).json({ msg: "Server Error" });
      }
   }
);

module.exports = router;
