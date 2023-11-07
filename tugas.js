const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}



document.addEventListener('DOMContentLoaded', function() {
  
  let keranjang = [];

  // untuk menambahkan nama produk ke keranjang
  function tambahKeKeranjang(namaProduk) {
    keranjang.push(namaProduk);
    perbaruiKeranjang();
  }

  // untuk menghapus nama produk dari keranjang
  function hapusDariKeranjang(index) {
    keranjang.splice(index, 1);
    perbaruiKeranjang();
  }

  // untuk memperbarui tampilan produk dalam keranjang
  function perbaruiKeranjang() {
    let keranjangElement = document.getElementById('keranjang-elemen');
    keranjangElement.innerHTML = '';

    keranjang.forEach(function(namaProduk, index) {
      let cardProduk = document.createElement('p');
      cardProduk.classList.add('p', 'text-left', 'mb-5', 'mt-3');
      cardProduk.style.width = '16rem';

      let cardBody = document.createElement('p');
      cardBody.classList.add('card-body');

      let cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = namaProduk;

      let hapusButton = document.createElement('a');
      hapusButton.href = '#';
      hapusButton.classList.add('btn', 'btn-danger');
      hapusButton.textContent = 'hapus produk';
      hapusButton.addEventListener('click', function(event) {
        event.preventDefault();
        hapusDariKeranjang(index);
        alert('produk dalam keranjang anda akan di hapus');
      });

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(hapusButton);
      cardProduk.appendChild(cardBody);
      keranjangElement.appendChild(cardProduk);
    });
  }

  // listener untuk tombol "Tambah ke keranjang"
  document.querySelectorAll('.btn-primary').forEach((tombol, indeks) => {
    tombol.addEventListener('click', (event) => {
      event.preventDefault();
      let namaProduk = document.querySelectorAll('.card-title')[indeks].innerText;
      tambahKeKeranjang(namaProduk);
      alert('produk berhasil ditambahkan');
    });
  });

document.querySelectorAll('.modal .btn-primary').forEach((tombol, indeks) => {
    tombol.addEventListener('click', (event) => {
      event.preventDefault();
      let namaProduk = document.querySelectorAll('.card-title')[indeks].innerText;
      tambahKeKeranjang(namaProduk);
      alert('produk berhasil ditambahkan');
    });
  });

  // listener untuk tombol "Hapus produk" di keranjang
  document.querySelector('.btn-danger').addEventListener('click', (event) => {
    event.preventDefault();
    hapusDariKeranjang(0);
  });

});

// untuk tombol "buat pesanan" di dalam keranjang
document.querySelector('#keranjang .btn-primary').addEventListener('click', (event) => {
  event.preventDefault();
  alert('Pesanan Anda akan segera dikirimkan!');
});