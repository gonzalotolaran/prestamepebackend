const { Router } = require('express');
const router = Router(); 

const { getCards, addNewCard, deleteCard, getClient, addPrestamo} = require('../controllers/clientCtrl');

router.route('/')
    .get((req,res) => res.send("Client routes"))


router.route('/:idClient')
    .get(getClient)

router.route('/:idClient/cards')
    .get(getCards)
    .post(addNewCard)

router.route('/:idClient/cards/:idCard')
    .delete(deleteCard)

router.route('/:idClient/prestamos')
    .post(addPrestamo)


module.exports = router;