// 進香-場次

// 新增
$(".btn-add-pilgrimagefield").click(function(){
    $(this).attr("disabled",true);

    // 序號
    let table_num = $("<td class='params_pilgrimageField_index'></td>");
    $(document).ready(function(){
        $(".params_pilgrimageField_index").each(function(i){
            let num = i+1;
            $(this).text(num);
        })
    })

    // 摘要
    let params_pilgrimage_content = "<td><input class='table_input params_pilgrimage_content' type='text'></td>";

    // 法會開始日
    let params_pilgrimage_pujaStart = "<td><input class='table_input input-date params_pilgrimage_pujaStart' type='text'></td>";

    // 法會結束日
    let params_pilgrimage_pujaEnd = "<td><input class='table_input input-date params_pilgrimage_pujaEnd' type='text'></td>";

    // 開始登記日期
    let params_pilgrimage_registerStart = " <td><input class='table_input input-date params_pilgrimage_registerStart' type='text'></td>";

    // 結束登記日期
    let params_pilgrimage_registerEnd = "<td><input class='table_input input-date params_pilgrimage_registerEnd' type='text'></td>";

    // 編輯
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let pilgrimageField_table = $("<tr class='editing'></tr>");
    pilgrimageField_table.append(table_num,params_pilgrimage_content,params_pilgrimage_pujaStart,params_pilgrimage_pujaEnd,params_pilgrimage_registerStart,params_pilgrimage_registerEnd,btn_box);
    pilgrimageField_table.insertAfter(".table-params_pilgrimage-field .table_title");
})

// 編輯
let params_pilgrimageField_content, params_pilgrimageField_pujaStart, params_pilgrimageField_pujaEnd, params_pilgrimageField_registerStart, params_pilgrimageField_registerEnd;
$(document).on("click",".table_edit",function(){
    if($(this).parents(".table").hasClass("table-params_pilgrimage-field")){
        $(this).parents("tr").addClass("editing").removeClass("active");
        params_pilgrimageField_content = $(this).parents("tr").find(".params_pilgrimage_content").val();
        params_pilgrimageField_pujaStart = $(this).parents("tr").find(".params_pilgrimage_pujaStart").val();
        params_pilgrimageField_pujaEnd = $(this).parents("tr").find(".params_pilgrimage_pujaEnd").val();
        params_pilgrimageField_registerStart = $(this).parents("tr").find(".params_pilgrimage_registerStart").val();
        params_pilgrimageField_registerEnd = $(this).parents("tr").find(".params_pilgrimage_registerEnd").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-params_pilgrimage-field")){
        if($(this).parents("tr").find(".params_pilgrimage_content").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_pilgrimage_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_pilgrimage_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_pilgrimage_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_pilgrimage_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
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
    if($(this).parents(".table").hasClass("table-params_pilgrimage-field")){
        $(this).parents("tr").removeClass("editing");
        $(this).parents("tr").find(".params_pilgrimage_content").val(params_pilgrimageField_content);
        $(this).parents("tr").find(".params_pilgrimage_pujaStart").val(params_pilgrimageField_pujaStart);
        $(this).parents("tr").find(".params_pilgrimage_pujaEnd").val(params_pilgrimageField_pujaEnd);
        $(this).parents("tr").find(".params_pilgrimage_registerStart").val(params_pilgrimageField_registerStart);
        $(this).parents("tr").find(".params_pilgrimage_registerEnd").val(params_pilgrimageField_registerEnd);
    }
})

// 確定新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-params_pilgrimage-field")){
        if($(this).parents("tr").find(".params_pilgrimage_content").val()==""){
            let alert_text="請輸入場次";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_pilgrimage_pujaStart").val()==""){
            let alert_text="請輸入法會開始日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_pilgrimage_pujaEnd").val()==""){
            let alert_text="請輸入法會結束日";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_pilgrimage_registerStart").val()==""){
            let alert_text="請輸入開始登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".params_pilgrimage_registerEnd").val()==""){
            let alert_text="請輸入結束登記日期";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").removeClass("editing");
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-pilgrimagefield").attr("disabled",false);
        }
    }
})