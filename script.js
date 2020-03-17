var popup = document.querySelector(".modal-bg_js");
var buttonOpen = document.querySelector(".pourple-link_js");
var buttonClose = document.querySelector(".modal-close_js");

buttonOpen.addEventListener("click", function (){
popup.classList.remove("modal-bg_close");
});

buttonClose.addEventListener("click", function (){
popup.classList.add("modal-bg_close");
});
  
// buttonOpen.addEventListener("click",function() {
//     console.log("нажал");
// });