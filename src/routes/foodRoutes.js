const express = require("express");
const router = express.Router();
const Food = require("../models/food"); // Asegúrate de crear el modelo en un archivo separado

// Obtener la lista de alimentos
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).send("Error al obtener los alimentos");
  }
});

// Agregar un nuevo alimento
router.post("/", async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(201).json(food);
  } catch (err) {
    res.status(500).send("Error al agregar un alimento");
  }
});

// Actualizar un alimento específico
router.put("/:id", async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!food) return res.status(404).send("Alimento no encontrado");
    res.json(food);
  } catch (err) {
    res.status(500).send("Error al actualizar el alimento");
  }
});

// Eliminar un alimento
router.delete("/:id", async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) return res.status(404).send("Alimento no encontrado");
    res.json({ message: "Alimento eliminado" });
  } catch (err) {
    res.status(500).send("Error al eliminar el alimento");
  }
});

module.exports = router;
