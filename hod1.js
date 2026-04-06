document.addEventListener("DOMContentLoaded", function () {

    const grid = document.querySelector(".faculty-grid");

    // ================= ADD HOD MODAL =================
    const addBtn = document.querySelector(".add-btn");
    const addModal = document.getElementById("addHodModal");
    const closeAdd = document.querySelector(".close-add");
    const addForm = document.getElementById("addHodForm");

    // Open Modal
    addBtn.addEventListener("click", function (e) {
        e.preventDefault();
        addModal.style.display = "flex";
    });

    // Close Modal
    closeAdd.addEventListener("click", function () {
        addModal.style.display = "none";
    });

    // Close when clicking outside modal
    window.addEventListener("click", function (e) {
        if (e.target === addModal) {
            addModal.style.display = "none";
        }
    });

    // ================= IMAGE PREVIEW =================
const imageInput = document.getElementById("newHodImage");
const preview = document.getElementById("imagePreview");

let selectedImageData = "";

imageInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            selectedImageData = e.target.result;
            preview.src = selectedImageData;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});


// ================= ADD NEW HOD =================
addForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("newHodName").value;
    const dept = document.getElementById("newHodDept").value;

    const image = selectedImageData || "principal.jpg";

    const newCard = document.createElement("a");
    newCard.href = "hod.html";
    newCard.className = "faculty-card-link";

    newCard.innerHTML = `
        <div class="faculty-card">
            <div class="faculty-image">
                <img src="${image}" alt="${name}">
            </div>
            <div class="faculty-info">
                <h3 class="hod-name">${name}</h3>
                <p class="hod-dept">${dept}</p>
                <div class="hod-actions">
                    <button class="edit-hod-btn">Edit</button>
                    <button class="delete-hod-btn">Delete</button>
                </div>
            </div>
        </div>
    `;

    grid.appendChild(newCard);

    addModal.style.display = "none";
    addForm.reset();
    preview.style.display = "none";
    selectedImageData = "";
});
