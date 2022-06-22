// 點燈-種類

// 新增
$(".btn-add-chaoduekind").click(function(){
    $(this).attr("disabled",true);

    // 代碼
    let num = $(".table-params_chaodue-kind").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 種類
    let params_chaodue_kindname = "<td><input class='table_input params_chaodue_kindname' type='text'></td>";

    // 數量
    let params_chaodue_num = "<td><div class='d-flex input-num'><div class='params_chaodue_num me-2'><label>總數</label><input class='table_input params_chaodue_num-total' type='number'></div><div class='params_chaodue_num me-2'><label>臨櫃數</label><input class='table_input params_chaodue_num-counter' type='number'></div><div class='params_chaodue_num me-2'><label>網路數</label><input class='table_input params_chaodue_num-net' type='number'></div></div></td>";

    // 金額
    let params_chaodue_price = "<td><input class='table_input params_chaodue_price' type='number'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let chaodueKind_table = $("<tr></tr>");
    chaodueKind_table.append(table_num,params_chaodue_kindname,params_chaodue_num,params_chaodue_price,btn_box);
    $(".table-params_chaodue-kind").append(chaodueKind_table);
})

// 編輯
let params_chaodueKind_kindname, 
params_chaodueKind_numTotal, 
params_chaodueKind_numCounter, 
params_chaodueKind_numNet, 
params_chaodueKind_price;

$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_chaodue-kind")){
        params_chaodueKind_kindname = $(this).parents("tr").find(".params_chaodue_kindname").val();
        params_chaodueKind_numTotal = $(this).parents("tr").find(".params_chaodue_num-total").val();
        params_chaodueKind_numCounter = $(this).parents("tr").find(".params_chaodue_num-counter").val();
        params_chaodueKind_numNet = $(this).parents("tr").find(".params_chaodue_num-net").val();
        params_chaodueKind_price = $(this).parents("tr").find(".params_chaodue_price").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_chaodue-kind")){
        if($(this).parents("tr").find(".params_chaodue_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_chaodue_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_chaodue_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_chaodue_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_chaodue_price").val()==""){
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
    if($(this).parents(".table").hasClass("table-params_chaodue-kind")){
        $(this).parents("tr").find(".params_chaodue_kindname").val(params_chaodueKind_kindname);
        $(this).parents("tr").find(".params_chaodue_num-total").val(params_chaodueKind_numTotal);
        $(this).parents("tr").find(".params_chaodue_num-counter").val(params_chaodueKind_numCounter);
        $(this).parents("tr").find(".params_chaodue_num-net").val(params_chaodueKind_numNet);
        $(this).parents("tr").find(".params_chaodue_price").val(params_chaodueKind_price);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_chaodue-kind")){
        if($(this).parents("tr").find(".params_chaodue_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_chaodue_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_chaodue_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_chaodue_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_chaodue_price").val()==""){
            let alert_text="請輸入金額";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-chaoduekind").attr("disabled",false);
        }
    }
})