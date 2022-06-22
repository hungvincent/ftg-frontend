// 建設
// 編輯
// 建設變數
let params_construction_summary,params_construction_num,params_construction_price,params_construction_startdate,params_construction_enddate;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_construction")){
        params_construction_summary = $(this).parents("tr").find(".params_construction_summary").val();
        params_construction_num = $(this).parents("tr").find(".params_construction_num").val();
        params_construction_price = $(this).parents("tr").find(".params_construction_price").val();
        params_construction_startdate = $(this).parents("tr").find(".params_construction_startdate").val();
        params_construction_enddate = $(this).parents("tr").find(".params_construction_enddate").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_construction")){
        if($(this).parents("tr").find(".params_construction_summary").val()==""){
            let alert_text="請輸入摘要";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_construction_num").val()==""){
            let alert_text="請輸入可報名人數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_construction_price").val()==""){
            let alert_text="請輸入預設金額";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_construction_startdate").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_construction_enddate").val()==""){
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
    if($(this).parents(".table").hasClass("table-params_construction")){
        $(this).parents("tr").find(".params_construction_summary").val( params_construction_summary);
        $(this).parents("tr").find(".params_construction_num").val(params_construction_num);
        $(this).parents("tr").find(".params_construction_price").val(params_construction_price);
        $(this).parents("tr").find(".params_construction_startdate").val(params_construction_startdate);
        $(this).parents("tr").find(".params_construction_enddate").val(params_construction_enddate);
    }
})

// 建設 - 新增
$(".btn-add-constructionkind").click(function(){
    console.log("###");
    $(this).attr("disabled",true);

    // 序號
    let num = $(".table-params_construction").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 摘要
    let params_construction_summary = "<td><input class='table_input params_construction_summary' type='text'></td>";

    // 可報名人數
    let params_construction_num = "<td><input class='table_input params_construction_num' type='number'></td>";

    // 預設金額
    let params_construction_price = "<td><input class='table_input params_construction_price' type='number'></td>";

    // 開始登記日期
    let params_construction_startdate = " <td><input class='table_input params_construction_startdate' type='date'></td>";

    // 結束登記日期
    let params_construction_enddate = "<td><input class='table_input params_construction_enddate' type='date'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let construction_table = $("<tr></tr>");
    construction_table.append(table_num,params_construction_summary,params_construction_num,params_construction_price,params_construction_startdate,params_construction_enddate,btn_box);
    $(".table-params_construction").append(construction_table);
})

// 新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_construction")){
        if($(this).parents("tr").find(".params_construction_summary").val()==""){
            let alert_text="請輸入摘要";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_construction_num").val()==""){
            let alert_text="請輸入可報名人數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_construction_price").val()==""){
            let alert_text="請輸入預設金額";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_construction_startdate").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_construction_enddate").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-constructionkind").attr("disabled",false);
        }
    }
})