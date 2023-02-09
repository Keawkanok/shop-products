const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' })
// const storage = multer.memoryStorage();
const Product = require('../models/product');

// image storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

// Filter image .jpeg and .png
const filefFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    filefFilter: filefFilter
});

// Get http://localhost:3000/products/
router.get('/', (req, res, next) => {
    Product.find()
        // .select("name number price _id productImage")
        .select("name type price _id productImage")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        name: doc.name,
                        // number: doc.number,
                        type: doc.type,
                        price: doc.price,
                        productImage: doc.productImage,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            imageUrl: 'http://localhost:3000/uploads/' + doc.productImage,
                            url: 'http://localhost:3000/products/' + doc._id
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


// Post http://localhost:3000/products/
router.post('/', upload.single('productImage'), (req, res, next) => {
    // const product = {
    //     name: req.body.name,
    //     number: req.body.number,
    //     price: req.body.price
    // };
    console.log(req.file, req.body);
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        // number: req.body.number,
        type: req.body.type,
        price: req.body.price,
        productImage: req.file.originalname
    })
    product.save().then(result => {
        // console.log(result);
        res.status(200).json({
            message: 'Create product successfully',
            createProduct: {
                name: result.name,
                // number: result.number,
                type: result.type,
                price: result.price,
                productImage: result.productImage,
                _id: result._id,
                request: {
                    type: 'GET',
                    imageUrl: 'http://localhost:3000/uploads/' + result.productImage,
                    url: 'http://localhost:3000/products/' + result._id
                }
            }
        })
    })
})


// Get produc ID
router.get('/:productId', async (req, res, next) => {
    const id = req.params.productId;
    await Product.findById(id)
        // .select("name number price _id productImage")
        .select("name type price _id productImage")
        .exec()
        .then(doc => {
            // console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/products/' + id
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

// Search Name Filter 
router.get("/search/:searchName", async (req, res) => {
    await Product.find({
        "$or": [{
            "name": { $regex: req.params.searchName }
        }]
    }).exec()
        .then(docs => {
            // console.log(docs)
            const response = {
                products: docs.map(doc => {
                    return {
                        name: doc.name,
                        // number: doc.number,
                        type: doc.type,
                        price: doc.price,
                        productImage: doc.productImage,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            imageUrl: 'http://localhost:3000/uploads/' + doc.productImage,
                            url: 'http://localhost:3000/products/' + doc._id
                        }
                    }
                })
            }
            res.status(200).json(response);
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
})

// Update produc ID
router.patch("/:productId", (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const i of req.body) {
        updateOps[i.propName] = i.value;
    }
    Product.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            // console.log(result);
            res.status(200).json({
                message: 'Product updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/products/' + id
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
router.delete("/:productId", (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id }).exec().then(result => {
        res.status(200).json({
            message: 'Product delete',
            request: {
                type: 'POST',
                url: 'http://localhost:3000/products/' + id,
                // data: { name: 'String', number: 'Number', price: 'Number' 
                data: {
                    name: 'String', type: 'String', price: 'Number'

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