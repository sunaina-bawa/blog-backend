const express = require("express");
const { blog_model } = require("../Model/blogsModel");
const { auth } = require("../MiddleWare/auth");
const BlogRoutes = express.Router();
BlogRoutes.use(express.json());
BlogRoutes.get("/", auth, async (req, res) => {
  try {
    const notes = await blog_model.find({ userId: req.body.userId });
    res.send(notes);
  } catch (err) {
    res.send({ error: err.message });
  }
});
BlogRoutes.post("/add", auth, async (req, res) => {
  try {
    const user = new blog_model(req.body);
    await user.save();
    res.status(200).send({ msg: "Your New Blog added" });
  } catch (err) {
    res.status(400).send(err);
  }
});
BlogRoutes.delete("/delete/:id", auth, async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  if (id) {
    try {
      await blog_model.findByIdAndDelete({ _id: id });
      res.status(200).send({ msg: "Blogs has been deleted " });
    } catch (err) {
      res.send({ error: err.message });
    }
  }
});

BlogRoutes.get("/edit/:id", auth, async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      const notes = await blog_model.findById({ _id: id });
      res.send(notes);
    } catch (err) {
      res.send({ error: err.message });
    }
  }
});
BlogRoutes.patch("/edit/:id", auth, async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  console.log(payload);
  if (id) {
    try {
      await blog_model.findByIdAndUpdate({ _id: id }, payload);
      res.send("updated successfully");
    } catch (err) {
      res.send({ error: err.message });
    }
  }
});
module.exports = {
  BlogRoutes,
};
