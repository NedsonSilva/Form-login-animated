const inputs = document.querySelectorAll('input');

function ActiveFocus() {
  let parent = this.parentNode;
	parent.classList.add("active");
}

//remover quando perder o foco
function removeFocus() {
  let parent = this.parentNode;//pega label pai atual
	parent.classList.remove("active");
}

inputs.forEach(inputs => {
  inputs.addEventListener('focus', ActiveFocus);
  inputs.addEventListener('blur', removeFocus);
})

const darkMode = {
  darkModeIcon: document.getElementById('dark-mode-active'),
  
  darkModeActive() {
    document.body.classList.toggle('dark-mode');


  }
}

darkMode.darkModeIcon.addEventListener('click', darkMode.darkModeActive)