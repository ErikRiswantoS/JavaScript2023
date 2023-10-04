// operasi-Tanpa Spread
// const favorit = ["seafood","salad","nugget","soup"]
// const other = ["cake","pie","donut"]
// const allfavorti = [favorit, other]

// console.log(allfavorti)
// ============================================================
// Penulisan Objeck
// const user = {
//     fistnama : "Erik",
//     lastnama : "Putra",
//     age : 22,
//     isrix : true,
// }
// console.log(`Hallo, nama Saya ${user.fistnama} ${user.lastnama}`);
// console.log(`umur saya ${user.age} tahun`);
// ============================================================
// const profil = {
//     fistnama : "Erik",
//     lastnama : "Putra",
//     age : 22,
// }
// const fistnama = profil.fistnama
// const lastnama = profil.lastnama
// const age = profil.age 
// console.log(fistnama,lastnama,age)
// ============================================================
// contoh sederhana
// const profil = {
//     fistnama : "Erik",
//     lastnama : "Putra",
//     age : 22,
// }

// const{fistnama,lastnama,age}=profil
// console.log(fistnama,lastnama,age)
// ============================================================
// const profil = {
//     fistnama : "Erik",
//     lastnama : "Putra",
//     age : 22,
// }
// let fistnama ="Dimas";
// let age = 20;
// // menginisialisasikan nilai baru melalui destructuring objeck
// ({fistnama, age}=profil);
// console.log(fistnama);
// console.log(age);       
// =============================================================
// const favorit =["seafood","salad","nugget","soup"];
// let myfood ="ice";
// let herfood ="mie";
// [myfood,  herfood]= favorit;
// console.log(myfood);
// console.log(herfood);
// ===============================================================
// itung itungan swap
// var a = 1 ;
// var b = 2 ;
// var varm;
// console.log("sebelum swap");
// console.log("nilai a: " + a);
// console.log("nilai b: " + b);
// temp =a;
// a=b;
// b=temp;
// console.log("setelah swap");
// console.log("nilai a: " + a);
// console.log("nilai b: " + b);

// contoh ke dua yang lebih simple
let a = 1 ;
let b = 2 ;
console.log("sebelum swap");
console.log("nilai a: " + a);
console.log("nilai b: " + b);
[a,b] = [b,a]
console.log("setelah swap");
console.log("nilai a: " + a);
console.log("nilai b: " + b);


