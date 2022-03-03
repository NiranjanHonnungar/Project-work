// //cart items
// let cartItems = [];

// //add cart item
// let product = document.querySelectorAll(".product");
// product.forEach((item) => {
//   let add = item.querySelector("button");
//   add.addEventListener("click", function () {
//     let price = Number(item.querySelector(".price").textContent.slice(2));
//     let name = item.querySelector("h2").textContent;
//     let imgSrc = item.querySelector("img").getAttribute("src");
//     let qty = 1;
//     let cartItem = {
//       price: price,
//       name: name,
//       imgSrc: imgSrc,
//       qty: qty,
//     };
//     if (cartItems.some((a) => a.name == name)) {
//       cartItems.find(({ name }) => name === cartItem.name).qty += 1;
//     } else {
//       cartItems.push(cartItem);
//     }
//     console.log(cartItems);
//   });
// });

homeTabs = document.querySelectorAll(".home_tab");
homeTabsContainer = document.querySelector(".home_tab-container");
homeTabsContent = document.querySelectorAll(".home_content");
homeTabsContainer.addEventListener("click", function (e) {
  clicked = e.target.closest(".home_tab");
  if (!clicked) return;
  homeTabs.forEach((e) => e.classList.remove("home_tab--active"));
  clicked.classList.add("home_tab--active");
  homeTabsContent.forEach((e) => e.classList.remove("home_content--active"));
  document
    .querySelector(`.home_content--${clicked.dataset.tab}`)
    .classList.add("home_content--active");
});

// // Modal window
// const overlay = document.querySelector(".overlay");
// const modals = document.querySelectorAll(".modal");
// //login window
// const loginModal = document.querySelector(".modal__login");
// const btnCloseLoginModal = document.querySelector(".btn--close--login-modal");
// const btnOpenLoginModal = document.querySelector(".btn--open--login-modal");
// const toOpenLoginModal = document.querySelector(".open--login");
// //register window
// const registerModal = document.querySelector(".modal__register");
// const btnCloseRegisterModal = document.querySelector(
//   ".btn--close--register-modal"
// );
// const toOpenRegisterModal = document.querySelector(".open--register");
// //open and closing modals
// const openRegisterModal = function () {
//   loginModal.classList.add("hidden");
//   overlay.classList.remove("hidden");
//   registerModal.classList.remove("hidden");
// };
// const closeRegisterModal = function () {
//   overlay.classList.add("hidden");
//   registerModal.classList.add("hidden");
// };
// const openLoginModal = function () {
//   loginModal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//   registerModal.classList.add("hidden");
// };
// const closeLoginModal = function () {
//   loginModal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// const closeModals = function () {
//   closeLoginModal();
//   closeRegisterModal();
// };
// toOpenRegisterModal.addEventListener("click", openRegisterModal);
// btnCloseRegisterModal.addEventListener("click", closeRegisterModal);
// toOpenLoginModal.addEventListener("click", openLoginModal);
// btnOpenLoginModal.addEventListener("click", openLoginModal);
// btnCloseLoginModal.addEventListener("click", closeLoginModal);
// overlay.addEventListener("click", closeModals);
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     closeModals();
//   }
// });

// const slider = function () {
//   const slides = document.querySelectorAll(".slide");
//   const maxSlide = slides.length;
//   const slider = document.querySelector(".slider");
//   const btnLeft = document.querySelector(".slider__btn--left");
//   const btnRight = document.querySelector(".slider__btn--right");
//   const dotContainer = document.querySelector(".dots");
//   slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));
//   let curSlide = 0;

//   const createDots = function () {
//     slides.forEach(function (_, i) {
//       dotContainer.insertAdjacentHTML(
//         "beforeend",
//         `<button class="dots__dot" data-slide="${i}"></button>`
//       );
//       console.log("dot");
//     });
//   };
//   createDots();
//   const activateDot = function (slide) {
//     document
//       .querySelectorAll(".dots__dot")
//       .forEach((dot) => dot.classList.remove("dots__dot--active"));
//     document
//       .querySelector(`.dots__dot[data-slide="${slide}"]`)
//       .classList.add("dots__dot--active");
//   };
//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
//     );
//     activateDot(slide);
//   };
//   goToSlide(0);
//   const nextSlide = function () {
//     if (curSlide == maxSlide - 1) curSlide = 0;
//     else curSlide++;
//     goToSlide(curSlide);
//   };
//   const prevSlide = function () {
//     if (curSlide == 0) curSlide = maxSlide - 1;
//     else curSlide--;
//     goToSlide(curSlide);
//   };
//   btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", prevSlide);

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") prevSlide();
//     else if (e.key == "ArrowRight") nextSlide();
//   });

//   dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dots__dot")) {
//       const { slide } = e.target.dataset;
//       goToSlide(slide);
//     }
//   });
// };
// slider();
