const { Router } = require('express');
const router = Router(); 

const {getDistributors, confirmarPrestamo, getPrestamos } = require('../controllers/distributorsCtrl');

router.route('/')
    .get(getDistributors);

router.route('/:idDistributor/confirmarprestamo')
    .post(confirmarPrestamo)

router.route('/:idDistributor/prestamos')
    .get(getPrestamos)
    
module.exports = router;