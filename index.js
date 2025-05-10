const sateAyam = document.getElementById("sateAyam");
const mieAyam = document.getElementById("mieAyam");
const sotoAyam = document.getElementById("sotoAyam");
const satu = document.getElementById("satu");
const dua = document.getElementById("dua");
const tiga = document.getElementById("tiga");

function buatPesanan(NamaPembeli, Menu, Waktu) {
  alert(
    `${NamaPembeli} memesan ${Menu}. Pesanan akan segera kami proses mohon tunggu sebentar`
  );
  setTimeout(() => {
    alert(
      `${NamaPembeli} pesanan ${Menu} anda sudah selesai, terima kasih sudah memesan`
    );
    pembeliPesan.style.display = "none";
  }, Waktu);
}

sateAyam.addEventListener("click", () => {
  const pembeli = getPembeliAktif();
  if (pembeli) buatPesanan(pembeli, "Sate Ayam", 8000);
});

mieAyam.addEventListener("click", () => {
  const pembeli = getPembeliAktif();
  if (pembeli) buatPesanan(pembeli, "Mie Ayam", 10000);
});

sotoAyam.addEventListener("click", () => {
  const pembeli = getPembeliAktif();
  if (pembeli) buatPesanan(pembeli, "Soto Ayam", 5000);
});

let pembeliAktif = null;

satu.addEventListener("click", () => (pembeliAktif = "Pembeli 1"));
dua.addEventListener("click", () => (pembeliAktif = "Pembeli 2"));
tiga.addEventListener("click", () => (pembeliAktif = "Pembeli 3"));

function getPembeliAktif() {
  if (!pembeliAktif) {
    alert("Silahkan pilih pembeli terlebih dahulu");
    return null;
  }
  return pembeliAktif;
}
