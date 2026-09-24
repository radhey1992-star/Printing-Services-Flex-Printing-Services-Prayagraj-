// Replace this with the shop's WhatsApp number in international format, without + or spaces.
// Example for India: 919876543210
const WHATSAPP_NUMBER = "916390845350";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "76px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "18px 4%";
  nav.style.background = "#fff";
  nav.style.borderBottom = "1px solid #e9edf3";
});

function sendMessage(event){
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();
  const text = `Hello, I want a quotation.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ARequirement: ${encodeURIComponent(message)}`;
  if (WHATSAPP_NUMBER === "REPLACE_WITH_NUMBER") {
    alert("Please add the shop's WhatsApp number in script.js first.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}
