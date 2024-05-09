document.addEventListener('DOMContentLoaded', function () {
    const subjectList = document.getElementById('subjectList');
    const addSubjectForm = document.getElementById('addSubjectForm');

    // Load subjects from Local Storage when page loads
    loadSubjects();

    addSubjectForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        
        const subjectNameInput = document.getElementById('subjectName');
        const subjectName = subjectNameInput.value.trim();

        if (subjectName === "") {
            alert("Vui lòng nhập tên môn học.");
            return;
        }

        addSubject(subjectName);
        subjectNameInput.value = ""; // Clear input field after adding subject

        // Save subjects to Local Storage
        saveSubjects();
    });

    function addSubject(subjectName) {
        const listItem = document.createElement('li');
        listItem.textContent = subjectName;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Xóa";
        deleteButton.addEventListener('click', function () {
            listItem.remove();
            // Save subjects to Local Storage after deletion
            saveSubjects();
        });
        listItem.appendChild(deleteButton);

        subjectList.appendChild(listItem);

        // Save subjects to Local Storage after addition
        saveSubjects();
    }

    function saveSubjects() {
        const subjects = [];
        const subjectItems = subjectList.querySelectorAll('li');
        subjectItems.forEach(function (subjectItem) {
            subjects.push(subjectItem.textContent);
        });
        localStorage.setItem('subjects', JSON.stringify(subjects));
    }

    function loadSubjects() {
        const subjects = JSON.parse(localStorage.getItem('subjects'));
        if (subjects) {
            subjects.forEach(function (subject) {
                addSubject(subject);
            });
        }
    }
});