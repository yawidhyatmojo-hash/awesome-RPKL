const reveals = document.querySelectorAll(".reveal");

//Ini API browser untuk mendeteksi apakah sebuah elemen masuk ke layar.
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

reveals.forEach((section) => {
    observer.observe(section);
});

/* ==========================
   HERO SLIDER
========================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;
let autoSlide;

// Menampilkan slide tertentu
function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    current = index;
}

// Slide berikutnya
function nextSlide() {

    let next = current + 1;

    if (next >= slides.length) {
        next = 0;
    }

    showSlide(next);
}


// Auto jalan setiap 4 detik
function startSlider() {

    autoSlide = setInterval(() => {
        nextSlide();
    }, 4000);

}

startSlider();

let submissions = [
    {
        id: 1,
        member: "Abi",
        division: "Game Development",
        description: "Finished enemy movement system.",
        rating: 8,
        status: "accepted"
    },

    {
        id: 2,
        member: "Abi",
        division: "Game Development",
        description: "Improved character animation.",
        rating: 7,
        status: "accepted"
    },

    {
        id: 3,
        member: "Member B",
        division: "Robotics",
        description: "Tested motor control.",
        rating: null,
        status: "pending"
    }
];

function calculateMemberAverage(memberName) {

    const accepted = submissions.filter(
        submission =>
            submission.member === memberName &&
            submission.status === "accepted"
    );

    if (accepted.length === 0) {
        return 0;
    }

    let total = 0;

    accepted.forEach(submission => {
        total += submission.rating;
    });

    return total / accepted.length;
}



function acceptSubmission(id, rating) {

    const submission = submissions.find(
        submission => submission.id === id
    );

    if (!submission) {
        return;
    }

    submission.rating = rating;

    submission.status = "accepted";

    console.log(
        "Submission accepted:",
        submission
    );
}

function declineSubmission(id) {

    const submission = submissions.find(
        submission => submission.id === id
    );

    if (!submission) {
        return;
    }

    submission.status = "declined";

    submission.rating = null;

    console.log(
        "Submission declined:",
        submission
    );
}

function calculateDivisionAverage(divisionName) {

    const accepted = submissions.filter(
        submission =>
            submission.division === divisionName &&
            submission.status === "accepted"
    );

    if (accepted.length === 0) {
        return 0;
    }

    let total = 0;

    accepted.forEach(submission => {
        total += submission.rating;
    });

    return total / accepted.length;
}
function displayMemberAverage() {

    const average = calculateMemberAverage("Abi");

    const element =
        document.getElementById("weekly-average");

    if (element) {

        element.textContent =
            average.toFixed(1);

    }

}

displayMemberAverage();

console.log(
    calculateMemberAverage("Abi"),
    acceptSubmission(6, 10),
    declineSubmission(1)
);

/* ==========================
   DOT CLICK
========================== */
dots.forEach((dot,index)=> {
      dot.style.cursor = "pointer";
    dot.addEventListener("click", ()=>{
        
        clearInterval(autoSlide);

        showSlide(index);

        startSlider();
    });
});