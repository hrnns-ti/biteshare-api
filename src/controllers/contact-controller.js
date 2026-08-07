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
    
    res.status(201).json({
      success: true,
      message: 'Message has sent successfully',
      dataID: result.insertId
    });
    
  } catch (error) {
    console.error('Error while inserting message:', error);
    res.status(500).json({
      success: false,
      error: 'Message sent failed: ' + error,
    });
  }
}

async function deleteMessage(req, res) {
  const messageID = req.body.id;
  
  try {
    const sql = 'delete from messages where id=?';
    const values = [messageID];
    const [result] = await db.promise().execute(sql, values);
  
    console.log(result)

    res.status(201).json({
      success: true,
      message: 'Message deleted',
      dataID: result.insertId
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Message has fail to deleted: ' + error,
    });
  }
}

module.exports = {
  createMessage,
  deleteMessage,
}