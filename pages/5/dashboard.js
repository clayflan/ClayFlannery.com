var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}


// $(function () {
//     $('siderbar a').filter(function () {
//         return this.href === location.href;
//     }).addClass('active');
// });


    // $(function(){
    //     $('sidebar a').each(function(){
    //         if ($(this).prop('href') == window.location.href) {
    //             $(this).addClass('active'); $(this).parents('li').addClass('active');
    //         }
    //     });
    // });

