// 補財庫-種類

// 新增
$(".btn-add-bucaikukind").click(function(){
    $(this).attr("disabled",true);

    // 代碼
    let table_num = $("<td class='params_bucaikuKind_index'></td>");
    $(document).ready(function(){
        $(".params_bucaikuKind_index").each(function(i){
            let num = i+1;
            $(this).text(num);
        })
    })

    // 歲次
    let params_bucaiku_kindname = "<td><input class='table_input params_bucaiku_age' type='text'></td>";

    // 金額
    let params_bucaiku_price = "<td><input class='table_input params_bucaiku_price' type='number'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let bucaikuKind_table = $("<tr></tr>");
    bucaikuKind_table.append(table_num,params_bucaiku_kindname,params_bucaiku_price,btn_box);
    bucaikuKind_table.insertAfter(".table-params_bucaiku-kind .table_title");
})

// 編輯
let params_bucaikuKind_age, 
params_bucaikuKind_price;

$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_bucaiku-kind")){
        params_bucaikuKind_age = $(this).parents("tr").find(".params_bucaiku_age").val();
        params_bucaikuKind_price = $(this).parents("tr").find(".params_bucaiku_price").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_bucaiku-kind")){
        if($(this).parents("tr").find(".params_bucaiku_age").val()==""){
            let alert_text="請輸入歲次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_price").val()==""){
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
    if($(this).parents(".table").hasClass("table-params_bucaiku-kind")){
        $(this).parents("tr").find(".params_bucaiku_age").val(params_bucaikuKind_age);
        $(this).parents("tr").find(".params_bucaiku_price").val(params_bucaikuKind_price);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_bucaiku-kind")){
        if($(this).parents("tr").find(".params_bucaiku_age").val()==""){
            let alert_text="請輸入歲次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_price").val()==""){
            let alert_text="請輸入金額";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-bucaikukind").attr("disabled",false);
        }
    }
})

// 取消新增
// $(document).on("click",".table_cancel",function(){
//     if($(this).parents(".table").hasClass("table-params_bucaiku-kind")){
//         $(".btn-add-bucaikukind").attr("disabled",false);
//     }
// })