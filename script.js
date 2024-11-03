document.addEventListener("DOMContentLoaded", function () {
    // Toggle for Skills List
    var toggleSkillsButton = document.getElementById('toggleSkills');
    var skillsList = document.getElementById('skillsList');
    toggleSkillsButton.addEventListener('click', function () {
        skillsList.classList.toggle('hidden');
        if (skillsList.classList.contains('hidden')) {
            toggleSkillsButton.textContent = "Show Skills";
        }
        else {
            toggleSkillsButton.textContent = "Hide Skills";
        }
    });
    // Toggle for Projects List
    var toggleProjectsButton = document.getElementById('toggleProjects');
    var projectsList = document.getElementById('projectsList');
    toggleProjectsButton.addEventListener('click', function () {
        projectsList.classList.toggle('hidden');
        // Change the button text based on the visibility of the projects list
        if (projectsList.classList.contains('hidden')) {
            toggleProjectsButton.textContent = "Show Projects";
        }
        else {
            toggleProjectsButton.textContent = "Hide Projects";
        }
    });
    // Toggle for Education section
    var toggleEduButton = document.getElementById('toggleEdu');
    var eduContent = document.getElementById('eduContent');
    toggleEduButton.addEventListener('click', function () {
        eduContent.classList.toggle('hidden');
        // Change the button text based on the visibility of the education list
        if (eduContent.classList.contains('hidden')) {
            toggleEduButton.textContent = "Show Education";
        }
        else {
            toggleEduButton.textContent = "Hide Education";
        }
    });
    // Toggle for Profile section
    var toggleProfileButton = document.getElementById('toggleProfile');
    var profileContent = document.getElementById('profileContent');
    toggleProfileButton.addEventListener('click', function () {
        profileContent.classList.toggle('hidden');
        // Change the button text based on the visibility of the Profile list
        if (profileContent.classList.contains('hidden')) {
            toggleProfileButton.textContent = "Show Profile";
        }
        else {
            toggleProfileButton.textContent = "Hide Profile";
        }
    });
});
