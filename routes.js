const express = require("express");
const routes = express.Router();
const weather = require("./weather.json");
const animals = require("./animals.json");
const { uuid } = require("uuidv4");

routes.get("/", (req, res) => {
  return res.json(weather);
});
routes.get("/animals", (req, res) => {
  return res.json(animals);
});

routes.post("/:animals", (req, res) => {
  const { name, type, age } = req.body;

  const animal = {
    name,
    type,
    age,
  };
  if (animal.name === undefined) {
    console.log(animal);
    return res.status(400).end("Nao enviado");
  }

  animals.push(animal);

  return res.status(201).json(animal);
});

routes.put("/animals/:name", (req, res) => {
  console.log("PUT");
  const { names } = req.params;
  const { name, type, age } = req.body;

  const newAnimal = {
    name,
    type,
    age,
  };

  const animalIndex = animals.findIndex((animal) => animal.names == names);

  animals[animalIndex] = newAnimal;
  return res.json(newAnimal);
});

routes.delete("/animals/:name", (req, res) => {
  console.log("DELETE");
  const { names } = req.params;

  const animalIndex = animals.findIndex((animal) => animal.names == names);
  animals.splice(animalIndex, 1)
  return res.status(204).send();
});
module.exports = routes;
