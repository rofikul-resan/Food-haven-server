const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const recipes = require("./data/recipes.json");
const chefList = require("./data/chefLIst.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("your server is running");
});

app.get("/chef", (req, res) => {
  res.send(chefList);
});
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const chefRecipes = recipes.filter((recipe) => +recipe.chef_id === +id);
  const selectedChef = chefList.find((chef) => +chef.id === +id);
  res.send({ chefRecipes, selectedChef });
});

app.get("/foods", (req, res) => {
  res.send(recipes);
});

app.listen(port, () => {
  console.log("hay buddy");
});
