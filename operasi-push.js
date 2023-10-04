const nama = ["Erik","Saputra","ganteng"]
    nama.push("Ripal")
    nama.push("Putri","Ayu")

    nama.pop()
    // POP berfungsi menghapus index terakhir yaitu ayu
    nama.shift()
    // shift berfungsi menghapus index awal yaitu erik
    nama.unshift("apple")
    // unshift berfungsi menambahan nilai index awal yaitu erik menjadi apple
    nama.splice(2,1)
    // splice untuk menghapus index nomor dua hanya sekali
    // delete nama[1] untuk menghapus index yang ditentukan 
    console.table(nama)
    console.log(nama)
    console.info(nama.length)