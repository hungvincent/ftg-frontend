// 點燈-種類

// 新增
$(".btn-add-wenchankind").click(function(){
    $(this).attr("disabled",true);

    // 代碼
    let num = $(".table-params_wenchan-kind").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 種類
    let params_wenchan_kindname = "<td><input class='table_input params_wenchan_kindname' type='text'></td>";

    // 總數
    let params_wenchan_numTotal = "<td><input class='table_input params_wenchan_num-total' type='number'></td>";

    // 臨櫃數
    let params_wenchan_numCounter = "<td><input class='table_input params_wenchan_num-counter' type='number'></td>";

    // 網路數
    let params_wenchan_numNet = "<td><input class='table_input params_wenchan_num-net' type='number'></td>";

    // 報名費
    let params_wenchan_price = "<td><input class='table_input params_wenchan_price' type='number'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let wenchanKind_table = $("<tr></tr>");
    wenchanKind_table.append(table_num,params_wenchan_kindname,params_wenchan_numTotal,params_wenchan_numCounter,params_wenchan_numNet,params_wenchan_price,btn_box);
    $(".table-params_wenchan-kind").append(wenchanKind_table);
})

// 編輯
let params_wenchanKind_kindname, 
params_wenchanKind_numTotal, 
params_wenchanKind_numCounter, 
params_wenchanKind_numNet, 
params_wenchanKind_price;

$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_wenchan-kind")){
        params_wenchanKind_kindname = $(this).parents("tr").find(".params_wenchan_kindname").val();
        params_wenchanKind_numTotal = $(this).parents("tr").find(".params_wenchan_num-total").val();
        params_wenchanKind_numCounter = $(this).parents("tr").find(".params_wenchan_num-counter").val();
        params_wenchanKind_numNet = $(this).parents("tr").find(".params_wenchan_num-net").val();
        params_wenchanKind_price = $(this).parents("tr").find(".params_wenchan_price").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_wenchan-kind")){
        if($(this).parents("tr").find(".params_wenchan_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_wenchan_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_wenchan_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_wenchan_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_wenchan_price").val()==""){
            let alert_text="請輸入報名費";
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
    if($(this).parents(".table").hasClass("table-params_wenchan-kind")){
        $(this).parents("tr").find(".params_wenchan_kindname").val(params_wenchanKind_kindname);
        $(this).parents("tr").find(".params_wenchan_num-total").val(params_wenchanKind_numTotal);
        $(this).parents("tr").find(".params_wenchan_num-counter").val(params_wenchanKind_numCounter);
        $(this).parents("tr").find(".params_wenchan_num-net").val(params_wenchanKind_numNet);
        $(this).parents("tr").find(".params_wenchan_price").val(params_wenchanKind_price);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_wenchan-kind")){
        if($(this).parents("tr").find(".params_wenchan_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_wenchan_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_wenchan_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_wenchan_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_wenchan_price").val()==""){
            let alert_text="請輸入報名費";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-wenchankind").attr("disabled",false);
        }
    }
})