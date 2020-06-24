const router = require('express').Router();
const verify = require('./verifyToken')
router.get('/',verify,(req,res)=>{
    res.json({person:{
        name:"hieu",
        age:"30",
        birthday:"23/1999",
        car:{
            name:"r3",
            brand:"yamaha"
        },
        address:[
            {
                city:"ha noi",
                zipcode:"7000"
            },
            {
                city:"thanh hoa",
                zipcode:"1000"
            }
        ]
    }})
})
module.exports =router;