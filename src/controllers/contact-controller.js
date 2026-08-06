const db = require('../config/database')

async function createMessage(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const subject = req.body.subject;
  const message = req.body.message;

  try {
    const sql = 'insert into messages(name,email, phone, subject, message) VALUES (?, ?, ?, ?, ?)';
    const values = [name, email, phone, subject, message];

    const [result, fields] = await db.promise().execute(sql, values);
    console.log(result);
    console.log(fields);

    res.status(201).json({
      success: true,
      message: 'Message has sent successfully',
      dataID: result.insertId
    });

  } catch (error) {
    console.error('Error while inserting message:', error);
    res.status(500).json({
      success: false,
      error: 'Message sent failed: ', error,
    });
  }
}

module.exports = {
  createMessage
}