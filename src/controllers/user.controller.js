const db = require('../config/database');
const bcrypt = require('bcrypt')

// sign in
async function signin(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  
  try {


    const sql = 'select * from users where email=?';
    const values = [email];
    const [result] = await db.promise().execute(sql, values);

    if (result.length === 0) {
      return res.status(401).json({
          status: false,
          message: "Email or password didn't match"
      });
    }

    const isMatch = await bcrypt.compare(password, result[0].password)
    
    if (!isMatch) { 
      return res.status(401).json({
          status: false,
          message: "Email or password didn't match"
      });
    };  

    res.status(200).json({
      status: true,
      data: result
    });
    
  } catch (error) {
    res.status(500).json({
      status: false,
      error: 'Sign in failed: ' + error
    });   
  }
}

// sign up
async function signup(req, res) {
  const fullname = req.body.fullname
  const email = req.body.email;
  const password = req.body.password;
  const passwordMatch = req.body.passwordMatch;

  try {
    if (password !== passwordMatch) {
      return res.status(400).json({
        status: false,
        message: "Password doesn't match"
      });
    }
  
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    // const emailSQL = 'select * from users where email=?';
    // const emailValues = [email];
    // const [result] = await db.promise().execute(sql, values);

  
    const sql = 'insert into users(fullname, email, password) values (?, ?, ?)';
    const values = [fullname, email, hashedPassword];
    const [result] = await db.promise().execute(sql, values);
  
    res.status(201).json({
      status: true,
      data: result
    });

  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({
        status: false,
        message: 'Email sudah terdaftar.'
      });
    }
    res.status(500).json({
      status: false,
      message: 'Sign up failed: ' + error.message
    });
  }
}

// forgot password
async function forgotPass(req, res) {
  

  const salt = 7
  const hashedPassword = bcrypt.hash(password)
}

module.exports = {
  signin,
  signup,
  forgotPass
}