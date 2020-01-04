const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");
var pool = require("../config/db");

// @route   GET api/users:id
// @desc    Get a user
// @access  Private
router.get("/:id", async (req, res) => {

   console.log("Request param: " + req.params.id);
   let sql = `SELECT * FROM USER WHERE email = '${req.params.id}'`;

   try {
      const results = await pool.query(sql);

      if (results.length < 1)
         return res.json({ msg: "No entries found..."});

      return res.json(results[0]);

   } catch (err) {
      throw err;
   }
});

// @route   GET api/users
// @desc    Get users
// @access  Private
router.get("/", async (req, res) => {
   let sql = "SELECT * FROM USER";

   try {
      const results = await pool.query(sql);
      res.json(results);
   } catch (err) {
      throw err;
   }
});

// @route   POST api/users
// @desc    Registers a user
// @access  Public
router.post(
   "/",
   [
      check("firstName", "Please enter a valid name")
         .not()
         .isEmpty(),
      check("lastName", "Please enter a valid name")
         .not()
         .isEmpty(),
      check("email", "Please enter a valid email").isEmail(),
      check(
         "password",
         "Please enter a valid password with minimum 6 characters"
      ).isLength({ min: 6 })
   ],
   async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

      const { firstName, lastName, email, password } = req.body;

      try {
         let sql = `SELECT * FROM USER WHERE email = '${email}'`;
         let rows = await pool.query(sql);

         if (rows[0]) {
            return res.status(400).json({ msg: "User already exists..." });
         }

         const salt = await bcrypt.genSalt(10);

         let hashPassword = await bcrypt.hash(password, salt);

         sql = `INSERT INTO USER (firstName, lastName, email, password) 
               VALUES ('${firstName}', '${lastName}', '${email}', '${hashPassword}')`;

         await pool.query(sql);

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
         console.log(err.message);
         res.status(500).send("Server Error");
      }
   }
);

module.exports = router;
