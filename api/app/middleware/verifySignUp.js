/*To verify a Signup action, we need 2 functions:
– check if username or email is duplicate or not
– check if roles in the request is existed or not*/
const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }

  next();
};

checkLengthFields = (req, res, next) => {
  if (!req.body.roles||!req.body.username||!req.body.password||!req.body.email){
    res.status(400).send({
      message: "Failed! Some Field is missing or with empty value"
    });
    return;
  }
  if (Object.keys(req.body.password).length < 6) {
    res.status(400).send({
      message: "Failed! Length of the password must be 6 or greatest "
    });
    return;
  };
  if (Object.keys(req.body.username).length < 4) {
    res.status(400).send({
      message: "Failed! Length of the username must be 4 or greatest "
    });
    return;
  };
  if (Object.keys(req.body.email).length < 5) {
    res.status(400).send({
      message: "Failed! Length of the username must be 5 or greatest "
    });
    return;
  };

  next();
};

checkPasswordStrength= (req, res, next) => {
  const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
  const mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
  let strengthType ='';
  if (strongPassword.test(req.body.password)) {
    strengthType='Strong';
  } else if (mediumPassword.test(req.body.password)) {
    strengthType='Medium';
  } else {
    strengthType='Weak';
  }
  if (strengthType === 'Weak') {
    res.status(400).send({
      message: "Failed! the strength of Password is not enought"
    });
    return;
  };
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted,
  checkLengthFields: checkLengthFields,
  checkPasswordStrength: checkPasswordStrength,
};

module.exports = verifySignUp;
