// 補財庫-場次

// 新增
$(".btn-add-bucaikufield").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let table_num = $("<td class='params_bucaikuField_index'></td>");
    $(document).ready(function(){
        $(".params_bucaikuField_index").each(function(i){
            let num = i+1;
            $(this).text(num);
        })
    })

    // 場次
    let params_bucaiku_field = "<td><input class='table_input params_bucaiku_field' type='text'></td>";

    // 法會開始日
    let params_bucaiku_pujaStart = "<td><input class='table_input input-date params_bucaiku_pujaStart' type='text'></td>";

    // 法會結束日
    let params_bucaiku_pujaEnd = "<td><input class='table_input input-date params_bucaiku_pujaEnd' type='text'></td>";

    // 開始登記日期
    let params_bucaiku_registerStart = " <td><input class='table_input input-date params_bucaiku_registerStart' type='text'></td>";

    // 結束登記日期
    let params_bucaiku_registerEnd = "<td><input class='table_input input-date params_bucaiku_registerEnd' type='text'></td>";

    // 總數
    let params_bucaiku_numTotal = "<td><input class='table_input params_bucaiku_num-total' type='number'></td>";

    // 臨櫃數
    let params_bucaiku_numCounter = "<td><input class='table_input params_bucaiku_num-counter' type='number'></td>";

    // 網路數
    let params_bucaiku_numNet = "<td><input class='table_input params_bucaiku_num-net' type='number'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let bucaikuField_table = $("<tr class='editing'></tr>");
    bucaikuField_table.append(table_num,params_bucaiku_field,params_bucaiku_pujaStart,params_bucaiku_pujaEnd,params_bucaiku_registerStart,params_bucaiku_registerEnd,params_bucaiku_numTotal,params_bucaiku_numCounter,params_bucaiku_numNet,btn_box);
    bucaikuField_table.insertAfter(".table-params_bucaiku-field .table_title");
})

// 編輯
let params_bucaikuField_field, 
    params_bucaikuField_pujaStart, 
    params_bucaikuField_pujaEnd, 
    params_bucaikuField_registerStart, 
    params_bucaikuField_registerEnd,
    params_bucaiku_numTotal,
    params_bucaiku_numCounter,
    params_bucaiku_numNet;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_bucaiku-field")){
        $(this).parents("tr").addClass("editing").removeClass("active");
        params_bucaikuField_field = $(this).parents("tr").find(".params_bucaiku_field").val();
        params_bucaikuField_pujaStart = $(this).parents("tr").find(".params_bucaiku_pujaStart").val();
        params_bucaikuField_pujaEnd = $(this).parents("tr").find(".params_bucaiku_pujaEnd").val();
        params_bucaikuField_registerStart = $(this).parents("tr").find(".params_bucaiku_registerStart").val();
        params_bucaikuField_registerEnd = $(this).parents("tr").find(".params_bucaiku_registerEnd").val();
        params_bucaiku_numTotal = $(this).parents("tr").find(".params_bucaiku_num-total").val();
        params_bucaiku_numCounter = $(this).parents("tr").find(".params_bucaiku_num-counter").val();
        params_bucaiku_numNet = $(this).parents("tr").find(".params_bucaiku_num-net").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_bucaiku-field")){
        if($(this).parents("tr").find(".params_bucaiku_field").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_num-net").val()==""){
            let alert_text="請輸入網路數";
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
    if($(this).parents(".table").hasClass("table-params_bucaiku-field")){
        $(this).parents("tr").removeClass("editing");
        $(this).parents("tr").find(".params_bucaiku_field").val(params_bucaikuField_field);
        $(this).parents("tr").find(".params_bucaiku_pujaStart").val(params_bucaikuField_pujaStart);
        $(this).parents("tr").find(".params_bucaiku_pujaEnd").val(params_bucaikuField_pujaEnd);
        $(this).parents("tr").find(".params_bucaiku_registerStart").val(params_bucaikuField_registerStart);
        $(this).parents("tr").find(".params_bucaiku_registerEnd").val(params_bucaikuField_registerEnd);
        $(this).parents("tr").find(".params_bucaiku_num-total").val(params_bucaiku_numTotal);
        $(this).parents("tr").find(".params_bucaiku_num-counter").val(params_bucaiku_numCounter);
        $(this).parents("tr").find(".params_bucaiku_num-net").val(params_bucaiku_numNet);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_bucaiku-field")){
        if($(this).parents("tr").find(".params_bucaiku_field").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_num-total").val()==""){
            let alert_text="請輸入總數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_num-counter").val()==""){
            let alert_text="請輸入臨櫃數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_bucaiku_num-net").val()==""){
            let alert_text="請輸入網路數";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").removeClass("editing");
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-bucaikufield").attr("disabled",false);
        }
    }
})