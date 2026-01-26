// 🔹 A. Dasar Variabel & Tipe Data

// Buat variabel nama, umur, dan isStudent. Tampilkan ke console dalam 1 kalimat.

// Apa bedanya let, const, dan var? Jelaskan dengan contoh.

// Ubah string "100" menjadi number, lalu tambahkan dengan angka 50.

// let nama = "ramdani";
// let umur = 20;
// let isStudent = true;
// console.log(
//   `nama saya ${nama},umur saya ${umur},saya adalah seorang ${isStudent ? "siswa " : "bukan siswa"}`,
// );
// bisa diubah isinya / manupulasi
let nama = "ramdani";
nama = "budi";
// tidak bisa diubah isinya / tidak bisa di manupulasi
const umur = 12;
// umur = 13;

// bisa diubah isinya / manupulasi
var kota = "bandung";
kota = "semarang";

console.log(nama);
console.log(umur);
console.log(kota);

// mengubah string "100" menjadi integer/ Number dan ditambah 50
let ubah = "100";
// let angka = Number(ubah);
// let hasil = angka + 50;
// console.log(hasil);
// cara 2
let hasil = parseInt("100") + 50;
console.log(hasil); // 150
