const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const division = document.getElementById("division").value;

    //Artinya JavaScript menghubungi server Express yang tadi kita buat.
    //Karena kita mengirim data
    //Data yang saya kirim berbentuk JSON
    //Objek JavaScript diubah menjadi JSON lalu dikirim ke Express
    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fullname,
            username,
            password,
            division
        })
    });

    const result = await response.json();

    alert(result.message);
});