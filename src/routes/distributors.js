const { Router } = require('express');
const router = Router(); 

const {getDistributors } = require('../controllers/distributorsCtrl');

router.route('/')
    .get(getDistributors);
   
module.exports = router;