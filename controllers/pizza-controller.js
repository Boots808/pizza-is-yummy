<<<<<<< HEAD
const { Pizza } = require("../models");
=======
const { Pizza } = require('../models');
>>>>>>> feature

const pizzaController = {
  // get all pizzas
  getAllPizza(req, res) {
    Pizza.find({})
<<<<<<< HEAD
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((err) => {
=======
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
>>>>>>> feature
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one pizza by id
  getPizzaById({ params }, res) {
    Pizza.findOne({ _id: params.id })
<<<<<<< HEAD
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((err) => {
=======
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
>>>>>>> feature
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createPizza
  createPizza({ body }, res) {
    Pizza.create(body)
<<<<<<< HEAD
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((err) => res.json(err));
=======
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.json(err));
>>>>>>> feature
  },

  // update pizza by id
  updatePizza({ params, body }, res) {
    Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
<<<<<<< HEAD
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res.status(404).json({ message: "No pizza found with this id!" });
=======
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
>>>>>>> feature
          return;
        }
        res.json(dbPizzaData);
      })
<<<<<<< HEAD
      .catch((err) => res.status(400).json(err));
=======
      .catch(err => res.json(err));
>>>>>>> feature
  },

  // delete pizza
  deletePizza({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
<<<<<<< HEAD
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res.status(404).json({ message: "No pizza found with this id!" });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch((err) => res.status(400).json(err));
  },
=======
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.json(err));
  }
>>>>>>> feature
};

module.exports = pizzaController;
