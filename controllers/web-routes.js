const router = require('express').Router();
const { response } = require('express');
const { json } = require('express/lib/response');
const sequelize = require('../config/connection');
const { User, Product, Rate, Store } = require('../models');
//add models request here


//add route to get all, model.findAll
router.get('/', (req, res) => {  
    
    // if(response.ok) {
    try {   
    res.render('homepage', { loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

// router.get('/login', (req,res) => {
//     if(req.session.loggedIn) {
//         res.redirect('/api/products')
//     }
// })

// //add route to get 1, model.findOne
// router.get('/:id', (req, res) => { });


// //add route to create, model.create
// router.post('/', (req, res) => { });


// //add route to update 1, model.update
// router.put('/:id', (req, res) => { });


// //add route to delete 1, model.destroy
// router.delete('/', (req, res) => { });


module.exports = router;