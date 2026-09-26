const submissionList = document.getElementById("submissionList");


async function loadSubmissions() {

    const response = await fetch("http://localhost:3000/submissions");
    const data = await response.json();

    submissionList.innerHTML = "";

    data.forEach((submission) => {

const imageUrl = submission.screenshot
?`http://localhost:3000/uploads/${submission.screenshot}`
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

loadSubmissions();