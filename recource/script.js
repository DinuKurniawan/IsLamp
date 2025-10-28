const lampu = document.getElementById("lampu");
const tombol = document.getElementById("tombolLampu");

let islamp = false;

tombol.addEventListener("click", function () {
  if (islamp) {
    lampu.src = "./images/mati.jpg";
    tombol.textContent = "hidupkan";

    islamp = false;
  } else {
    lampu.src = "./images/hidup.jpg";
    tombol.textContent = "Matikan";

    islamp = true;
  }
});
