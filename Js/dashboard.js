// Ambil user dari Local Storage
const user = JSON.parse(localStorage.getItem("user"));

// Kalau belum login, tendang ke login
if (!user) {
    window.location.href = "login.html";
}

// Ubah isi dashboard
document.getElementById("sidebarName").textContent = user.fullname;

document.getElementById("sidebarDivision").textContent = user.division;

document.getElementById("topbarName").textContent = user.fullname;

document.getElementById("welcomeTitle").textContent =
    `Welcome back, ${user.fullname} 👋`;

//textContent = mengganti isi tulisan sebuah elemen.
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "login.html";
});

const progressForm = document.getElementById("progressForm");

progressForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("projectTitle").value;
    const description = document.getElementById("projectDesc").value;

    const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: user.id,
            title,
            description
        })
    });

    const result = await response.json();

    if (response.ok) {
        alert("Progress berhasil dikirim!");

        progressForm.reset();

    } else {
        alert(result.message);
    }
});