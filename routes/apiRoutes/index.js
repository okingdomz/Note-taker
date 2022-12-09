// used to create onject within a new router and serve as middleware, then create a new route
const router = require('express').Router();
const notesRoutes = require('./noteRoutes.js');
// using middleware for router functions
router.use(notesRoutes);

module.exports = router;