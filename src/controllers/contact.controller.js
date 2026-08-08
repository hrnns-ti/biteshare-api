const db = require('../config/database')

// create message
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

// delete message
async function deleteMessage(req, res) {
  const messageID = req.body.id;
  
  try {
    const sql = 'delete from messages where id=?';
    const values = [messageID];
    const [result] = await db.promise().execute(sql, values);
      
    res.status(201).json({
      success: true,
      message: 'Message deleted',
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Message has fail to deleted: ' + error,
    });
  }
}

// read message
async function readMessage(req, res) {
  try {
    const sql = 'select (name, email, phone, subject, message, created_at) from messages order by id desc'
    const [result] = await db.promise().execute(sql);
    
    res.status(201).json({
      success: true,
      data: result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to get messages: ' + error,
    });
  }

}

module.exports = {
  createMessage,
  deleteMessage,
  readMessage,
}