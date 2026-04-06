document.addEventListener("DOMContentLoaded", function () {

    const grid = document.querySelector(".faculty-grid");
    const addBtn = document.querySelector(".add-btn");
    const modal = document.getElementById("addFacultyModal");
    const closeBtn = document.querySelector(".close-add");
    const form = document.getElementById("addFacultyForm");
    const imageInput = document.getElementById("newFacultyImage");
    const preview = document.getElementById("facultyPreview");

    let selectedImage = "";
    let editingCard = null; // track which card is being edited

    if (!grid || !addBtn || !modal || !form) {
        console.log("Required elements not found");
        return;
    }

    // ================= LOAD SAVED FACULTY FROM LOCALSTORAGE =================
    loadSavedFaculty();

    // ================= OPEN MODAL (ADD MODE) =================
    addBtn.addEventListener("click", function (e) {
        e.preventDefault();
        editingCard = null;
        form.reset();
        preview.style.display = "none";
        selectedImage = "";
        modal.querySelector("h2").textContent = "Add New Faculty";
        modal.querySelector(".save-btn").textContent = "Add Faculty";
        modal.style.display = "flex";
    });

    // ================= CLOSE MODAL =================
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        editingCard = null;
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            editingCard = null;
        }
    });

    // ================= IMAGE PREVIEW =================
    imageInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                selectedImage = e.target.result;
                preview.src = selectedImage;
                preview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    // ================= ADD / SAVE FACULTY =================
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name     = document.getElementById("newFacultyName").value.trim();
        const role     = document.getElementById("newFacultyRole").value.trim();
        const students = document.getElementById("newFacultyStudents").value.trim();
        const image    = selectedImage || "nitin.png";

        if (editingCard) {
            // ---- EDIT MODE: update existing card ----
            editingCard.querySelector(".faculty-info h3").textContent = name;
            editingCard.querySelector(".faculty-info .faculty-role").textContent = role;
            editingCard.querySelector(".faculty-info .faculty-students").innerHTML =
                `<strong>Assigned Students:</strong> ${students}`;
            if (selectedImage) {
                editingCard.querySelector(".faculty-image img").src = selectedImage;
            }

            // Update localStorage
            updateLocalStorage();
            editingCard = null;

        } else {
            // ---- ADD MODE: create new card ----
            const newCard = createFacultyCard(name, role, students, image);
            grid.appendChild(newCard);
            attachCardEvents(newCard);
            updateLocalStorage();
        }

        modal.style.display = "none";
        form.reset();
        preview.style.display = "none";
        selectedImage = "";
    });

    // ================= CREATE FACULTY CARD (helper) =================
    function createFacultyCard(name, role, students, image) {
        const wrapper = document.createElement("a");
        wrapper.className = "faculty-card-link dynamic-card";

        const key = name.toLowerCase().replace(/\s+/g, '-');
        wrapper.href = "faculty-dashboard.html?faculty=" + key;

        wrapper.innerHTML = `
            <div class="faculty-card">
                <div class="faculty-image">
                    <img src="${image}" alt="${name}">
                </div>
                <div class="faculty-info">
                    <h3>${name}</h3>
                    <p class="faculty-role">${role}</p>
                    <p class="faculty-students"><strong>Assigned Students:</strong> ${students}</p>
                    <div class="faculty-actions">
                        <button class="edit-faculty-btn">✏️ Edit</button>
                        <button class="delete-faculty-btn">🗑️ Delete</button>
                    </div>
                </div>
            </div>
        `;
        return wrapper;
    }

    // ================= ATTACH EDIT / DELETE EVENTS =================
    function attachCardEvents(card) {
        const editBtn   = card.querySelector(".edit-faculty-btn");
        const deleteBtn = card.querySelector(".delete-faculty-btn");

        // ---- EDIT ----
        editBtn.addEventListener("click", function (e) {
            e.preventDefault();
            editingCard = card;

            // Pre-fill form with current values
            document.getElementById("newFacultyName").value =
                card.querySelector(".faculty-info h3").textContent;
            document.getElementById("newFacultyRole").value =
                card.querySelector(".faculty-role").textContent;

            const studentsText = card.querySelector(".faculty-students").textContent;
            const studentsNum  = studentsText.replace("Assigned Students:", "").trim();
            document.getElementById("newFacultyStudents").value = studentsNum;

            selectedImage = "";
            preview.style.display = "none";

            modal.querySelector("h2").textContent = "Edit Faculty";
            modal.querySelector(".save-btn").textContent = "Save Changes";
            modal.style.display = "flex";
        });

        // ---- DELETE ----
        deleteBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const name = card.querySelector(".faculty-info h3").textContent;
            if (confirm(`Are you sure you want to delete "${name}"?`)) {
                card.remove();
                updateLocalStorage();
            }
        });
    }

    // ================= LOCALSTORAGE: SAVE =================
    function updateLocalStorage() {
        const dynamicCards = grid.querySelectorAll(".dynamic-card");
        const data = [];

        dynamicCards.forEach(card => {
            data.push({
                name:     card.querySelector(".faculty-info h3").textContent,
                role:     card.querySelector(".faculty-role").textContent,
                students: card.querySelector(".faculty-students")
                              .textContent.replace("Assigned Students:", "").trim(),
                image:    card.querySelector(".faculty-image img").src
            });
        });

        localStorage.setItem("addedFaculty", JSON.stringify(data));
    }

    // ================= LOCALSTORAGE: LOAD =================
    function loadSavedFaculty() {
        const saved = JSON.parse(localStorage.getItem("addedFaculty") || "[]");
        saved.forEach(f => {
            const card = createFacultyCard(f.name, f.role, f.students, f.image);
            grid.appendChild(card);
            attachCardEvents(card);
        });
    }

});
