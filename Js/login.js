console.log("login.js terbaca");
const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("Tombol login ditekan");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    const result = await response.json();

    //Kalo sesuai login berhasil
    if (response.ok) {

        //membuat storage di browser, punya key and value
        
        localStorage.setItem(
            "user",                        //user (key) untuk mengambil atau menghapus datanya. 
            JSON.stringify(result.user)     //JSON.stringify(result.user) (value) : yang ingin disimpan. Karena localStorage hanya menerima data berupa teks biasa, fungsi JSON.stringify() bertugas mengubah objek JavaScript result.user (yang berisi data seperti nama, email, id) menjadi baris teks berformat JSON agar bisa diterima oleh localStorage.
        );

        window.location.href = "dashboard.html";

    } else {
        alert(result.message);
    }
});