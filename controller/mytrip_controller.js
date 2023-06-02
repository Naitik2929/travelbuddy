const User = require("../models/user");
const Trip = require("../models/trip");
exports.getTrip = (req, res, next) => {
  User.findById(req.user._id)
    .populate("trips")
    .then((user) => {
      res.render("mytrip", { user: user });
    })
    .catch((err) => {
      console.error("Failed to retrieve user:", err);
      next(err);
    });
};
exports.deleteTrip = (req, res) => {
  const user = req.user;
  Trip.findByIdAndDelete(req.params.id).then((trip) => {
    res.redirect("/mytrip");
  });
};
