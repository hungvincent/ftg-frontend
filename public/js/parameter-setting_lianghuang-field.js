// 梁皇寶懺-場次

// 新增
$(".btn-add-lianghuangfield").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let num = $(".table-params_lianghuang-field").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 摘要
    let params_lianghuang_content = "<td><input class='table_input params_lianghuang_content' type='text'></td>";

    // 法會開始日
    let params_lianghuang_pujaStart = "<td><input class='table_input input-date params_lianghuang_pujaStart' type='date'></td>";

    // 法會結束日
    let params_lianghuang_pujaEnd = "<td><input class='table_input input-date params_lianghuang_pujaEnd' type='date'></td>";

    // 開始登記日期
    let params_lianghuang_registerStart = " <td><input class='table_input input-date params_lianghuang_registerStart' type='date'></td>";

    // 結束登記日期
    let params_lianghuang_registerEnd = "<td><input class='table_input input-date params_lianghuang_registerEnd' type='date'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let lianghuangField_table = $("<tr class='editing'></tr>");
    lianghuangField_table.append(table_num,params_lianghuang_content,params_lianghuang_pujaStart,params_lianghuang_pujaEnd,params_lianghuang_registerStart,params_lianghuang_registerEnd,btn_box);
    $(".table-params_lianghuang-field").append(lianghuangField_table);
})

// 編輯
let params_lianghuangField_content, params_lianghuangField_pujaStart, params_lianghuangField_pujaEnd, params_lianghuangField_registerStart, params_lianghuangField_registerEnd;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_lianghuang-field")){
        $(this).parents("tr").addClass("editing").removeClass("active");
        params_lianghuangField_content = $(this).parents("tr").find(".params_lianghuang_content").val();
        params_lianghuangField_pujaStart = $(this).parents("tr").find(".params_lianghuang_pujaStart").val();
        params_lianghuangField_pujaEnd = $(this).parents("tr").find(".params_lianghuang_pujaEnd").val();
        params_lianghuangField_registerStart = $(this).parents("tr").find(".params_lianghuang_registerStart").val();
        params_lianghuangField_registerEnd = $(this).parents("tr").find(".params_lianghuang_registerEnd").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_lianghuang-field")){
        if($(this).parents("tr").find(".params_lianghuang_content").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").removeClass("editing");
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
    if($(this).parents(".table").hasClass("table-params_lianghuang-field")){
        $(this).parents("tr").removeClass("editing");
        $(this).parents("tr").find(".params_lianghuang_content").val(params_lianghuangField_content);
        $(this).parents("tr").find(".params_lianghuang_pujaStart").val(params_lianghuangField_pujaStart);
        $(this).parents("tr").find(".params_lianghuang_pujaEnd").val(params_lianghuangField_pujaEnd);
        $(this).parents("tr").find(".params_lianghuang_registerStart").val(params_lianghuangField_registerStart);
        $(this).parents("tr").find(".params_lianghuang_registerEnd").val(params_lianghuangField_registerEnd);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_lianghuang-field")){
        if($(this).parents("tr").find(".params_lianghuang_content").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").removeClass("editing");
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-lianghuangfield").attr("disabled",false);
        }
    }
})