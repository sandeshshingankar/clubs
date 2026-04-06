// Expandable Section Functionality for Admin
document.addEventListener('DOMContentLoaded', function() {
    const expandableHeaders = document.querySelectorAll('.expandable-header');

    expandableHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const expandableItem = this.closest('.expandable-item');
            const isExpanded = expandableItem.getAttribute('aria-expanded') === 'true';

            // Close all other expanded items
            document.querySelectorAll('.expandable-item[aria-expanded="true"]').forEach(item => {
                if (item !== expandableItem) {
                    item.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            expandableItem.setAttribute('aria-expanded', !isExpanded);
        });

        // Keyboard navigation support
        header.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
    });

    // Edit Button Handler
    const editBtn = document.querySelector('.edit-btn');
    if (editBtn) {
        editBtn.addEventListener('click', function() {
            console.log("[v0] Edit student record clicked");
            alert('Edit Student Record - Feature coming soon');
        });
    }

    // Delete Button Handler
    const deleteBtn = document.querySelector('.delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function() {
            console.log("[v0] Delete student record clicked");
            if (confirm('Are you sure you want to delete this student record? This action cannot be undone.')) {
                alert('Student Record Deleted - Feature coming soon');
            }
        });
    }

    // Add New Student Button Handler
    const addStudentBtn = document.querySelector('.add-student-btn');
    if (addStudentBtn) {
        addStudentBtn.addEventListener('click', function() {
            console.log("[v0] Add new student button clicked");
            alert('Add New Student - Feature coming soon');
        });
    }

    // Mini Button Handlers
    const miniButtons = document.querySelectorAll('.mini-btn');
    miniButtons.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            const buttonText = this.textContent.trim();
            console.log("[v0] Admin action clicked:", buttonText);
            alert(buttonText + ' - Feature coming soon');
        });
    });

    // Document Action Handlers
    const docActions = document.querySelectorAll('.doc-action');
    docActions.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const action = this.classList.contains('view') ? 'View' : 'Remove';
            const docName = this.closest('.document-item').querySelector('.doc-name').textContent;
            console.log("[v0] Document action:", action, "for", docName);
            alert(action + ' document - Feature coming soon');
        });
    });
});
