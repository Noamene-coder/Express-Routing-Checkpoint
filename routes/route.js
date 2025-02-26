import express from 'express'
import path from 'path'
const router = express.Router()
const __dirname = path.resolve()
router.get ('/home',(req,res)=>{res.sendFile(path.join(__dirname,"./","page","home.html"))})
router.get ('/contact',(req,res)=>{res.sendFile(path.join(__dirname,"./","page","contact.html"))})
router.get ('/services',(req,res)=>{res.sendFile(path.join(__dirname,"./","page","services.html"))})

export default router
