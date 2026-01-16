// --- simple mobile menu ---
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// --- footer year ---
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- quote form -> mailto ---
const form = document.getElementById("quoteForm");

// TODO: replace with your real email:
const BUSINESS_EMAIL = "yourname@domain.com";

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const type = data.get("type");
    const qty = data.get("qty");
    const size = data.get("size");
    const deadline = data.get("deadline");
    const file = data.get("file");
    const notes = data.get("notes");

    const subject = encodeURIComponent(`3D Print Quote Request - ${name}`);
    const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Print Type: ${type}
Quantity: ${qty}
Desired Size: ${size || "(not provided)"}
Deadline: ${deadline || "(not provided)"}
File Link: ${file || "(not provided)"}

Notes:
${notes || "(none)"}
`
    );

    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  });
}
