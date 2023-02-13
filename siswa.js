const express = require ("express")
const router = express.Router()
const db = require("./db")

//end-point akses data siswa
router.get("/siswa", (req,res)=>{
    //cretae sql query
    let sql = "select * from siswa"

    //run query
    db.query(sql, (error, result)=>{
        let response = null
        if(error){
            response ={
                message: error.message //pesan error
            }
        } else{
            response ={
                count: result.length, //jumlah data
                siswa: result //isi data
            }
        }
        res.json(response)//send response
    })
})

//end-point akses data siswa berdasarkan id_siswa tertentu
router.get("/siswa/:id", (req,res)=>{
    let data ={
        id_siswa: req.params.id_siswa
    }

    //create sql query
    let sql = "select * from siswa where?"

    //run query
    db.query(sql, data, (error, result)=>{
        let response = null
        if(error){
            response={
                count:result.length, //jumlah data
                siswa:result //isi data
            }
        }
        res.json(response)//send response
    })
})

//end-point menyimpan data siswa
router.post("/siswa", (req,res)=>{

    //prepare data
    let data ={
        nis : req.body.nis,
        nama_siswa : req.body.nama_siswa,
        kelas : req.body.kelas,
        poin: req.body.poin
    }

    //create sql query insert
    let sql = "insert into siswa set?"

    //run query
    db.query(sql, data, (error, result)=>{
        let response = null
        if(error){
            response ={
                message: error.message
            }
        }else{
            response={
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response)//send response
    })
})

//end-point mengubah data siswa
router.put("/siswa",(req,res)=>{

    //prepare data
    let data =[
        //data
        {
            nis: req.body.nis,
            nama_siswa: req.body.nama_siswa,
            kelas : req.body.kelas,
            poin: req.body.poin
        },

        //parameter(primary key)
        {
            id_siswa: req.body.id_siswa
        }
    ]

    let sql = "update siswa set ? where ?"

    db.query(sql, data, (error, result)=>{
        let response = null
        if(error){
            response={
                message: error.message
            }
        }else{
            response={
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response)
    })
})

router.delete("/siswa/:id", (req,res)=>{
    let data = {
        id_siswa: req.params.id_siswa
    }

    let sql = "delete from siswa where ?"

    db.query(sql, data, (error, result)=>{
        let response = null
        if(error){
            response={
                message: error.message
            }
        }else{
            response={
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })
})

module.exports = router