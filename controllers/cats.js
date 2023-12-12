const Cat = require("../models/cats");

exports.getAllCats = async (req, res) => {
    try {
        const result = await Cat.find().select("-__v");
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Cats found",
                result
            })
        }
        req.status(404).send({
            msg: "Cats were not found",
            err
        });
    } catch (err) {
        req.status(500).send({
            msg: "Cats were not found",
            err
        });
    }
}
exports.getCatById = async (req, res) => {
    try {
        const result = await Cat.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Cat found",
                result
            })
        }
        req.status(500).send({
            msg: "Cat was not found",
        });
    } catch (err) {
        req.status(500).send({
            msg: "Cat was not found",
            err
        });
    }
};
exports.createCat = async (req, res) => {
    try {
        const cat = new Cat({
            name: req.body.name,
            color: req.body.color,
            age: req.body.age,
            height: req.body.height,
            weight: req.body.weight,
        });
        const result = await cat.save();
        if (result) {
            return res.status(200).send({
                msg: "Cat created",
                createdCat: {
                    url: `http://localhost:3000/cats/${result._id}`,
                    result
                }
            })
        }
        res.status(500).send({
            msg: "Cat was not created"
        });
    } catch (err) {
        res.status(500).send({
            msg: "Cat was not created",

            err
        });
    }
}
exports.updateCat = async (req, res) => {
    try {
        const update = {
            name: req.body.name,
            color: req.body.color,
            age: req.body.age,
            height: req.body.height,
            weight: req.body.weight,
        };
        const result = await Cat.findByIdAndUpdate(req.params.id, update);
        if (result) {
            return res.status(201).send({
                msg: "Cat updated",
                updatedUser: {
                    url: `http://localhost:3000/cats/${result._id}`,
                    result
                }
            })
        }
        res.status(500).send({
            msg: "Cat was not updated"
        });
    } catch (err) {
        res.status(500).send({
            msg: "Cat was not updated",
            err
        });
    }
}
exports.patchCat = async (req, res) => {
    try {
        const update = {};
        for (const ops of req.body) {
            update[ops.propName] = ops.value;
        }
        const result = await Cat.findByIdAndUpdate(req.params.id, update);
        if (result) {
            return res.status(200).send({
                msg: "Cat patched",
                ulr: `http://localhost:3000/cats/${req.params.id}`
            })
        }
        res.status(500).send({
            msg: "Cat was not patched",
            err
        });
    } catch (err) {
        res.status(500).send({
            msg: "Cat was not patched",
            err
        });
    }
}
exports.deleteCat = async (req, res) => {
    try {
        const result = await Cat.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Cat deleted"
            });
        }
        res.status(500).send({
            msg: "Cat was not deleted"
        });
    } catch (err) {
        res.status(500).send({
            msg: "Cat was not deleted",
            err
        });
    }
};
