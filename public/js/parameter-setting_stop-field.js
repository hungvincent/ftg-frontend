// 制解-場次

// 新增
$(".btn-add-stopfield").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let table_num = $("<td class='params_stopField_index'></td>");
    $(document).ready(function(){
        $(".params_stopField_index").each(function(i){
            let num = i+1;
            $(this).text(num);
        })
    })

    // 場次
    let params_stop_fieldnum = "<td><input class='table_input params_stop_fieldnum' type='text'></td>";

    // 法會開始日
    let params_stop_pujaStart = "<td><input class='table_input input-date params_stop_pujaStart' type='date'></td>";

    // 法會結束日
    let params_stop_pujaEnd = "<td><input class='table_input input-date params_stop_pujaEnd' type='date'></td>";

    // 開始登記日期
    let params_stop_registerStart = " <td><input class='table_input input-date params_stop_registerStart' type='date'></td>";

    // 結束登記日期
    let params_stop_registerEnd = "<td><input class='table_input input-date params_stop_registerEnd' type='date'></td>";

    // 總數
    let params_stop_numTotal = "<td><input class='table_input params_stop_num-total' type='number'></td>";

    // 臨櫃數
    let params_stop_numCounter = "<td><input class='table_input params_stop_num-counter' type='number'></td>";

    // 網路數
    let params_stop_numNet = "<td><input class='table_input params_stop_num-net' type='number'></td>";

    // 戶報名費
    let params_stop_price = "<td><input class='table_input params_stop_price' type='number'></td>"

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let stopField_table = $("<tr class='editing'></tr>");
    stopField_table.append(table_num, params_stop_fieldnum, params_stop_pujaStart, params_stop_pujaEnd, params_stop_registerStart,params_stop_registerEnd, params_stop_numTotal, params_stop_numCounter, params_stop_numNet , params_stop_price,btn_box );
    stopField_table.insertAfter(".table-params_stop-field .table_title");
})

// 編輯
let params_stopField_fieldnum, params_stopField_pujaStart, params_stopField_pujaEnd, params_stopField_registerStart, params_stopField_registerEnd, params_stopField_numTotal, params_stopField_numCounter, params_stopField_numNet, params_stopField_price;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_stop-field")){
        $(this).parents("tr").addClass("editing").removeClass("active");
        params_stopField_fieldnum = $(this).parents("tr").find(".params_stop_fieldnum").val();
        params_stopField_pujaStart = $(this).parents("tr").find(".params_stop_pujaStart").val();
        params_stopField_pujaEnd = $(this).parents("tr").find(".params_stop_pujaEnd").val();
        params_stopField_registerStart = $(this).parents("tr").find(".params_stop_registerStart").val();
        params_stopField_registerEnd = $(this).parents("tr").find(".params_stop_registerEnd").val();
        params_stopField_numTotal = $(this).parents("tr").find(".params_stop_num-total").val();
        params_stopField_numCounter = $(this).parents("tr").find(".params_stop_num-counter").val();
        params_stopField_numNet = $(this).parents("tr").find(".params_stop_num-net").val();
        params_stopField_price = $(this).parents("tr").find(".params_stop_price").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_stop-field")){
        if($(this).parents("tr").find(".params_stop_fieldnum").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_price").val()==""){
            let alert_text="請輸入戶報名費";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").removeClass("editing");
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
    if($(this).parents(".table").hasClass("table-params_stop-field")){
        $(this).parents("tr").removeClass("editing");
        $(this).parents("tr").find(".params_stop_fieldnum").val(params_stopField_fieldnum);
        $(this).parents("tr").find(".params_stop_pujaStart").val(params_stopField_pujaStart);
        $(this).parents("tr").find(".params_stop_pujaEnd").val(params_stopField_pujaEnd);
        $(this).parents("tr").find(".params_stop_registerStart").val(params_stopField_registerStart);
        $(this).parents("tr").find(".params_stop_registerEnd").val(params_stopField_registerEnd);
        $(this).parents("tr").find(".params_stop_num-total").val(params_stopField_numTotal);
        $(this).parents("tr").find(".params_stop_num-counter").val(params_stopField_numCounter);
        $(this).parents("tr").find(".params_stop_num-net").val(params_stopField_numNet);
        $(this).parents("tr").find(".params_stop_price").val(params_stopField_price);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_stop-field")){
        if($(this).parents("tr").find(".params_stop_fieldnum").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_stop_price").val()==""){
            let alert_text="請輸入戶報名費";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").removeClass("editing");
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-stopfield").attr("disabled",false);
        }
    }
})