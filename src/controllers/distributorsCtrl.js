const distributorsCtrl = {};

const Distributor = require('../models/distributor');

distributorsCtrl.getDistributors = async (req, res) => {
    const stores = await Distributor.find({});
    res.status(200).send({message: "Distribuidores encontrados",
        distributors: stores});
};


module.exports = distributorsCtrl;