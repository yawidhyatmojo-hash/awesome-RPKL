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