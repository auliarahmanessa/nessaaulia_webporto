document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form agar tidak mengirimkan data ke server

    // Tampilkan SweetAlert popup
    Swal.fire({
        title: "Message Sent!",
        text: "Thank you for reaching out. I'll get back to you soon.",
        icon: "success",
        confirmButtonText: "OK"
    }).then(function() {
        // Setelah popup ditutup, kosongkan input form
        document.getElementById("contact-form").reset();
    });

// Fungsi untuk memulai ulang animasi mengetik
function restartTypingAnimation() {
    const textElement = document.querySelector('.typing-text');
    textElement.style.animation = 'none';
    setTimeout(() => {
        textElement.style.animation = 'typing 3s steps(40, end), blink-caret 0.5s step-end infinite';
    }, 10);
}

// Panggil fungsi ini saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    restartTypingAnimation();
    setInterval(restartTypingAnimation, 5000); // Ulangi animasi setiap 5 detik
});

    
});