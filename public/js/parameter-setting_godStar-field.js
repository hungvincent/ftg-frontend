// 玉皇上帝禮斗-場次

// 新增
$(".btn-add-godStarfield").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let num = $(".table-params_godStar-field").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 摘要
    let params_godStar_content = "<td><input class='table_input params_godStar_content' type='text'></td>";

    // 法會開始日
    let params_godStar_pujaStart = "<td><input class='table_input params_godStar_pujaStart' type='date'></td>";

    // 法會結束日
    let params_godStar_pujaEnd = "<td><input class='table_input params_godStar_pujaEnd' type='date'></td>";

    // 開始登記日期
    let params_godStar_registerStart = " <td><input class='table_input params_godStar_registerStart' type='date'></td>";

    // 結束登記日期
    let params_godStar_registerEnd = "<td><input class='table_input params_godStar_registerEnd' type='date'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let godStarField_table = $("<tr></tr>");
    godStarField_table.append(table_num,params_godStar_content,params_godStar_pujaStart,params_godStar_pujaEnd,params_godStar_registerStart,params_godStar_registerEnd,btn_box);
    $(".table-params_godStar-field").append(godStarField_table);
})

// 編輯
let params_godStarField_content, params_godStarField_pujaStart, params_godStarField_pujaEnd, params_godStarField_registerStart, params_godStarField_registerEnd;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_godStar-field")){
        params_godStarField_content = $(this).parents("tr").find(".params_godStar_content").val();
        params_godStarField_pujaStart = $(this).parents("tr").find(".params_godStar_pujaStart").val();
        params_godStarField_pujaEnd = $(this).parents("tr").find(".params_godStar_pujaEnd").val();
        params_godStarField_registerStart = $(this).parents("tr").find(".params_godStar_registerStart").val();
        params_godStarField_registerEnd = $(this).parents("tr").find(".params_godStar_registerEnd").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_godStar-field")){
        if($(this).parents("tr").find(".params_godStar_content").val()==""){
            let alert_text="請輸入摘要";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_registerEnd").val()==""){
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
    if($(this).parents(".table").hasClass("table-params_godStar-field")){
        $(this).parents("tr").find(".params_godStar_content").val(params_godStarField_content);
        $(this).parents("tr").find(".params_godStar_pujaStart").val(params_godStarField_pujaStart);
        $(this).parents("tr").find(".params_godStar_pujaEnd").val(params_godStarField_pujaEnd);
        $(this).parents("tr").find(".params_godStar_registerStart").val(params_godStarField_registerStart);
        $(this).parents("tr").find(".params_godStar_registerEnd").val(params_godStarField_registerEnd);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_godStar-field")){
        if($(this).parents("tr").find(".params_godStar_content").val()==""){
            let alert_text="請輸入摘要";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-godStarfield").attr("disabled",false);
        }
    }
})