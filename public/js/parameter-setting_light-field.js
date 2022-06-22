// 點燈-場次

// 新增
$(".btn-add-lightfield").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let num = $(".table-params_light-field").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 摘要
    let params_light_content = "<td><input class='table_input params_light_content' type='text'></td>";

    // 法會開始日
    let params_light_pujaStart = "<td><input class='table_input params_light_pujaStart' type='date'></td>";

    // 法會結束日
    let params_light_pujaEnd = "<td><input class='table_input params_light_pujaEnd' type='date'></td>";

    // 開始登記日期
    let params_light_registerStart = " <td><input class='table_input params_light_registerStart' type='date'></td>";

    // 結束登記日期
    let params_light_registerEnd = "<td><input class='table_input params_light_registerEnd' type='date'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let lightField_table = $("<tr></tr>");
    lightField_table.append(table_num,params_light_content,params_light_pujaStart,params_light_pujaEnd,params_light_registerStart,params_light_registerEnd,btn_box);
    $(".table-params_light-field").append(lightField_table);
})

// 編輯
let params_lightField_content, params_lightField_pujaStart, params_lightField_pujaEnd, params_lightField_registerStart, params_lightField_registerEnd;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_light-field")){
        params_lightField_content = $(this).parents("tr").find(".params_light_content").val();
        params_lightField_pujaStart = $(this).parents("tr").find(".params_light_pujaStart").val();
        params_lightField_pujaEnd = $(this).parents("tr").find(".params_light_pujaEnd").val();
        params_lightField_registerStart = $(this).parents("tr").find(".params_light_registerStart").val();
        params_lightField_registerEnd = $(this).parents("tr").find(".params_light_registerEnd").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_light-field")){
        if($(this).parents("tr").find(".params_light_content").val()==""){
            let alert_text="請輸入摘要";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_registerEnd").val()==""){
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
    if($(this).parents(".table").hasClass("table-params_light-field")){
        $(this).parents("tr").find(".params_light_content").val(params_lightField_content);
        $(this).parents("tr").find(".params_light_pujaStart").val(params_lightField_pujaStart);
        $(this).parents("tr").find(".params_light_pujaEnd").val(params_lightField_pujaEnd);
        $(this).parents("tr").find(".params_light_registerStart").val(params_lightField_registerStart);
        $(this).parents("tr").find(".params_light_registerEnd").val(params_lightField_registerEnd);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_light-field")){
        if($(this).parents("tr").find(".params_light_content").val()==""){
            let alert_text="請輸入摘要";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-lightfield").attr("disabled",false);
        }
    }
})