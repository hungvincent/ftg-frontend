$(document).on("click",".table-field tr",function(){
  if(!$(this).hasClass("editing")){
    if(!$(this).hasClass("table_title")){
      $(this).toggleClass("active").siblings("tr").removeClass("active");
    }
  }
})