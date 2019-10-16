const express = require('express')
const router = express.Router();

const authMiddleware = require('../middlewares/auth')

//Usar um middleware antes de acessar
router.use(authMiddleware)

router.get('/', (req, res) => {
    res.send({ok : true, user: req.userId })
})

//O que é um midware, interceptar a requisição do controller e da rota

module.exports = app => app.use('/projects', router)