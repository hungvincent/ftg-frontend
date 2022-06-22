// 普渡-場次

// 新增
$(".btn-add-purduefield").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let num = $(".table-params_purdue-field").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 摘要
    let params_purdue_content = "<td><input class='table_input params_purdue_content' type='text'></td>";

    // 法會開始日
    let params_purdue_pujaStart = "<td><input class='table_input params_purdue_pujaStart' type='date'></td>";

    // 法會結束日
    let params_purdue_pujaEnd = "<td><input class='table_input params_purdue_pujaEnd' type='date'></td>";

    // 開始登記日期
    let params_purdue_registerStart = " <td><input class='table_input params_purdue_registerStart' type='date'></td>";

    // 結束登記日期
    let params_purdue_registerEnd = "<td><input class='table_input params_purdue_registerEnd' type='date'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let purdueField_table = $("<tr></tr>");
    purdueField_table.append(table_num,params_purdue_content,params_purdue_pujaStart,params_purdue_pujaEnd,params_purdue_registerStart,params_purdue_registerEnd,btn_box);
    $(".table-params_purdue-field").append(purdueField_table);
})

// 編輯
let params_purdueField_content, params_purdueField_pujaStart, params_purdueField_pujaEnd, params_purdueField_registerStart, params_purdueField_registerEnd;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_purdue-field")){
        params_purdueField_content = $(this).parents("tr").find(".params_purdue_content").val();
        params_purdueField_pujaStart = $(this).parents("tr").find(".params_purdue_pujaStart").val();
        params_purdueField_pujaEnd = $(this).parents("tr").find(".params_purdue_pujaEnd").val();
        params_purdueField_registerStart = $(this).parents("tr").find(".params_purdue_registerStart").val();
        params_purdueField_registerEnd = $(this).parents("tr").find(".params_purdue_registerEnd").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_purdue-field")){
        if($(this).parents("tr").find(".params_purdue_content").val()==""){
            let alert_text="請輸入摘要";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_purdue_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_purdue_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_purdue_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_purdue_registerEnd").val()==""){
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
    if($(this).parents(".table").hasClass("table-params_purdue-field")){
        $(this).parents("tr").find(".params_purdue_content").val(params_purdueField_content);
        $(this).parents("tr").find(".params_purdue_pujaStart").val(params_purdueField_pujaStart);
        $(this).parents("tr").find(".params_purdue_pujaEnd").val(params_purdueField_pujaEnd);
        $(this).parents("tr").find(".params_purdue_registerStart").val(params_purdueField_registerStart);
        $(this).parents("tr").find(".params_purdue_registerEnd").val(params_purdueField_registerEnd);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_purdue-field")){
        if($(this).parents("tr").find(".params_purdue_content").val()==""){
            let alert_text="請輸入摘要";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_purdue_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_purdue_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_purdue_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_purdue_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-purduefield").attr("disabled",false);
        }
    }
})