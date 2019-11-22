const clientCtrl = {};

const Client = require('../models/client');


clientCtrl.getClient = async (req, res) => {
    const client = await Client.findById(req.params.idClient);
    res.status(200).send({ message: "Cliente encontrado", client: client });
};

clientCtrl.getCards = async (req, res) => {
    const client = await Client.findById(req.params.idClient);
    res.status(200).send({ message: "Cliente encontrado", cards: client.cards });
};

clientCtrl.addNewCard = async (req, res) => {
    const client = await Client.findById(req.params.idClient);
    const { number, month, year, cvv, name, lastname, bank } = req.body;
    const newCard = {
        name: name,
        lastname: lastname,
        number: number,
        month: month,
        year: year,
        cvv: cvv,
        bank: bank
    };
    client.cards.push(newCard);
    client.save()
        .then(client => {
            console.log(client);
            res.status(201).send({ message: "Card creado exitosamente", cards: client.cards })
        })
        .catch(err => {
            console.log(err);
            res.status(400).send({ message: "Hubo algun error, intentelo nuevamente" })
        });
};

clientCtrl.deleteCard = async (req, res) => {
    const client = await Client.findById(req.params.idClient);
    const actCards = client.cards;
    const idCard = req.params.idCard;
    const newCards = actCards.filter( (value) => value.id !== idCard);
    res.status(200).send({ message: newCards });
    client.cards = newCards;
    client.save()
        .then(client => {
            console.log(client);
            res.status(200).send({ message: "Card eliminado exitosamente", cards: client.cards })
        })
        .catch(err => {
            console.log(err);
            res.status(400).send({ message: "Hubo algun error, intentelo nuevamente" })
        });
};

module.exports = clientCtrl;