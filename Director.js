// ===== OPEN EDIT =====
        if (e.target.classList.contains('edit-btn')) {
            editModal.style.display = 'block';

            document.getElementById('editName').value = nameField.textContent;
            document.getElementById('editTitle').value = titleField.textContent;
            document.getElementById('editDepartment').value = deptField.textContent;
        }

        // ===== CLOSE EDIT =====
        if (e.target.classList.contains('close-edit')) {
            editModal.style.display = 'none';
        }

        // ===== OPEN DELETE =====
        if (e.target.classList.contains('delete-btn')) {
            deleteModal.style.display = 'block';
        }

        // ===== CLOSE DELETE =====
        if (e.target.classList.contains('close-delete') ||
            e.target.classList.contains('cancel-btn')) {

            deleteModal.style.display = 'none';
        }

        // ===== CONFIRM DELETE =====
        if (e.target.id === 'confirmDelete') {
            profileCard.style.display = 'none';
            localStorage.setItem('directorDeleted', 'true');
            deleteModal.style.display = 'none';
        }

    });

    // ================= SAVE EDIT =================
    if (editForm) {
        editForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const updatedData = {
                name: document.getElementById('editName').value,
                title: document.getElementById('editTitle').value,
                department: document.getElementById('editDepartment').value
            };

            localStorage.setItem('directorData', JSON.stringify(updatedData));

            nameField.textContent = updatedData.name;
            titleField.textContent = updatedData.title;
            deptField.textContent = updatedData.department;

            editModal.style.display = 'none';
        });
    }

});


// ================= QUICK ACCESS =================

function openPanel(panelId) {

    const panels = document.querySelectorAll('.dynamic-panel');

    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    document.getElementById(panelId).style.display = 'block';
}


// ================= DEPARTMENTS =================

function addDepartment() {

    const deptInput = document.getElementById('newDept');
    const deptName = deptInput.value.trim();

    if (!deptName) return;

    let departments = JSON.parse(localStorage.getItem('departments')) || [];
    departments.push(deptName);

    localStorage.setItem('departments', JSON.stringify(departments));

    deptInput.value = '';
    loadDepartments();
}

function loadDepartments() {

    const deptList = document.getElementById('deptList');
    deptList.innerHTML = '';

    let departments = JSON.parse(localStorage.getItem('departments')) || [];

    departments.forEach(dept => {
        const li = document.createElement('li');
        li.textContent = dept;
        deptList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', loadDepartments);


// ================= NOTICE =================

function publishNotice() {

    const noticeText = document.getElementById('noticeText').value.trim();
    if (!noticeText) return;

    let notices = JSON.parse(localStorage.getItem('notices')) || [];
    notices.push(noticeText);

    localStorage.setItem('notices', JSON.stringify(notices));

    document.getElementById('noticeText').value = '';
    loadNotices();
}

function loadNotices() {

    const noticeList = document.getElementById('noticeList');
    noticeList.innerHTML = '';

    let notices = JSON.parse(localStorage.getItem('notices')) || [];

    notices.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        noticeList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', loadNotices);


// ================= SETTINGS (Dark Mode) =================

document.addEventListener('DOMContentLoaded', function () {

    const toggle = document.getElementById('darkModeToggle');

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }

    toggle?.addEventListener('change', function () {

        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }

    });  mi tula old Director.js dili ahe atyatil all feturs pahije ahe ani kahi tu jo dila ahe to code add kr
