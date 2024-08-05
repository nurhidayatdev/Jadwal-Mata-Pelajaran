setInterval(myTimer, 2000);

function myTimer() {
  let hari = new Date().getDay();
  let jam = new Date().getHours();
  let menit = new Date().getMinutes();
  let tugas;

  //HARI SENIN

  if (hari == 1 && jam < 7) {
    tugas = "Tidur";
    document.getElementById("latar").style.background = "#1d4ed8";
    document.getElementById("gif").src = "image/tidur.gif";
  } else if (hari == 1 && jam <= 7 && menit < 40) {
    tugas = "Upacara";
    document.getElementById("latar").style.background = "#bef264";
    document.getElementById("gif").src = "image/upacara.gif";
  } else if (hari == 1 && jam < 9) {
    tugas = "Belajar MTK Minat";
    document.getElementById("latar").style.background = "#b91c1c";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 1 && jam <= 9 && menit < 40) {
    tugas = "Belajar Kimia";
    document.getElementById("latar").style.background = "#3b82f6";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 1 && jam < 10) {
    tugas = "Istirahat";
    document.getElementById("latar").style.background = "#67e8f9";
    document.getElementById("gif").src = "image/makan.gif";
  } else if (hari == 1 && jam <= 10 && menit < 40) {
    tugas = "Belajar MTK Wajib";
    document.getElementById("latar").style.background = "#db2777";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 1 && jam < 12) {
    tugas = "Belajar Seni Budaya";
    document.getElementById("latar").style.background = "#facc15";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 1 && jam < 13) {
    tugas = "Ishoma";
    document.getElementById("latar").style.background = "#16a34a";
    document.getElementById("gif").src = "image/ishoma.gif";
  } else if (hari == 1 && jam <= 13 && menit < 40) {
    tugas = "Belajar Seni Budaya";
    document.getElementById("latar").style.background = "#facc15";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 1 && jam < 15) {
    tugas = "Belajar Biologi";
    document.getElementById("latar").style.background = "#fde68a";
    document.getElementById("gif").src = "image/belajar.gif";
  }

  //HARI SELASA
  else if (hari == 2 && jam < 7) {
    tugas = "Tidur";
    document.getElementById("latar").style.background = "#1d4ed8";
    document.getElementById("gif").src = "image/tidur.gif";
  } else if (hari == 2 && jam <= 8 && menit < 20) {
    tugas = "Belajar Fisika";
    document.getElementById("latar").style.background = "#fb923c";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 2 && jam <= 9 && menit < 40) {
    tugas = "Belajar B.Indonesia";
    document.getElementById("latar").style.background = "#4c0519";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 2 && jam < 10) {
    tugas = "Istirahat";
    document.getElementById("latar").style.background = "#67e8f9";
    document.getElementById("gif").src = "image/makan.gif";
  } else if (hari == 2 && jam < 12) {
    tugas = "Belajar PAI";
    document.getElementById("latar").style.background = "#15803d";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 2 && jam < 13) {
    tugas = "Ishoma";
    document.getElementById("latar").style.background = "#16a34a";
    document.getElementById("gif").src = "image/ishoma.gif";
  } else if (hari == 2 && jam < 15) {
    tugas = "Belajar Ekonomi";
    document.getElementById("latar").style.background = "#65a30d";
    document.getElementById("gif").src = "image/belajar.gif";
  }

  //HARI RABU
  else if (hari == 3 && jam < 7) {
    tugas = "Tidur";
    document.getElementById("latar").style.background = "#1d4ed8";
    document.getElementById("gif").src = "image/tidur.gif";
  } else if (hari == 3 && jam < 9) {
    tugas = "Belajar Kimia";
    document.getElementById("latar").style.background = "#3b82f6";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 3 && jam <= 9 && menit < 40) {
    tugas = "Belajar Penjas";
    document.getElementById("latar").style.background = "#312e81";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 3 && jam < 10) {
    tugas = "Istirahat";
    document.getElementById("latar").style.background = "#67e8f9";
    document.getElementById("gif").src = "image/makan.gif";
  } else if (hari == 3 && jam <= 11 && menit < 20) {
    tugas = "Belajar Penjas";
    document.getElementById("latar").style.background = "#312e81";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 3 && jam < 12) {
    tugas = "Belajar Fisika";
    document.getElementById("latar").style.background = "#fb923c";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 3 && jam < 13) {
    tugas = "Ishoma";
    document.getElementById("latar").style.background = "#16a34a";
    document.getElementById("gif").src = "image/ishoma.gif";
  } else if (hari == 3 && jam <= 13 && menit < 40) {
    tugas = "Belajar Fisika";
    document.getElementById("latar").style.background = "#fb923c";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 3 && jam < 15) {
    tugas = "Belajar B.Inggris";
    document.getElementById("latar").style.background = "#f43f5e";
    document.getElementById("gif").src = "image/belajar.gif";
  }

  //HARI KAMIS
  else if (hari == 4 && jam < 7) {
    tugas = "Tidur";
    document.getElementById("latar").style.background = "#1d4ed8";
    document.getElementById("gif").src = "image/tidur.gif";
  } else if (hari == 4 && jam <= 8 && menit < 20) {
    tugas = "Belajar MTK Wajib";
    document.getElementById("latar").style.background = "#facc15";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 4 && jam <= 9 && menit < 40) {
    tugas = "Belajar PPKn";
    document.getElementById("latar").style.background = "#164e63";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 4 && jam < 10) {
    tugas = "Istirahat";
    document.getElementById("latar").style.background = "#67e8f9";
    document.getElementById("gif").src = "image/makan.gif";
  } else if (hari == 4 && jam <= 11 && menit < 20) {
    tugas = "Belajar Biologi";
    document.getElementById("latar").style.background = "#fde68a";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 4 && jam < 12) {
    tugas = "Belajar B.Indonesia";
    document.getElementById("latar").style.background = "#4c0519";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 4 && jam < 13) {
    tugas = "Ishoma";
    document.getElementById("latar").style.background = "#16a34a";
    document.getElementById("gif").src = "image/ishoma.gif";
  } else if (hari == 4 && jam <= 13 && menit < 40) {
    tugas = "Belajar B.Indonesia";
    document.getElementById("latar").style.background = "#4c0519";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 4 && jam < 15) {
    tugas = "Belajar MTK Minat";
    document.getElementById("latar").style.background = "#b91c1c";
    document.getElementById("gif").src = "image/belajar.gif";
  }

  //HARI JUMAT
  else if (hari == 5 && jam < 7) {
    tugas = "Tidur";
    document.getElementById("latar").style.background = "#1d4ed8";
    document.getElementById("gif").src = "image/tidur.gif";
  } else if (hari == 5 && jam <= 7 && menit < 40) {
    tugas = "Literasi/Senam";
    document.getElementById("latar").style.background = "#9333ea";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 5 && jam < 9) {
    tugas = "Belajar Prakarya";
    document.getElementById("latar").style.background = "#964B00";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 5 && jam <= 9 && menit < 40) {
    tugas = "Belajar Ekonomi";
    document.getElementById("latar").style.background = "#65a30d";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 5 && jam < 10) {
    tugas = "Istirahat";
    document.getElementById("latar").style.background = "#67e8f9";
    document.getElementById("gif").src = "image/makan.gif";
  } else if (hari == 5 && jam <= 10 && menit < 40) {
    tugas = "Belajar BK/Keagamaan";
    document.getElementById("latar").style.background = "#6b7280";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 5 && jam < 12) {
    tugas = "Belajar Sejarah";
    document.getElementById("latar").style.background = "#064e3b";
    document.getElementById("gif").src = "image/belajar.gif";
  } else if (hari == 5 && jam <= 12 && menit < 45) {
    tugas = "Ishoma";
    document.getElementById("latar").style.background = "#16a34a";
    document.getElementById("gif").src = "image/ishoma.gif";
  }

  //HARI FULL TURU
  else {
    tugas = "Tidur";
    document.getElementById("latar").style.background = "#1d4ed8";
    document.getElementById("gif").src = "image/tidur.gif";
  }

  document.getElementById("text").innerHTML = tugas;
}
