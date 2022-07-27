// 物品捐獻-場次

// 新增
$(".btn-add-donateItems").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let table_num = $("<td class='params_donateItems_index'></td>");
    $(document).ready(function(){
        $(".params_donateItems_index").each(function(i){
            let num = i+1;
            $(this).text(num);
        })
    })

    // 種類
    let params_donateItems_kind = "<td><input class='table_input params_donateItems_kind' type='text'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let donateItemsField_table = $("<tr></tr>");
    donateItemsField_table.append(table_num,params_donateItems_kind,btn_box);
    donateItemsField_table.insertAfter(".table-params_donateItems .table_title");
})

// 編輯
let params_donateItemsField_kind;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_donateItems")){
        params_donateItemsField_kind = $(this).parents("tr").find(".params_donateItems_kind").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_donateItems")){
        if($(this).parents("tr").find(".params_donateItems_kind").val()==""){
            let alert_text="請輸入種類";
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
    if($(this).parents(".table").hasClass("table-params_donateItems")){
        $(this).parents("tr").find(".params_donateItems_kind").val(params_donateItemsField_kind);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_donateItems")){
        if($(this).parents("tr").find(".params_donateItems_kind").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-donateItems").attr("disabled",false);
        }
    }
})