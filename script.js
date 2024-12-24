const email = document.getElementById("email");
const port = document.getElementById("port");

email.addEventListener("click", () => {
    window.open("mailto:kobama.mikael@gmail.com", "_blank");
});
port.addEventListener("click", () => {
    window.open("https://github.com/Mikael-Kobama", "_blank");;
});
