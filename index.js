const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({destination:(req,file,cb)=>{
    cb(null,"loads/")
    },
    filename:(req,file,cb)=>{
        var name_file = "profile"+Date.now()+path.extname(file.originalname)
        cb(null,name_file)
        console.log(name_file)
    }
    

})

const upload = multer({storage})
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/uploads',upload.single("file"),(req,res)=>{
    res.json({file:upload.filename})
})

app.listen(3000,()=>{console.log('server running in port 3000')})