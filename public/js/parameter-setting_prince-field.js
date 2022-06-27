// 點燈-場次

// 新增
$(".btn-add-princefield").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let num = $(".table-params_prince-field").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 摘要
    let params_prince_content = "<td><input class='table_input params_prince_content' type='text'></td>";

    // 法會開始日
    let params_prince_pujaStart = "<td><input class='table_input input-date params_prince_pujaStart' type='date'></td>";

    // 法會結束日
    let params_prince_pujaEnd = "<td><input class='table_input input-date params_prince_pujaEnd' type='date'></td>";

    // 開始登記日期
    let params_prince_registerStart = " <td><input class='table_input input-date params_prince_registerStart' type='date'></td>";

    // 結束登記日期
    let params_prince_registerEnd = "<td><input class='table_input input-date params_prince_registerEnd' type='date'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let princeField_table = $("<tr class='editing'></tr>");
    princeField_table.append(table_num,params_prince_content,params_prince_pujaStart,params_prince_pujaEnd,params_prince_registerStart,params_prince_registerEnd,btn_box);
    $(".table-params_prince-field").append(princeField_table);
})

// 編輯
let params_princeField_content, params_princeField_pujaStart, params_princeField_pujaEnd, params_princeField_registerStart, params_princeField_registerEnd;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_prince-field")){
        $(this).parents("tr").addClass("editing").removeClass("active");
        params_princeField_content = $(this).parents("tr").find(".params_prince_content").val();
        params_princeField_pujaStart = $(this).parents("tr").find(".params_prince_pujaStart").val();
        params_princeField_pujaEnd = $(this).parents("tr").find(".params_prince_pujaEnd").val();
        params_princeField_registerStart = $(this).parents("tr").find(".params_prince_registerStart").val();
        params_princeField_registerEnd = $(this).parents("tr").find(".params_prince_registerEnd").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_prince-field")){
        if($(this).parents("tr").find(".params_prince_content").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_registerEnd").val()==""){
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
    if($(this).parents(".table").hasClass("table-params_prince-field")){
        $(this).parents("tr").removeClass("editing");
        $(this).parents("tr").find(".params_prince_content").val(params_princeField_content);
        $(this).parents("tr").find(".params_prince_pujaStart").val(params_princeField_pujaStart);
        $(this).parents("tr").find(".params_prince_pujaEnd").val(params_princeField_pujaEnd);
        $(this).parents("tr").find(".params_prince_registerStart").val(params_princeField_registerStart);
        $(this).parents("tr").find(".params_prince_registerEnd").val(params_princeField_registerEnd);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_prince-field")){
        if($(this).parents("tr").find(".params_prince_content").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_registerEnd").val()==""){
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
            $(".btn-add-princefield").attr("disabled",false);
        }
    }
})