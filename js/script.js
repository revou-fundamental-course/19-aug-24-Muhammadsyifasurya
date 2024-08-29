function ToggleMenu() {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const messageDisplay = document.querySelector(".message-display p");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai dari input field
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;

    // Format pesan yang akan ditampilkan
    const displayText = `
      <strong>Nama:</strong> ${name}<br>
      <strong>Tanggal Lahir:</strong> ${dob}<br>
      <strong>Jenis Kelamin:</strong> ${gender}<br>
      <strong>Pesan:</strong> ${message}
    `;

    // Tampilkan pesan di area Message Display
    messageDisplay.innerHTML = displayText;

    // Reset formulir setelah pengiriman
    form.reset();
  });
});
