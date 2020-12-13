module.exports = {
    // untuk mendapatkan semua data
    get: function(koneksi, callback){
        koneksi.query("SELECT * FROM artikel",callback)
    },

    // edit data ambil dengan spesifik
    getById: function(koneksi,id,callback){
        koneksi.query(`SELECT * FROM artikel WHERE id = ${id}`,callback)
    },

    // untuk menambah semua data    
    create: function (koneksi, data, callback) {
        koneksi.query(
            `INSERT INTO artikel SET 
            judul = '${data.judul}',
            author = '${data.author}',
            konten = '${data.konten}'`,
            callback
        )
    },

    // update
    update: function(koneksi,data,id,callback){
        koneksi.query(
            `UPDATE artikel SET
            judul = '${data.judul}',
            author = '${data.author}',
            konten = '${data.konten}'
            WHERE id = ${id}`,callback
        )
    },

    // delete
    delete: function(koneksi,id,callback){
        koneksi.query(
            `DELETE FROM artikel WHERE id = ${id}`,callback
        )
    }

}
