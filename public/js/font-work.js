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
  console.log(county);
  $(".cAddress").val(county);
});
$(document).on("change", ".district", function () {
  let district = $(this).val();
  let county = $(".county").val();
  console.log(district);
  if (!$(".county").val() == "") {
    $(".cAddress").val(county + district);
  }
});

// 拖拉
$(function () {
  $("#sortable").sortable({
    beforeStop: function () {
      $("#sortable")
        .find(".table_num")
        .each(function (i) {
          let index = i + 1;
          $(this).text(index);
        });
    },
  });
  $("#pills-tab").sortable();
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