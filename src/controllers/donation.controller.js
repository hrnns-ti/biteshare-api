const db = require('../config/database')


async function createDonation(req, res) {
  const providerID = req.user.id;
  const foodName = req.body.foodName;
  const quantity = req.body.quantity;
  const pickUpLocation = req.body.pickUpLocation;

  try {
   const sql = 'insert into donations(provider_id, food_name, quantity, pickup_location) values (?, ?, ?, ?)'
   const values = [providerID, foodName, quantity, pickUpLocation]
   const result = await db.promise().execute(sql, values)

   res.status(201).json({
    status: true,
    message: 'Donation created successfully!'
   })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to book donation: ' + error
    })
  }
}

async function getDonations(req, res) {
  try {
   const sql = `select provider_id, food_name, quantity, pickup_location, status, created_at from donations order by field(status, 'pending', 'completed'), created_at asc`
   const [result] = await db.promise().execute(sql)
   
   res.status(201).json({
    status: true,
    message: 'Donation created successfully!',
    data: result
   })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to get booking list: ' + error
    })
  }
}

async function changeStatus(req, res) {
  const status = req.body.status
  const id = req.body.id
  try {
   const sql = 'update donations set status = ? where id = ?'
   const values = [status, id]
   const [result] = await db.promise().execute(sql, values)
   
   res.status(201).json({
    status: true,
    message: 'Donation created successfully!',
    data: result
   })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to change booking status: ' + error
    })
  }
}



module.exports = {
  createDonation,
  getDonations,
  changeStatus,
  myDonations
}