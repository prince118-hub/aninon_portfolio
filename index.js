document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-button");
  const icon = document.getElementById("theme-icon");

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });
    const editButton = document.getElementById("edit-about");
    const aboutSection = document.querySelector(".about-desc");
    editButton.addEventListener("click", () => {
        if(aboutSection.isContentEditable){
            aboutSection.contentEditable = "false";
            editButton.textContent = "Edit";
        }
        else{
            aboutSection.contentEditable = "true";
            aboutSection.focus();
            editButton.textContent = "Save";
        }
    })
        
});
