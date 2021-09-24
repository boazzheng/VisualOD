const express = require('express')
const router = express.Router()
const User = require('../models/user')
const City = require('../models/city')
const iguDoc = require('../models/doc')
const formidable = require('formidable')
const fs = require('fs')
const passport = require('passport')
const { checkAuthenticated, checkNotAuthenticated, checkUserCity, checkError, checkIsAdmin } = require('../public/js/check')

// Add files Route
router.post('/', checkAuthenticated, checkIsAdmin, async (req, res) => {
    res.locals.errorMessage = checkError(req);
    const form = formidable.IncomingForm()
    form.multiples = true
    form.maxFileSize = 100 * 1024 * 1024 // 5MB
    const currentUserID = req.session.passport.user;
    console.log(currentUserID)
    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.log(err)
            return;
        }
        const arq = fs.readFileSync(files.arq.path)
        try {
            arq_igu = new iguDoc({
                name: files.arq.name.split('.')[0],
                type: "intersecção",
                data: arq,
                areaDescription: "001",
                // city: {
                    //     type: mongoose.Schema.Types.ObjectId,
                    //     ref: 'City'
                    // }
                })
                
                const newiguDoc = await arq_igu.save()
            } catch (err) {
                // console.log(err)
        }
        res.status(200).send()
    })
})

// teste de pdf adicionado
// router.get('/', async (req, res) => {
//     const pdf = await iguDoc.findOne({})
//     fs.writeFile('testout.pdf', pdf.data, function(err){
//         if (err) throw err;
//         res.send('Sucessfully saved!');
//     });
// })

module.exports = router