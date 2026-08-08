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

module.exports = {
  createDonation,
}