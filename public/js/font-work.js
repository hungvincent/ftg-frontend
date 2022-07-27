// twAddrHelper.js
$(function () {
  setAddressInput($("#dvAddress1"));
});

// tw-city-selector.js
new TwCitySelector();
var a = new TwCitySelector({
  el: ".test-object-has-zipcode",
  hasZipcode: true,
});

// 縣市select跟地址input連動
$(document).on("change", ".county", function () {
  let county = $(this).val();
  $(".cAddress").val(county);
});
$(document).on("change", ".district", function () {
  let district = $(this).val();
  let county = $(".county").val();
  if (!$(".county").val() == "") {
    $(".cAddress").val(county + district);
  }
});

// 拖拉
$(function () {
  $("#sortable").sortable({
    beforeStop: function () {
      $("#sortable").find(".table_num").each(function (i) {
          let index = i + 1;
          $(this).text(index);
        });
    },
  });
  $("#pills-tab").sortable({
    beforeStop: function(){
      $("#pills-tab").find(".nav-item").each(function(j){
        $(this).attr("data-index",j);
      })
    }
  });
  $("#sortable li").disableSelection();
});

// 紀錄
$(".btn-record").each(function(){
    $(this).click(function(){
        $(".front_record").fadeIn(300);
    })
})
$(".front-tab .nav-link").click(function(){
    $(".front_record").fadeOut(300);
})

// 日報表
$(".btn-report").click(function(){
  $(this).parents(".report").toggleClass("active");
  $(".report_content").fadeToggle(500);
})