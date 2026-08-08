const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization']

  const token = authHeader && authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).json({
      status: false,
      message: 'Access Denied. Token not found.'
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_PASS)
    req.user = decoded

    next()
  } catch (error) {
    return res.status(403).json({
      status: false,
      message: 'Invalid token'
    })
  }
}

function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    return res.status(403).json({
      status: false,
      message: 'Access Denied. Admin only'
    }) 
  }
}

module.exports = {
  verifyToken,
  isAdmin
}