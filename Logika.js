const nilaiujian = 80;
const nilaiabsensi = 70;

const lulusujian = nilaiujian > 75 ;
const lulusabsensi = nilaiabsensi > 75;

const lulus = lulusujian || lulusabsensi;
console.log(lulus);