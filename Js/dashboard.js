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

    const title =
        document.getElementById("projectTitle").value;

    const description =
        document.getElementById("projectDesc").value;

    const image =
        document.getElementById("projectImage").files[0];

    const formData = new FormData();

    formData.append("user_id", user.id);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("screenshot", image);

    const response = await fetch("http://localhost:3000/submit", {

        method: "POST",

        body: formData

    });

    const result = await response.json();

    if (response.ok) {

        alert("Project berhasil dikirim!");

        progressForm.reset();

    } else {

        alert(result.message);

    }

});