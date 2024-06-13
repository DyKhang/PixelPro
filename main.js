document.addEventListener("DOMContentLoaded", function () {
  const itemList = document.querySelectorAll(".faqs-item");
  const btnList = document.querySelectorAll(".faqs-item__btn-wrap");
  btnList.forEach((btn, index) =>
    btn.addEventListener("click", () => {
      itemList[index].classList.toggle("open");
    })
  );
});
