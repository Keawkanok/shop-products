const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const nodeProduct = require("../models/nodeProduct");


// Get
router.get('/', (req, res, next) => {
    nodeProduct.find()
        .select("name _id nameProduct numberPrice notYetPain paid node")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                nodeproducts: docs.map(doc => {
                    return {
                        name: doc.name,
                        nameProduct: doc.nameProduct,
                        numberPrice: doc.numberPrice,
                        notYetPain: doc.notYetPain,
                        paid: doc.paid,
                        node: doc.node,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/nodeproducts/' + doc._id
                        }
                    }
                })
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})

router.post('/', (req, res, next) => {
    console.log(req.file, req.body);
    const nodeProducts = new nodeProduct({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        nameProduct: req.body.nameProduct,
        numberPrice: req.body.numberPrice,
        notYetPain: req.body.notYetPain,
        paid: req.body.paid,
        node: req.body.node,
    })
    nodeProducts.save().then(result => {
        // console.log(result);
        res.status(200).json({
            message: 'Create product successfully',
            createProduct: {
                name: result.name,
                nameProduct: result.nameProduct,
                numberPrice: result.numberPrice,
                notYetPain: result.notYetPain,
                paid: result.paid,
                node: result.node,
                _id: result._id,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/nodeproducts/' + result._id
                }
            }
        })
    })
})

// Get produc ID
router.get('/:nodeProductId', async (req, res, next) => {
    const id = req.params.nodeProductId;
    await nodeProduct.findById(id)
        .select("name _id nameProduct numberPrice notYetPain paid node")
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/nodeproducts/' + id
                    }
                })
            } else {
                res.status(404).json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
})

// Update produc ID
router.patch("/:nodeProductId", (req, res, next) => {
    const id = req.params.nodeProductId;
    const updateOps = {};
    for (const i of req.body) {
        updateOps[i.propName] = i.value;
    }
    Product.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Product updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/nodeproducts/' + id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


// Delete product ID
router.delete("/:nodeProductId", (req, res, next) => {
    const id = req.params.nodeProductId;
    Product.remove({ _id: id }).exec().then(result => {
        res.status(200).json({
            message: 'Product delete',
            request: {
                type: 'POST',
                url: 'http://localhost:3000/nodeproducts/' + id,
                // data: { name: 'String', number: 'Number', price: 'Number' 
                data: {
                    name: 'String', nameProduct: 'String', numberPrice: 'Number',
                    notYetPain: 'String', paid: 'String', node: 'String'

                }
            }
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


module.exports = router;
