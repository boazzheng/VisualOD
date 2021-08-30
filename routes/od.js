const express = require('express')
const router = express.Router()
const User = require('../models/user')
const City = require('../models/city')
const OD = require('../models/od')

router.get('/:city', checkUserCity, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const currentUserID = req.session.passport.user;
    currentUser = await User.findById(currentUserID).populate('city');
    const cities = await City.find({}).sort({ createdAt: -1 })
    res.render('od/index', {
        user: currentUser,
        layout: false,
        cities: cities
    })
})



// data endpoints ----------------------------------------------------------------------------

router.get('/origensedestinos/:city', checkAuthenticated, checkUserCity, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const name_cidade = req.params.city
    pipeline = [
        {
            '$match': {
                'CIDADE': name_cidade
            }
        },{
            '$group': {
                '_id': '$ORIGEM'
            }
        }
    ]
    const origens_e_destinos = await OD.aggregate(pipeline)
    // console.log(cidade)
    res.json(origens_e_destinos)
})

router.get('/tipospagamentos/:city', checkAuthenticated, checkUserCity, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const name_cidade = req.params.city
    pipeline = [
        {
            '$match': {
                'CIDADE': name_cidade
            }
        },{
            '$group': {
                '_id': '$TIPO_CARTAO'
            }
        }
    ]
    const tipos_pag = await OD.aggregate(pipeline)
    // console.log(cidade)
    res.json(tipos_pag)
})

router.get('/periodo/:city', checkAuthenticated, checkUserCity, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const name_cidade = req.params.city
    pipeline = [
        {
            '$match': {
                'CIDADE': name_cidade
            }
        }, {
            '$group': {
                '_id': '$DATA_ORIGEM'
            }
        }, {
            '$sort': {
                '_id': 1
            }
        }
    ]
    const periodo = await OD.aggregate(pipeline)
    // console.log(cidade)
    res.json(periodo)
})

router.get('/zoneamento/:city', checkAuthenticated, checkUserCity, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const name_cidade = req.params.city
    const cidade = await City.findOne({name:name_cidade})
    // console.log(cidade)
    res.json(cidade.zoneamento)
})

router.get('/coord/:city', checkAuthenticated, checkUserCity, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const name_cidade = req.params.city
    const cidade = await City.findOne({name:name_cidade})
    // console.log(cidade)
    res.json(cidade.coord)
})

router.get('/picoDU/:city', checkAuthenticated, checkUserCity, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const name_cidade = req.params.city
    const cidade = await City.findOne({name:name_cidade})
    // console.log(cidade.picoDU)
    res.json(cidade.picoDU)
})

router.get('/picoFDS/:city', checkAuthenticated, checkUserCity, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const name_cidade = req.params.city
    const cidade = await City.findOne({name:name_cidade})
    // console.log(cidade)
    res.json(cidade.picoFDS)
})

router.get('/dados/:city', checkAuthenticated, checkUserCity, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const name_cidade = req.params.city

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
    function getQueryHoraInicio (params) {
        if (params) {
            return { '$gte': params.split(',')[0] }
        } else {
            return {'$exists': true}
        }        
    }
    function getQueryHoraFim (params) {
        if (params) {
            return { '$lte': params.split(',')[1] }
        } else {
            return {'$exists': true}
        }        
    }
    const pipeline = [
        {
            '$match': {
                '$and': [
                    {'HORA_ORIGEM': getQueryHoraInicio(req.query.intervalo)},
                    {'HORA_ORIGEM': getQueryHoraFim(req.query.intervalo)},
                    {'CIDADE': name_cidade },
                    {'ORIGEM': getQueryOrigDest(req.query.origens)},
                    {'DESTINO': getQueryOrigDest(req.query.destinos)},
                    {'DATA_ORIGEM': getQueryOthers(req.query.datas)},
                    {'DIA_TIPO': getQueryOthers(req.query.dt)},
                    {'HORA_PICO': getQueryOthers(req.query.pico)},
                    {'TIPO_CARTAO': getQueryOthers(req.query.pagamentos)}
                ]
            }
        }, {
            '$group': {
                '_id': {
                    'ORIGEM': '$ORIGEM',
                    'DESTINO': '$DESTINO'
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

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

async function checkUserCity(req, res, next) {
    const currentUserID = req.session.passport.user;
    const name_cidade = req.params.city
    currentUser = await User.findById(currentUserID).populate('city')
    if (currentUser.isAdmin) {
        return next();
    } else {
        if (currentUser.city.name === name_cidade) {
            return next();
        } else {
            res.redirect('/')
        }
    };
}

function checkError(req) {
    if (req.query.error) {
        return req.query.error
    } else {
        return null
    }
}

module.exports = router