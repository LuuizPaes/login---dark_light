const mode = document.querySelector("#mode_icon");

mode.addEventListener("click", () => {
  const form = document.querySelector("#login_form");

  if (mode.classList.contains("fa-moon")) {
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");

    form.classList.add("dark");
    return;
  }

  mode.classList.add("fa-moon");
  mode.classList.remove("fa-sun");
  form.classList.remove("dark");
});
