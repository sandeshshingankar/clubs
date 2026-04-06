document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('.expand-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {

            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all
            buttons.forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
            });

            // Open clicked
            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

});
// ================= ATTENDANCE LOGIC =================

let total = 75;
let present = 72;
let absent = 3;

const totalEl = document.getElementById("totalClasses");
const presentEl = document.getElementById("presentCount");
const absentEl = document.getElementById("absentCount");
const percentEl = document.getElementById("attendancePercent");

document.getElementById("presentBtn").addEventListener("click", () => {
    total++;
    present++;
    updateAttendance();
});

document.getElementById("absentBtn").addEventListener("click", () => {
    total++;
    absent++;
    updateAttendance();
});

function updateAttendance() {
    totalEl.textContent = total;
    presentEl.textContent = present;
    absentEl.textContent = absent;

    let percent = Math.round((present / total) * 100);
    percentEl.textContent = percent + "%";
}
// ================= ACADEMIC MARKS LOGIC =================

document.getElementById("addMarksBtn").addEventListener("click", () => {

    const subject = document.getElementById("subjectInput").value;
    const marks = document.getElementById("marksInput").value;
    const grade = document.getElementById("gradeInput").value;

    if (!subject || !marks || !grade) {
        alert("Please fill all fields");
        return;
    }

    const row = document.createElement("div");
    row.className = "marks-row";

    row.innerHTML = `
        <div class="marks-col">${subject}</div>
        <div class="marks-col">${marks}</div>
        <div class="marks-col">${grade}</div>
    `;

    document.getElementById("marksTable").appendChild(row);

    // clear inputs
    document.getElementById("subjectInput").value = "";
    document.getElementById("marksInput").value = "";
    document.getElementById("gradeInput").value = "";
});
// ================= DOCUMENT UPLOAD =================

function openDocumentUpload() {
    document.getElementById("documentInput").click();
}

document.getElementById("documentInput").addEventListener("change", function () {
    if (this.files.length > 0) {
        document.getElementById("documentName").textContent =
            "Uploaded: " + this.files[0].name;
    }
});

