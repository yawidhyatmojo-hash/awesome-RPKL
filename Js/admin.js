const submissionList = document.getElementById("submissionList");


async function loadSubmissions() {

    const response = await fetch("http://localhost:3000/submission");
    const data = await response.json();

    submissionList.innerHTML = "";

    data.forEach((submission) => {

        const imageUrl = submission.screenshot
            ? `http://localhost:3000/uploads/${submission.screenshot}`
            : "../assets/images/placeholder.jpg";

        submissionList.innerHTML += `
<div class="submission-card">

    <div class="submission-left">

        <img src="${imageUrl}" alt="project">

        <span class="shot-badge">1 Screenshot</span>

    </div>


    <div class="submission-middle">

        <div class="member-row">
            <h3>${submission.fullname}</h3>

            <span class="division-tag">
                ${submission.division}
            </span>
        </div>

        <h2>${submission.title}</h2>

        <p>${submission.description}</p>

        <small>📅 Monday • 1 Screenshot</small>

    </div>


    <div class="submission-right">

        <label>Rating</label>

        <select>
            <option>8 / 10</option>
            <option>9 / 10</option>
            <option>10 / 10</option>
        </select>

        <button class="accept-btn">Accept</button>
        <button class="decline-btn">Decline</button>

    </div>

</div>
`;

    });

}

// ==========================
// CREATE MEMBER
// ==========================

const createForm = document.getElementById("createMemberForm");

createForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const division = document.getElementById("division").value;

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

    if (response.ok) {
        alert("Member berhasil dibuat!");
        createForm.reset();
    } else {
        alert(result.message);
    }
});

// ==========================
// LOAD SUBMISSIONS
// ==========================

async function loadSubmissions() {

    const response = await fetch(
        "http://localhost:3000/submission"
    );

    const submissions = await response.json();

    renderSubmissions(submissions);
}

//Bikin AKUN
function renderSubmissions(data){

    const list = document.getElementById("submissionList");

    if(data.length === 0){

        list.innerHTML = `
            <div class="empty-state">
                <h3>No pending submissions</h3>
            </div>
        `;

        return;
    }

    list.innerHTML = "";

    data.forEach(item=>{

        list.innerHTML += `
        <article class="submission-card">

            <h3>${item.title}</h3>

            <p>${item.description}</p>

            <div class="submission-footer">

                <span>${item.fullname}</span>

                <span>${item.division}</span>

            </div>

        </article>
        `;

    });

}
loadSubmissions();