const User = require("../models/users");

exports.getAllUsers = (req, res) => {
    res.send("respond with a resource");
}
exports.getUserById = async (req, res) => {
    try {
        const result = await User.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "User found",
                result
            })
        }
        req.status(500).send({
            msg: "User was not found",
        });
    } catch (err) {
        req.status(500).send({
            msg: "User was not found",
            err
        });
    }
};
exports.createUser = async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
        });
        const result = await user.save();
        if (result) {
            return res.status(201).send({
                msg: "User created",
                createUser: {
                    url: `http//localhost:3000/users/${result._id}`,
                    result
                }
            })
        }
        res.status(500).send({
            msg: "User was not crated"
        });
    } catch (err) {
        res.status(500).send({
            msg: "User was not crated"
        });
    }
}
exports.updateUser = (req, res) => {
    res.send("respond with a resource");
}
exports.patchUser = (req, res) => {
    res.send("respond with a resource");
}
exports.deleteUser = (req, res) => {
    res.send("respond with a resource");
}
