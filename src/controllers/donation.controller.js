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
   const sql = 'select provider_id, food_name, quantity, pickup_location, status, created_at from donations'
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

module.exports = {
  createDonation,
  getDonations,
}