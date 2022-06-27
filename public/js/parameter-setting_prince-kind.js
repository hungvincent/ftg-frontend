// 五年千歲禮斗-種類

// 新增
$(".btn-add-princekind").click(function(){
    $(this).attr("disabled",true);

    // 代碼
    let num = $(".table-params_prince-kind").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 種類
    let params_prince_kindname = "<td><input class='table_input params_prince_kindname' type='text'></td>";

    // 總數
    let params_prince_numTotal = "<td><input class='table_input params_prince_num-total' type='number'></td>";

    // 臨櫃數
    let params_prince_numCounter = "<td><input class='table_input params_prince_num-counter' type='number'></td>";

    // 網路數
    let params_prince_numNet = "<td><input class='table_input params_prince_num-net' type='number'></td>";

    // 金額
    let params_prince_price = "<td><input class='table_input params_prince_price' type='number'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let princeKind_table = $("<tr></tr>");
    princeKind_table.append(table_num,params_prince_kindname,params_prince_numTotal,params_prince_numCounter,params_prince_numNet,params_prince_price,btn_box);
    $(".table-params_prince-kind").append(princeKind_table);
})

// 編輯
let params_princeKind_kindname, 
params_princeKind_numTotal, 
params_princeKind_numCounter, 
params_princeKind_numNet, 
params_princeKind_price;

$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_prince-kind")){
        params_princeKind_kindname = $(this).parents("tr").find(".params_prince_kindname").val();
        params_princeKind_numTotal = $(this).parents("tr").find(".params_prince_num-total").val();
        params_princeKind_numCounter = $(this).parents("tr").find(".params_prince_num-counter").val();
        params_princeKind_numNet = $(this).parents("tr").find(".params_prince_num-net").val();
        params_princeKind_price = $(this).parents("tr").find(".params_prince_price").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_prince-kind")){
        if($(this).parents("tr").find(".params_prince_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_price").val()==""){
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
    if($(this).parents(".table").hasClass("table-params_prince-kind")){
        $(this).parents("tr").find(".params_prince_kindname").val(params_princeKind_kindname);
        $(this).parents("tr").find(".params_prince_num-total").val(params_princeKind_numTotal);
        $(this).parents("tr").find(".params_prince_num-counter").val(params_princeKind_numCounter);
        $(this).parents("tr").find(".params_prince_num-net").val(params_princeKind_numNet);
        $(this).parents("tr").find(".params_prince_price").val(params_princeKind_price);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_prince-kind")){
        if($(this).parents("tr").find(".params_prince_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_prince_price").val()==""){
            let alert_text="請輸入金額";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-princekind").attr("disabled",false);
        }
    }
})