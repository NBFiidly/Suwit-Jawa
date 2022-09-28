var tanya = true;
while ( tanya ) {
  // menangkap pilihan player
  var p = prompt('Pilih : gajah / semut / orang');

  // menangkap pilihan computer

  // membangkitkan bilangan random
  var comp = Math.random();

  if( comp < 0.34 ) {
    comp = 'gajah';
  } else if( comp >= 0.34 && comp < 0.67 ) {
    comp = 'orang';
  } else {
    comp = 'semut';
  }

  var hasil = '';
  // menentukan rules
  if( p == comp ) {
    hasil = 'SERI!';
  } else if( p == 'gajah') {
    // if ( comp == 'orang' ) {
    //   hasil = ' MENANG';
    // } else {
    //   hasil = 'KALAH!'
    // }
    hasil = ( comp == 'Orang' ) ? 'MENNAG!' : 'KALAH!';
  } else if( p == 'Orang' ) {
    hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
  } else if ( p == 'semut' ) {
    hasil = ( comp == 'Orang' ) ? 'KALAH!' : 'MENANG!';
  } else {
    hasil = 'Anda memasukkan pilihan yang SALAH!';
  }



  // tampilkan hasilnya
  alert('Kamu Memilih : ' + p + ' dan Komputer Memilih : ' + comp + ' \nMaka Hasilnya : KAMU ' + hasil);


  tanya = confirm('Mau Coba Lagi?')
}

alert('Terimakasih Sudah Bermain')

