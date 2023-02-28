const md5 = require("md5");
const db = require("../../models");
const User = db.User


exports.register = async (req, res) => {
    let body = req.body;
    let success = false;
    body.password = md5(req.body.password);
    await User.findOne({ email: req.body.email })
      .lean()
      .then(async (data) => {
        if (data === null) {
          let user = new User(body);
          user.save(user).then((data) => {
            res.status(200).send({
              success: true,
              data: data,
              message: "Register successfully",
            });
          });
        } else {
          return res.status(200).send({
            success: false,
            data: null,
            message: "Email already exists",
          });
        }
      });
  };
  
  exports.login = async (req, res) => {
    let user = await User.findOne({
      email: req.body.email,
      password: md5(req.body.password),
    });
    if (user) {
      // let user = new User(body);
      user.save(user).then((data) => {
        res.status(200).send({
          success: true,
          data: data,
          message: "Login successfully",
        });
      });
    } else {
      return res.status(200).send({
        success: false,
        data: null,
        message: "Invalid login details",
      });
    }
    // res.send(user)
  };
  
  exports.getRegister = async (req, res) => {
    User.find({}).then((data) => {
      res.status(200).send({
        success: "true",
        message: "All Users !!",
        data: data,
      });
    });
  };