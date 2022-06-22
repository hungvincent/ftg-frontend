// 制解-種類

// 新增
$(".btn-add-stopkind").click(function(){
    $(this).attr("disabled",true);

    // 代碼
    let num = $(".table-params_stop-kind").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 制化
    let params_stop_kindname = "<td><input class='table_input params_stop_name' type='text'></td>";

    // 祭品費
    let params_stop_price2 = "<td><input class='table_input params_stop_price2' type='number'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let stopKind_table = $("<tr></tr>");
    stopKind_table.append(table_num,params_stop_kindname, params_stop_price2, btn_box);
    $(".table-params_stop-kind").append(stopKind_table);
})

// 編輯
let params_stopKind_name, 
params_stopKind_price2;

$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_stop-kind")){
        params_stopKind_name = $(this).parents("tr").find(".params_stop_name").val();
        params_stopKind_price2 = $(this).parents("tr").find(".params_stop_price2").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_stop-kind")){
        if($(this).parents("tr").find(".params_stop_name").val()==""){
            let alert_text="請輸入制化";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_price2").val()==""){
            let alert_text="請輸入祭品費";
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
    if($(this).parents(".table").hasClass("table-params_stop-kind")){
        $(this).parents("tr").find(".params_stop_name").val(params_stopKind_name);
        $(this).parents("tr").find(".params_stop_price2").val(params_stopKind_price2);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_stop-kind")){
        if($(this).parents("tr").find(".params_stop_name").val()==""){
            let alert_text="請輸入制化";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_price2").val()==""){
            let alert_text="請輸入祭品費";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-stopkind").attr("disabled",false);
        }
    }
})