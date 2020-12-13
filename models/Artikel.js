module.exports = {
    // untuk mendapatkan semua data
    get: function(koneksi, callback){
        koneksi.query("SELECT * FROM artikel",callback)
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
}
