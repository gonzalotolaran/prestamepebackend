const distributorsCtrl = {};

const Distributor = require('../models/distributor');
const Prestamo = require('../models/prestamo')

distributorsCtrl.getDistributors = async (req, res) => {
    const stores = await Distributor.find({});
    res.status(200).send({message: "Distribuidores encontrados",
        distributors: stores});
};


// Get reporte de prestamos

distributorsCtrl.getPrestamos = async (req, res) => {
    const idDistributor = req.params.idDistributor;
    const prestamos = await Prestamo.find({"idDistribuidor": idDistributor}).sort('-createdAt').populate('idCliente');
    console.log(prestamos);
    res.status(200).send({ message: "Prestamos encontrados", prestamos });

};


// Confirmar prestamos 

distributorsCtrl.confirmarPrestamo = async (req, res) => {
    const idDistributor = req.params.idDistributor;
    const { idPrestamo } = req.body;
    const prestamo = await Prestamo.findById(idPrestamo);
    if (prestamo.estado == "completado"){
        res.status(400).send({ message: "Ya fue utilizado este codigo QR" })
    }else {
        prestamo.estado = "completado";
        prestamo.idDistribuidor = idDistributor;
        prestamo.save()
            .then(prestamo => {
                console.log(prestamo);
                res.status(200).send({ message: "Prestamo completado exitosamente", prestamo })
            })
            .catch(err => {
                console.log(err);
                res.status(400).send({ message: "Hubo algun error, intentelo nuevamente" })
            });
    }   
};






module.exports = distributorsCtrl;