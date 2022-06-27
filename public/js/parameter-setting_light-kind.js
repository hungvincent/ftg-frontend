// 點燈-種類

// 新增
$(".btn-add-lightkind").click(function(){
    $(this).attr("disabled",true);

    // 代碼
    let num = $(".table-params_light-kind").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 種類
    let params_light_kindname = "<td><input class='table_input params_light_kindname' type='text'></td>";

    // 總數
    let params_light_numTotal = "<td><input class='table_input params_light_num-total' type='number'></td>";

    // 臨櫃數
    let params_light_numCounter = "<td><input class='table_input params_light_num-counter' type='number'></td>";

    // 網路數
    let params_light_numNet = "<td><input class='table_input params_light_num-net' type='number'></td>";

    // 金額
    let params_light_price = "<td><input class='table_input params_light_price' type='number'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let lightKind_table = $("<tr></tr>");
    lightKind_table.append(table_num,params_light_kindname,params_light_numTotal,params_light_numCounter,params_light_numNet,params_light_price,btn_box);
    $(".table-params_light-kind").append(lightKind_table);
})

// 編輯
let params_lightKind_kindname, 
params_lightKind_numTotal, 
params_lightKind_numCounter, 
params_lightKind_numNet, 
params_lightKind_price;

$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_light-kind")){
        params_lightKind_kindname = $(this).parents("tr").find(".params_light_kindname").val();
        params_lightKind_numTotal = $(this).parents("tr").find(".params_light_num-total").val();
        params_lightKind_numCounter = $(this).parents("tr").find(".params_light_num-counter").val();
        params_lightKind_numNet = $(this).parents("tr").find(".params_light_num-net").val();
        params_lightKind_price = $(this).parents("tr").find(".params_light_price").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_light-kind")){
        if($(this).parents("tr").find(".params_light_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_price").val()==""){
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
    if($(this).parents(".table").hasClass("table-params_light-kind")){
        $(this).parents("tr").find(".params_light_kindname").val(params_lightKind_kindname);
        $(this).parents("tr").find(".params_light_num-total").val(params_lightKind_numTotal);
        $(this).parents("tr").find(".params_light_num-counter").val(params_lightKind_numCounter);
        $(this).parents("tr").find(".params_light_num-net").val(params_lightKind_numNet);
        $(this).parents("tr").find(".params_light_price").val(params_lightKind_price);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_light-kind")){
        if($(this).parents("tr").find(".params_light_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_light_price").val()==""){
            let alert_text="請輸入金額";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-lightkind").attr("disabled",false);
        }
    }
})