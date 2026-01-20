// let angkot = 2;

// for (let angkot = 0; angkot <= 4; angkot++) {
//   console.log(angkot + "<br>");
// }

// // perulangan genap
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// // perulangan ganjil
// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }
// // perulangan mines
// for (let i = 20; i <= 0; i -= 2) {
//   console.log(i);
// }
// // perulangan perkalian
// for (let i = 10; i <= 100000; i *= 10) {
//   console.log(i);
// }
// perulangan array
// const animal = ["kucing", "anjing", "burung"];

// for (let i = 0; i < animal.length; i++) {
//   console.log(i + 1, animal[i]);
// }
// let str = "LOL";
// for (let i = 0; i <= 4; i++) {
//   console.log("Outer: ", i);
//   for (let j = 0; j < str.length; j++) {
//     console.log("Inner: ", str[j]);
//   }
// }

const pilihan = "abcd";
for (let i = 1; i <= 10; i++) {
  console.log(`${i} . Soal Nomor ${i}:`);
  for (let j = 0; j < pilihan.length; j++) {
    console.log(`${pilihan[j]}. Pilihan Jawaban`);
  }
}

// Mendapatkan Data Dari Nested Array Dengan Nested Loop
const studentRow = [
  ["Hani", "Siti", "Budi"],
  ["Andi", "Rina", "Dewi"],
  ["Eka", "Fina", "Gina"],
];

for (let i = 0; i < studentRow.length; i++) {
  const row = studentRow[i];
  console.log(row);
}
