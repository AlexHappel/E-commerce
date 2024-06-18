const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Add a simple test route to verify JSON response
router.get('/test', (req, res) => {
  res.json({ message: 'API is working' });
});

module.exports = router;