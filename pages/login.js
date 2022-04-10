function show() {}
function delete_preloader() {
  setTimeout(function () {
    var preloader = document.getElementById("loader");
    return preloader.parentNode.removeChild(preloader);
  }, 750);
}
function show_preloader() {
  var preloader = document.getElementById("loader");
  preloader.style.display = "flex";
}
window.onload = delete_preloader;
const login = function () {
  // Modal window
  const overlay = document.querySelector(".overlay");
  //login window
  const loginModal = document.querySelector(".modal__login");
  const btnCloseLoginModal = document.querySelector(".btn--close--login-modal");
  const btnOpenLoginModal = document.querySelector(".btn--open--login-modal");
  const toOpenLoginModal = document.querySelector(".open--login");
  //register window
  const registerModal = document.querySelector(".modal__register");
  const btnCloseRegisterModal = document.querySelector(
    ".btn--close--register-modal"
  );
  const toOpenRegisterModal = document.querySelector(".open--register");
  //open and closing modals
  const openRegisterModal = function () {
    loginModal.classList.add("hidden");
    overlay.classList.remove("hidden");
    registerModal.classList.remove("hidden");
  };
  const closeRegisterModal = function () {
    overlay.classList.add("hidden");
    registerModal.classList.add("hidden");
  };
  const openLoginModal = function () {
    loginModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    registerModal.classList.add("hidden");
  };
  const closeLoginModal = function () {
    loginModal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  const closeModals = function () {
    loginModal.classList.add("hidden");
    overlay.classList.add("hidden");
    registerModal.classList.add("hidden");
  };
  toOpenRegisterModal.addEventListener("click", openRegisterModal);
  btnCloseRegisterModal.addEventListener("click", closeRegisterModal);
  toOpenLoginModal.addEventListener("click", openLoginModal);
  btnOpenLoginModal.addEventListener("click", openLoginModal);
  btnCloseLoginModal.addEventListener("click", closeLoginModal);
  overlay.addEventListener("click", closeModals);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModals();
    }
  });

  //validation

  const loginForm = document.querySelector(".login-form");
  const confirmLogin = loginForm.elements["submit"];

  const registerForm = document.querySelector(".register-form");
  const confirmRegister = registerForm.elements["submit"];

  const validateEmail = function (form) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = form.elements["email"];
    console.log(email);
    if (!email.value.match(mailFormat)) {
      email.setCustomValidity("Email address incorrect");
      email.reportValidity();
      email.addEventListener("click", () => email.setCustomValidity(""));
    } else {
      email.setCustomValidity("");
      return true;
    }
  };

  const validatePassword = function (form) {
    const password = form.elements["password"];
    const confirmPassword = form.elements["cpassword"];
    if (!(password.value === confirmPassword.value)) {
      confirmPassword.setCustomValidity("Passwords do not match");
      confirmPassword.reportValidity();
      confirmPassword.addEventListener("click", () =>
        confirmPassword.setCustomValidity("")
      );
    } else {
      confirmPassword.setCustomValidity("");
      return true;
    }
  };

  confirmLogin.addEventListener("click", function () {
    if (
      validateEmail(loginForm) &&
      loginForm.elements["password"].checkValidity()
    ) {
      alert("Logged in!");
    }
  });

  confirmRegister.addEventListener("click", function () {
    if (
      validateEmail(registerForm) &&
      registerForm.elements["password"].checkValidity() &&
      registerForm.elements["password"].checkValidity() &&
      validatePassword(registerForm)
    ) {
      alert("Registered Succesfully!");
    }
  });
};

login();
