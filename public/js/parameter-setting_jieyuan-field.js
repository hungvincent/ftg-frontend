// 解冤法會-場次

// 新增
$(".btn-add-jieyuanfield").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let num = $(".table-params_jieyuan").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 場次
    let params_jieyuan_field = "<td><input class='table_input params_jieyuan_field' type='text'></td>";

    // 法會開始日
    let params_jieyuan_pujaStart = "<td><input class='table_input input-date params_jieyuan_pujaStart' type='date'></td>";

    // 法會結束日
    let params_jieyuan_pujaEnd = "<td><input class='table_input input-date params_jieyuan_pujaEnd' type='date'></td>";

    // 開始登記日期
    let params_jieyuan_registerStart = " <td><input class='table_input input-date params_jieyuan_registerStart' type='date'></td>";

    // 結束登記日期
    let params_jieyuan_registerEnd = "<td><input class='table_input input-date params_jieyuan_registerEnd' type='date'></td>";

    // 總數
    let params_jieyuan_numTotal = "<td><input class='table_input params_jieyuan_num-total' type='number'></td>";

    // 臨櫃數
    let params_jieyuan_numCounter = "<td><input class='table_input params_jieyuan_num-counter' type='number'></td>";

    // 網路數
    let params_jieyuan_numNet = "<td><input class='table_input params_jieyuan_num-net' type='number'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let jieyuanField_table = $("<tr class='editing'></tr>");
    jieyuanField_table.append(table_num,params_jieyuan_field,params_jieyuan_pujaStart,params_jieyuan_pujaEnd,params_jieyuan_registerStart,params_jieyuan_registerEnd,params_jieyuan_numTotal,params_jieyuan_numCounter,params_jieyuan_numNet,btn_box);
    $(".table-params_jieyuan-field").append(jieyuanField_table);
})

// 編輯
let params_jieyuanField_field, 
    params_jieyuanField_pujaStart, 
    params_jieyuanField_pujaEnd, 
    params_jieyuanField_registerStart, 
    params_jieyuanField_registerEnd,
    params_jieyuan_numTotal,
    params_jieyuan_numCounter,
    params_jieyuan_numNet;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_jieyuan-field")){
        $(this).parents("tr").addClass("editing").removeClass("active");
        params_jieyuanField_field = $(this).parents("tr").find(".params_jieyuan_field").val();
        params_jieyuanField_pujaStart = $(this).parents("tr").find(".params_jieyuan_pujaStart").val();
        params_jieyuanField_pujaEnd = $(this).parents("tr").find(".params_jieyuan_pujaEnd").val();
        params_jieyuanField_registerStart = $(this).parents("tr").find(".params_jieyuan_registerStart").val();
        params_jieyuanField_registerEnd = $(this).parents("tr").find(".params_jieyuan_registerEnd").val();
        params_jieyuan_numTotal = $(this).parents("tr").find(".params_jieyuan_num-total").val();
        params_jieyuan_numCounter = $(this).parents("tr").find(".params_jieyuan_num-counter").val();
        params_jieyuan_numNet = $(this).parents("tr").find(".params_jieyuan_num-net").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_jieyuan-field")){
        if($(this).parents("tr").find(".params_jieyuan_field").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_num-net").val()==""){
            let alert_text="請輸入網路數";
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
    if($(this).parents(".table").hasClass("table-params_jieyuan-field")){
        $(this).parents("tr").removeClass("editing");
        $(this).parents("tr").find(".params_jieyuan_field").val(params_jieyuanField_field);
        $(this).parents("tr").find(".params_jieyuan_pujaStart").val(params_jieyuanField_pujaStart);
        $(this).parents("tr").find(".params_jieyuan_pujaEnd").val(params_jieyuanField_pujaEnd);
        $(this).parents("tr").find(".params_jieyuan_registerStart").val(params_jieyuanField_registerStart);
        $(this).parents("tr").find(".params_jieyuan_registerEnd").val(params_jieyuanField_registerEnd);
        $(this).parents("tr").find(".params_jieyuan_num-total").val(params_jieyuan_numTotal);
        $(this).parents("tr").find(".params_jieyuan_num-counter").val(params_jieyuan_numCounter);
        $(this).parents("tr").find(".params_jieyuan_num-net").val(params_jieyuan_numNet);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_jieyuan-field")){
        if($(this).parents("tr").find(".params_jieyuan_field").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_jieyuan_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").removeClass("editing");
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-jieyuan").attr("disabled",false);
        }
    }
})