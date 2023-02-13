//inisiasi library
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const moment = require("moment")
const siswaroute = require("./siswa")
const userroute = require("./user")
const pelanggaranroute = require("./pelanggaran")
const pelanggran_siswaroute = require("./pelanggaran_siswa")

//implementation
const app = express()
app.use(express.json())
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(siswaroute)
app.use(userroute)
app.use(pelanggaranroute)
app.use(pelanggran_siswaroute)



app.listen(8000, ()=>{
    console.log("anjazzz")
})
