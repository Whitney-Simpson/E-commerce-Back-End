const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//Use this sheet for products and tags
router.get('/', (req, res) => {
  Category.findAll({include: [Product]}).then(data => res.json(data))
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {include: [Product]}).then(data => res.json(data))
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then(data => res.json(data))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: {id: req.params.id}}).then(data => res.json(data))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id: req.params.id}}).then(data => res.json(data))
});

module.exports = router;
