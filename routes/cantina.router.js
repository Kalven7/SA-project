import express from 'express';

const cantina = express.Router();
 cantina.get('/', (req,res) => {
res.send('Rota da cantina');

});



export default cantina;