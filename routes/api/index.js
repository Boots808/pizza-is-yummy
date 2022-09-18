const router = require('express').Router();
<<<<<<< HEAD
const pizzaRoutes = require('./pizza-routes');

=======
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
>>>>>>> feature
router.use('/pizzas', pizzaRoutes);

module.exports = router;
