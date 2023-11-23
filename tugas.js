const navLinks = document.querySelectorAll('nav a');
let keranjangString = localStorage.getItem('keranjang');
let keranjangData = JSON.parse(keranjangString);

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

    let keranjangString = JSON.stringify(keranjang);
    localStorage.setItem('keranjang', keranjangString);
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
      produk.push({ nama : namaProduk, harga: hargaProduk })
    });
  });
  
  document.querySelectorAll('.modal .btn-primary').forEach((tombol, indeks) => {
    tombol.addEventListener('click', (event) => {
      event.preventDefault();
      let namaProduk = document.querySelectorAll('.card-title')[indeks].innerText;
      let hargaProduk = document.querySelectorAll('.harga')[indeks].innerText;
      tambahKeKeranjang(namaProduk, hargaProduk);
      alert('Produk berhasil ditambahkan');
      produk.push({ nama : namaProduk, harga: hargaProduk })
    });
  });

  document.querySelector('.btn-danger').addEventListener('click', (event) => {
    event.preventDefault();
    hapusDariKeranjang(0);
  });
});

document.getElementById('tombolKlik').addEventListener('click', function() {
  // Kode untuk navigasi atau pengalihan halaman
  if (keranjang.length === 0) {
    alert('Tidak ada produk dalam keranjang');
  }
  window.location.href = 'checkout.html'; // Ganti 'halaman_lain.html' dengan URL halaman tujuan 
});


document.addEventListener('DOMContentLoaded', function () {
  const themeToggleIcon = document.querySelector('.bi-sun-fill, .bi-moon-fill');

  themeToggleIcon.addEventListener('click', function () {
    // Periksa apakah tema saat ini adalah "dark"
    const isDarkMode = document.documentElement.getAttribute('data-bs-theme') === 'dark';

    // Ganti tema
    document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'light' : 'dark');

    // Tambahkan class dengan animasi pada ikon
    themeToggleIcon.classList.add('icon-transition');

    // Jalankan fungsi setelah animasi selesai
    setTimeout(function () {
      // Hapus class setelah animasi selesai
      themeToggleIcon.classList.remove('icon-transition');

      // Ganti kelas ikon i dengan animasi
      themeToggleIcon.classList.toggle('bi-moon-fill', isDarkMode);
      themeToggleIcon.classList.toggle('bi-sun-fill', !isDarkMode);
    }, 300);
  });
});
