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
  const modals = document.querySelectorAll(".modal");
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
};

login();
