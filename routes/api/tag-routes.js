const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({include: [{model: Product, through: ProductTag}]}).then(data => res.json(data))
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({ where: {id: req.params.id}, include: [{model: Product, through: ProductTag}]})
  .then(data => {
    if (!data) return res.status(500).json({error: 'Tag not found'})
    res.json(data)
  })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body).then(data => res.json(data))
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {where: {id: req.params.id}}).then(data => res.json(data))
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({where: {id: req.params.id}}.then(data => res.json(data)))
  // delete on tag by its `id` value
});

module.exports = router;
