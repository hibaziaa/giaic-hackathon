document.addEventListener("DOMContentLoaded", () => {
    // Toggle for Skills List
    const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
    const skillsList = document.getElementById('skillsList') as HTMLElement;

    toggleSkillsButton.addEventListener('click', () => {
        skillsList.classList.toggle('hidden');

        if (skillsList.classList.contains('hidden')) {
            toggleSkillsButton.textContent = "Show Skills";
        } else {
            toggleSkillsButton.textContent = "Hide Skills";
        }
    });

    // Toggle for Projects List
    const toggleProjectsButton = document.getElementById('toggleProjects') as HTMLButtonElement;
    const projectsList = document.getElementById('projectsList') as HTMLElement;

    toggleProjectsButton.addEventListener('click', () => {
        projectsList.classList.toggle('hidden');
         // Change the button text based on the visibility of the projects list
         if (projectsList.classList.contains('hidden')) {
            toggleProjectsButton.textContent = "Show Projects";
        } else {
            toggleProjectsButton.textContent = "Hide Projects";
        }
    });
    
    // Toggle for Education section
    const toggleEduButton = document.getElementById('toggleEdu') as HTMLButtonElement;
    const eduContent = document.getElementById('eduContent') as HTMLElement;

    toggleEduButton.addEventListener('click', () => {
        eduContent.classList.toggle('hidden');
         // Change the button text based on the visibility of the education list
         if (eduContent.classList.contains('hidden')) {
            toggleEduButton.textContent = "Show Education";
        } else {
            toggleEduButton.textContent = "Hide Education";
        }
    });
     // Toggle for Profile section
     const toggleProfileButton = document.getElementById('toggleProfile') as HTMLButtonElement;
     const profileContent = document.getElementById('profileContent') as HTMLElement;
 
     toggleProfileButton.addEventListener('click', () => {
         profileContent.classList.toggle('hidden');
          // Change the button text based on the visibility of the Profile list
          if (profileContent.classList.contains('hidden')) {
            toggleProfileButton.textContent = "Show Profile";
        } else {
            toggleProfileButton.textContent = "Hide Profile";
        }
     });
});
