document.addEventListener('DOMContentLoaded', function () {
  const categoriesList = document.querySelector(".categories-list");
  const scrollLength = categoriesList.scrollWidth - categoriesList.clientWidth;
  const leftPaddle = document.querySelector(".left-paddle");
  const rightPaddle = document.querySelector(".right-paddle");

  function checkScroll() {
    const currentScroll = categoriesList.scrollLeft;
    if (currentScroll === 0) {
      leftPaddle.setAttribute("disable", true);
      rightPaddle.removeAttribute("disable");
    }
  }

});
