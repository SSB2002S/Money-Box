let boxline = document.querySelector(".tracking-box .tracking-bar");
console.log(boxline)
window.onscroll = function () {
  boxline.style.width = boxline.dataset.prog;
};
