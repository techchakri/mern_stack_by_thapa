// controllers

//? In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.

// Home Logic

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to world best mern series by thapa technical using router and controllers"
      );
  } catch (error) {
    console.log(error);
  }
};

// Registration Logic

const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send({message:req.body});
  } catch (error) {
    res.status(400).send({message:"Page Not Found"})
  }
};

module.exports = { home, register };
