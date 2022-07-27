// 新增
$(".btn-add-moneyItem").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let table_num = $("<td class='money_index'></td>");
    $(document).ready(function(){
        $(".money_index").each(function(i){
            let num = i+1;
            $(this).text(num);
        })
    })

    // 種類
    let money_kind = "<td><input class='table_input money_kind' type='text'></td>";

    // 金額
    let money_price = "<td><input class='table_input money_price' type='text'></td>";
    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let money_table = $("<tr></tr>");
    money_table.append(table_num,money_kind,money_price,btn_box);
    money_table.insertAfter(".table-money .table_title");
})

// 編輯
let moneyKind, moneyPrice;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-money")){
        moneyKind = $(this).parents("tr").find(".money_kind").val();
        moneyPrice = $(this).parents("tr").find(".money_price").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-money")){
        if($(this).parents("tr").find(".money_kind").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".money_price").val()==""){
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
    if($(this).parents(".table").hasClass("table-money")){
        $(this).parents("tr").find(".money_kind").val(moneyKind);
        $(this).parents("tr").find(".money_price").val(moneyPrice);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-money")){
        if($(this).parents("tr").find(".money_kind").val()==""){
            let alert_text="請輸入種類";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".money_price").val()==""){
            let alert_text="請輸入金額";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-moneyItem").attr("disabled",false);
        }
    }
})

// 總金額
$(document).ready(function(){
    $(".money_price").change(function(){
        let table_length = $(".table_detail").find("tr").length - 1;
        let total = 0;
        for(let j = 1; j <= table_length ; j++){
            let price = $(".table_detail").find("tr").eq(j).find(".money_price").val();
            total = parseInt(total) + parseInt(price);
        }
        $(".total-price").text(total);
    })
})