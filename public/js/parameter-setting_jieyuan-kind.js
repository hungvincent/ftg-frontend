// 解冤法會-種類

// 新增
$(".btn-add-jieyuankind").click(function(){
    $(this).attr("disabled",true);

    // 代碼
    let num = $(".table-params_jieyuan-kind").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 歲次
    let params_jieyuan_kindname = "<td><input class='table_input params_jieyuan_age' type='text'></td>";

    // 金額
    let params_jieyuan_price = "<td><input class='table_input params_jieyuan_price' type='number'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let jieyuanKind_table = $("<tr></tr>");
    jieyuanKind_table.append(table_num,params_jieyuan_kindname,params_jieyuan_price,btn_box);
    $(".table-params_jieyuan-kind").append(jieyuanKind_table);
})

// 編輯
let params_jieyuanKind_age, 
params_jieyuanKind_price;

$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_jieyuan-kind")){
        params_jieyuanKind_age = $(this).parents("tr").find(".params_jieyuan_age").val();
        params_jieyuanKind_price = $(this).parents("tr").find(".params_jieyuan_price").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_jieyuan-kind")){
        if($(this).parents("tr").find(".params_jieyuan_age").val()==""){
            let alert_text="請輸入歲次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_price").val()==""){
            let alert_text="請輸入金額";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_change-cancel").addClass("d-none").removeClass("d-inline-block");
        }
    }
})

// 取消變更
$(document).on("click",".table_change-cancel",function(){
    if($(this).parents(".table").hasClass("table-params_jieyuan-kind")){
        $(this).parents("tr").find(".params_jieyuan_age").val(params_jieyuanKind_age);
        $(this).parents("tr").find(".params_jieyuan_price").val(params_jieyuanKind_price);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_jieyuan-kind")){
        if($(this).parents("tr").find(".params_jieyuan_age").val()==""){
            let alert_text="請輸入歲次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_price").val()==""){
            let alert_text="請輸入金額";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-jieyuankind").attr("disabled",false);
        }
    }
})