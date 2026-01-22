function jumlah(a, b) {
  const total = a + b;
  console.log(total);
}

jumlah(1, 4);

// menggunakan return
function kali(a, b) {
  if (typeof a !== `number` || typeof b !== `number`) {
    return false;
  }
  return a + b;
}

// menggunakan scope
let programming = `javascript`;

function typeSafe() {
  programming = `typescript`;
  console.log(programming);
}

typeSafe();

//lexial scope
function lamarKerja() {
  const jabatan = `programmer`;

  function lebihDalam() {
    function orangDalam() {
      let kenalan = `orang dalam bisa memasukan ${jabatan}`;
      console.log(kenalan);
    }
    orangDalam();
  }
  lebihDalam();
}

// function expression
const pangkat = function (nilai) {
  return nilai * nilai;
};
perpangkatan(5);

const pangkat1 = function (nilai, pembanding) {
  return nilai * pembanding;
};
perpangkatan(1, 2);
