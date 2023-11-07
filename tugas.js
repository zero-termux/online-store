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

  function tambahKeKeranjang(namaProduk, hargaProduk) {
    keranjang.push({ nama: namaProduk, harga: hargaProduk }); // Simpan sebagai objek
    perbaruiKeranjang();
  }

  function hapusDariKeranjang(index) {
    keranjang.splice(index, 1);
    perbaruiKeranjang();
  }

  function perbaruiKeranjang() {
    let keranjangElement = document.getElementById('keranjang-elemen');
    keranjangElement.innerHTML = '';

    keranjang.forEach(function(produk, index) {
      let cardProduk = document.createElement('div'); // Ganti dari <p> menjadi <div>
      cardProduk.classList.add('card', 'text-left', 'mb-5', 'mt-3');
      cardProduk.style.width = '16rem';
      cardProduk.style.border = 'none';

      let cardBody = document.createElement('div'); // Ganti dari <p> menjadi <div>
      cardBody.classList.add('card-body');

      let cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = produk.nama; // Ambil nama dari objek produk

      let cardHarga = document.createElement('p');
      cardHarga.classList.add('harga');
      cardHarga.textContent = produk.harga; // Ambil harga dari objek produk

      let hapusButton = document.createElement('a');
      hapusButton.href = '#';
      hapusButton.classList.add('btn', 'btn-danger');
      hapusButton.textContent = 'hapus produk';
      hapusButton.addEventListener('click', function(event) {
        event.preventDefault();
        hapusDariKeranjang(index);
        alert('Produk dalam keranjang anda akan dihapus');
      });

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardHarga);
      cardBody.appendChild(hapusButton);
      cardProduk.appendChild(cardBody);
      keranjangElement.appendChild(cardProduk);
    });
  }

  document.querySelectorAll('.btn-primary').forEach((tombol, indeks) => {
    tombol.addEventListener('click', (event) => {
      event.preventDefault();
      let namaProduk = document.querySelectorAll('.card-title')[indeks].innerText;
      let hargaProduk = document.querySelectorAll('.harga')[indeks].innerText;
      tambahKeKeranjang(namaProduk, hargaProduk);
      alert('Produk berhasil ditambahkan');
    });
  });
  
  document.querySelectorAll('.modal .btn-primary').forEach((tombol, indeks) => {
    tombol.addEventListener('click', (event) => {
      event.preventDefault();
      let namaProduk = document.querySelectorAll('.card-title')[indeks].innerText;
      let hargaProduk = document.querySelectorAll('.harga')[indeks].innerText;
      tambahKeKeranjang(namaProduk, hargaProduk);
      alert('Produk berhasil ditambahkan');
    });
  });

  document.querySelector('.btn-danger').addEventListener('click', (event) => {
    event.preventDefault();
    hapusDariKeranjang(0);
  });
});

  document.querySelector('#keranjang .btn-primary').addEventListener('click', (event) => {
    event.preventDefault();
    alert('Pesanan Anda akan segera dikirimkan!');
  });