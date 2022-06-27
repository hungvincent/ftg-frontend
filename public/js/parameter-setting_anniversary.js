// 建廟慶典-場次

// 新增
$(".btn-add-anniversary").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let num = $(".table-params_anniversary").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 場次
    let params_anniversary_field = "<td><input class='table_input params_anniversary_field' type='text'></td>";

    // 法會開始日
    let params_anniversary_pujaStart = "<td><input class='table_input input-date params_anniversary_pujaStart' type='date'></td>";

    // 法會結束日
    let params_anniversary_pujaEnd = "<td><input class='table_input input-date params_anniversary_pujaEnd' type='date'></td>";

    // 開始登記日期
    let params_anniversary_registerStart = " <td><input class='table_input input-date params_anniversary_registerStart' type='date'></td>";

    // 結束登記日期
    let params_anniversary_registerEnd = "<td><input class='table_input input-date params_anniversary_registerEnd' type='date'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let anniversaryField_table = $("<tr></tr>");
    anniversaryField_table.append(table_num,params_anniversary_field,params_anniversary_pujaStart,params_anniversary_pujaEnd,params_anniversary_registerStart,params_anniversary_registerEnd,btn_box);
    $(".table-params_anniversary").append(anniversaryField_table);
})

// 編輯
let params_anniversaryField_field, params_anniversaryField_pujaStart, params_anniversaryField_pujaEnd, params_anniversaryField_registerStart, params_anniversaryField_registerEnd;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_anniversary")){
        params_anniversaryField_field = $(this).parents("tr").find(".params_anniversary_field").val();
        params_anniversaryField_pujaStart = $(this).parents("tr").find(".params_anniversary_pujaStart").val();
        params_anniversaryField_pujaEnd = $(this).parents("tr").find(".params_anniversary_pujaEnd").val();
        params_anniversaryField_registerStart = $(this).parents("tr").find(".params_anniversary_registerStart").val();
        params_anniversaryField_registerEnd = $(this).parents("tr").find(".params_anniversary_registerEnd").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_anniversary")){
        if($(this).parents("tr").find(".params_anniversary_field").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_anniversary_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_anniversary_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_anniversary_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_anniversary_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
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
    if($(this).parents(".table").hasClass("table-params_anniversary")){
        $(this).parents("tr").find(".params_anniversary_field").val(params_anniversaryField_field);
        $(this).parents("tr").find(".params_anniversary_pujaStart").val(params_anniversaryField_pujaStart);
        $(this).parents("tr").find(".params_anniversary_pujaEnd").val(params_anniversaryField_pujaEnd);
        $(this).parents("tr").find(".params_anniversary_registerStart").val(params_anniversaryField_registerStart);
        $(this).parents("tr").find(".params_anniversary_registerEnd").val(params_anniversaryField_registerEnd);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_anniversary")){
        if($(this).parents("tr").find(".params_anniversary_field").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_anniversary_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_anniversary_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_anniversary_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_anniversary_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-anniversary").attr("disabled",false);
        }
    }
})

// 取消新增
// $(document).on("click",".table_cancel",function(){
//     if($(this).parents(".table").hasClass("table-params_anniversary")){
//         $(".btn-add-anniversary").attr("disabled",false);
//     }
// })