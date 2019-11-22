const { Router } = require('express');
const router = Router(); 

const {signinClient,signupClient,signinDistributor,
    signupDistributor } = require('../controllers/authCtrl');

router.route('/')
    .get((req,res) => res.send("Authentication routes"));

router.route('/signin/client')
    .post(signinClient)

router.route('/signup/client')
    .post(signupClient)

router.route('/signin/distributor')
    .post(signinDistributor)

router.route('/signup/distributor')
    .post(signupDistributor)
    
module.exports = router;