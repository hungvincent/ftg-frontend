// 玉皇上帝禮斗-種類

// 新增
$(".btn-add-godStarkind").click(function(){
    $(this).attr("disabled",true);

    // 代碼
    let table_num = $("<td class='params_godStarKind_index'></td>");
    $(document).ready(function(){
        $(".params_godStarKind_index").each(function(j){
            let num = j+1;
            $(this).text(num);
        })
    })

    // 種類
    let params_godStar_kindname = "<td><input class='table_input params_godStar_kindname' type='text'></td>";

    // 總數
    let params_godStar_numTotal = "<td><input class='table_input params_godStar_num-total' type='number'></td>";

    // 臨櫃數
    let params_godStar_numCounter = "<td><input class='table_input params_godStar_num-counter' type='number'></td>";

    // 網路數
    let params_godStar_numNet = "<td><input class='table_input params_godStar_num-net' type='number'></td>";

    // 金額
    let params_godStar_price = "<td><input class='table_input params_godStar_price' type='number'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let godStarKind_table = $("<tr></tr>");
    godStarKind_table.append(table_num,params_godStar_kindname,params_godStar_numTotal,params_godStar_numCounter,params_godStar_numNet,params_godStar_price,btn_box);
    godStarKind_table.insertAfter(".table-params_godStar-kind .table_title");
})

// 編輯
let params_godStarKind_kindname, 
params_godStarKind_numTotal, 
params_godStarKind_numCounter, 
params_godStarKind_numNet, 
params_godStarKind_price;

$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_godStar-kind")){
        params_godStarKind_kindname = $(this).parents("tr").find(".params_godStar_kindname").val();
        params_godStarKind_numTotal = $(this).parents("tr").find(".params_godStar_num-total").val();
        params_godStarKind_numCounter = $(this).parents("tr").find(".params_godStar_num-counter").val();
        params_godStarKind_numNet = $(this).parents("tr").find(".params_godStar_num-net").val();
        params_godStarKind_price = $(this).parents("tr").find(".params_godStar_price").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_godStar-kind")){
        if($(this).parents("tr").find(".params_godStar_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_price").val()==""){
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
    if($(this).parents(".table").hasClass("table-params_godStar-kind")){
        $(this).parents("tr").find(".params_godStar_kindname").val(params_godStarKind_kindname);
        $(this).parents("tr").find(".params_godStar_num-total").val(params_godStarKind_numTotal);
        $(this).parents("tr").find(".params_godStar_num-counter").val(params_godStarKind_numCounter);
        $(this).parents("tr").find(".params_godStar_num-net").val(params_godStarKind_numNet);
        $(this).parents("tr").find(".params_godStar_price").val(params_godStarKind_price);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_godStar-kind")){
        if($(this).parents("tr").find(".params_godStar_kindname").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_godStar_price").val()==""){
            let alert_text="請輸入金額";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-godStarkind").attr("disabled",false);
        }
    }
})