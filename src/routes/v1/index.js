
const express = require('express')
const { InfoController } = require('../../controllers')

const router = express.Router()

// router.get('/info',(req,res)=>{
//     return res.json({
//         msg:"OK"
//     })
// })

router.get('/info',InfoController.info)

module.exports = router