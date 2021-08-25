const express = require('express')
const router = express.Router()
const User = require('../models/user')
const City = require('../models/city')
const OD = require('../models/od')

router.get('/:city', checkAuthenticated, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    res.render('od/index', {
        layout: false,
    })
})



// dada endpoints ----------------------------------------------------------------------------

router.get('/origensedestinos/:city', checkAuthenticated, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    pipeline = [
        {
            '$group': {
                '_id': '$ORIGEM'
            }
        }
    ]
    const origens_e_destinos = await OD.aggregate(pipeline)
    // console.log(cidade)
    res.json(origens_e_destinos)
})

router.get('/dados/:city', checkAuthenticated, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    
    function getQueryOrigDest (params) {
        if (params) {
            return {'$in': params.split(',').map(x => +x)}
        } else {
            return 0
        }        
    }
    function getQueryOthers (params) {
        if (params) {
            return {'$in': params.split(',')}
        } else {
            return {'$exists': true}
        }        
    }

    const pipeline = [
        {
            '$match': {
                'ORIGEM': getQueryOrigDest(req.query.origens),
                'DESTINO': getQueryOrigDest(req.query.destinos),
                'DATA_ORIGEM': getQueryOthers(req.query.datas),
                'DIA_TIPO': getQueryOthers(req.query.dt),
                'TIPO_CARTAO': getQueryOthers(req.query.pagamentos)
            }
        }, {
            '$group': {
                '_id': {
                    'ORIGEM': '$ORIGEM',
                    'DESTINO': '$DESTINO',
                    'DATA_ORIGEM': '$DATA_ORIGEM',
                    'TIPO_CARTAO': '$TIPO_CARTAO'
                },
                'QUANTIDADE_PASSAGEIROS': {
                    '$sum': '$QUANTIDADE_PASSAGEIROS'
                }
            }
        }
    ]
    var resultadoOD = await OD.aggregate(pipeline)
    res.json(resultadoOD)
})

router.get('/zoneamento/:city', checkAuthenticated, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const name_cidade = req.params.city
    const cidade = await City.findOne({name:name_cidade})
    // console.log(cidade)
    res.json(cidade.zoneamento)
})

router.get('/coord/:city', checkAuthenticated, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const name_cidade = req.params.city
    const cidade = await City.findOne({name:name_cidade})
    // console.log(cidade)
    res.json(cidade.coord)
})


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};


function checkError(req) {
    if (req.query.error) {
        return req.query.error
    } else {
        return null
    }
}

module.exports = router