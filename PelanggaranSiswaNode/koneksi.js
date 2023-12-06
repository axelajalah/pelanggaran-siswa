const mysql = reqire("mysql")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pelanggaran_siswa"
})

db.connect(error => {
    if (error){
    console.log('error.message');
    } else{
    console.log('berhasil terhubung ke database')
    }
})

module.exports = db