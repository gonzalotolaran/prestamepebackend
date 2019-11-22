const authCtrl = {};

const Client = require('../models/client');
const Distributor = require('../models/distributor');

// Client methods

authCtrl.signinClient = async (req, res) => {
    const {email,password} = req.body;
    const fClient = await Client.findOne({"email": email})
    if (fClient != null) {
        if (password == fClient.password) {
            res.status(200).send({message: "Usuario encontrado",
        user: fClient})
        }else {
            res.status(400).send({message: "Contraseña incorrecta"})
        }
    }else {
        res.status(400).send({message: "No se encuentra ningun cliente registrado con ese email"})
    }
};

authCtrl.signupClient = (req, res) => {
    const {name,lastname,email,password} = req.body;
    const newClient = new Client({
        name: name,
        lastname: lastname,
        email: email,
        password: password
    });
    newClient.save()
        .then(client => {
            console.log(client);
            res.status(201).send({message: "Cliente creado exitosamente", client})
        })
        .catch(err => res.status(400).send({message: "Hubo algun error, intentelo nuevamente"}));
};

// Distributor methods

authCtrl.signinDistributor = async (req, res) => {
    const {email,password} = req.body;
    const fDistributor = await Distributor.findOne({"email": email})
    if (fDistributor != null) {
        if (password == fDistributor.password) {
            res.status(200).send({message: "Usuario encontrado",
        user: fDistributor})
        }else {
            res.status(400).send({message: "Contraseña incorrecta"})
        }
    }else {
        res.status(400).send({message: "No se encuentra ningun distribuidor registrado con ese email"})
    }
};


authCtrl.signupDistributor = (req, res) => {
    const {namestore, email, password, lat, lng} = req.body;
    const newDistributor = new Distributor({
        namestore: namestore,
        email: email,
        password: password,
        lat: lat,
        lng: lng
    });
    newDistributor.save()
        .then(distributor => {
            console.log(distributor);
            res.status(201).send({message: "Distribuidor creado exitosamente",distributor})
        })
        .catch(err => res.status(400).send({message: "Hubo algun error, intentelo nuevamente"}));
    ;
};



module.exports = authCtrl;