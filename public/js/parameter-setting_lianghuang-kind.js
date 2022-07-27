// 梁皇寶懺-種類

// 新增
$(".btn-add-lianghuangkind").click(function(){
    $(this).attr("disabled",true);

    // 代碼
    let table_num = $("<td class='params_lianghuangKind_index'></td>");
    $(document).ready(function(){
        $(".params_lianghuangKind_index").each(function(i){
            let num = i+1;
            $(this).text(num);
        })
    })

    // 種類
    let params_lianghuang_kindname = "<td><input class='table_input params_lianghuang_kindname' type='text'></td>";

    // 總數
    let params_lianghuang_numTotal = "<td><input class='table_input params_lianghuang_num-total' type='number'></td>";

    // 臨櫃數
    let params_lianghuang_numCounter = "<td><input class='table_input params_lianghuang_num-counter' type='number'></td>";

    // 網路數
    let params_lianghuang_numNet = "<td><input class='table_input params_lianghuang_num-net' type='number'></td>";

    // 金額
    let params_lianghuang_price = "<td><input class='table_input params_lianghuang_price' type='number'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let lianghuangKind_table = $("<tr></tr>");
    lianghuangKind_table.append(table_num,params_lianghuang_kindname,params_lianghuang_numTotal,params_lianghuang_numCounter,params_lianghuang_numNet,params_lianghuang_price,btn_box);
    lianghuangKind_table.insertAfter(".table-params_lianghuang-kind .table_title");
})

// 編輯
let params_lianghuangKind_kindname, 
params_lianghuangKind_numTotal, 
params_lianghuangKind_numCounter, 
params_lianghuangKind_numNet, 
params_lianghuangKind_price;

$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_lianghuang-kind")){
        params_lianghuangKind_kindname = $(this).parents("tr").find(".params_lianghuang_kindname").val();
        params_lianghuangKind_numTotal = $(this).parents("tr").find(".params_lianghuang_num-total").val();
        params_lianghuangKind_numCounter = $(this).parents("tr").find(".params_lianghuang_num-counter").val();
        params_lianghuangKind_numNet = $(this).parents("tr").find(".params_lianghuang_num-net").val();
        params_lianghuangKind_price = $(this).parents("tr").find(".params_lianghuang_price").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_lianghuang-kind")){
        if($(this).parents("tr").find(".params_lianghuang_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_price").val()==""){
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
    if($(this).parents(".table").hasClass("table-params_lianghuang-kind")){
        $(this).parents("tr").find(".params_lianghuang_kindname").val(params_lianghuangKind_kindname);
        $(this).parents("tr").find(".params_lianghuang_num-total").val(params_lianghuangKind_numTotal);
        $(this).parents("tr").find(".params_lianghuang_num-counter").val(params_lianghuangKind_numCounter);
        $(this).parents("tr").find(".params_lianghuang_num-net").val(params_lianghuangKind_numNet);
        $(this).parents("tr").find(".params_lianghuang_price").val(params_lianghuangKind_price);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_lianghuang-kind")){
        if($(this).parents("tr").find(".params_lianghuang_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_lianghuang_price").val()==""){
            let alert_text="請輸入金額";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-lianghuangkind").attr("disabled",false);
        }
    }
})