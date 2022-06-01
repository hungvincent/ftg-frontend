// 時間
function startTime(){
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);

    document.getElementById('header_time').innerHTML = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minute + ":" + second;
    let timeoutId = setTimeout(startTime, 1000);
}

function checkTime(i){
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}

// 打勾
$(document).on("click",".check",function(){
    if($(this).hasClass("valid")){
        $(this).toggleClass("active");
    }
})

// 權限設定 - 新增
$(".btn-add-account").click(function(){
    $(this).attr("disabled",true);

     // 序號
    let num = $(".table-permission").find("tr").length;
    let table_num = $("<td></td>");
    table_num.append(num);

    // 帳號
    let table_account = "<td><input class='table_input permission_account' type='text'></td>";

    // 密碼
    let table_password = "<td><input class='table_input permission_password' type='text'></td>";

    // 前台作業
    let front_working = "<td><div class='check valid'><img src='./public/img/icon_check.svg'></div></td>";

    // 香客大樓
    let building = " <td><div class='check valid'><img src='./public/img/icon_check.svg'></div></td>";

     // 結緣品
     let befriend = " <td><div class='check valid'><img src='./public/img/icon_check.svg'></div></td>";

     // 參數設定
     let data_setting = " <td><div class='check valid'><img src='./public/img/icon_check.svg'></div></td>";

     // 賽錢箱
     let money_box = " <td><div class='check valid'><img src='./public/img/icon_check.svg'></div></td>";

     // 報表列印
     let form_print = " <td><div class='check valid'><img src='./public/img/icon_check.svg'></div></td>";

    // 查詢系統
    let search_system = " <td><div class='check valid'><img src='./public/img/icon_check.svg'></div></td>";

    // 線上服務
    let online_service = " <td><div class='check valid'><img src='./public/img/icon_check.svg'></div></td>";

    // 建立日期
    let add_time = $("<td class='table_add-date'></td>");

    // 修改日期
    let edit_date = $("<td class='table_edit-date'></td>");

    // 啟用
    let start = " <td><div class='check valid'><img src='./public/img/icon_check.svg'></div></td>";

    // 功能
    let btn_box = "<td><button class='btn-third btn-small me-2 table_edit d-none'>編輯</button><button class='btn-border btn-small table_delete d-none' data-bs-toggle='modal' data-bs-target='#deleteComfirm'>刪除</button><button class='btn-third btn-small btn-change table_change d-none me-2'>確定變更</button><button class='btn-border btn-small table_change-cancel d-none'>取消</button><button class='btn-third btn-small btn-add table_add me-2'>確定新增</button><button class='btn-border btn-small btn-add table_cancel d-inline-block'>取消</button></td>";

    let account_table = $("<tr></tr>");
    account_table.append(table_num,table_account,table_password,front_working,building,befriend,data_setting,money_box,form_print,search_system,online_service,add_time,edit_date,start,btn_box);
    $(".table-permission").append(account_table);
})

// 編輯
let permission_account,permission_password;
$(document).on("click",".table_edit",function(){
    $(this).parents("tr").find(".table_input").attr("disabled",false);
    $(this).addClass("d-none").removeClass("d-inline-block");
    $(this).parents("td").find(".table_delete").addClass("d-none").removeClass("d-inline-block");
    $(this).parents("td").find(".table_change").addClass("d-inline-block").removeClass("d-none");
    $(this).parents("td").find(".table_change-cancel").addClass("d-inline-block").removeClass("d-none");
    $(this).parents("tr").find(".check").addClass("valid");
    if($(this).parents(".table").hasClass("table-permission")){
        permission_account = $(this).parents("tr").find(".permission_account").val();
        permission_password = $(this).parents("tr").find(".permission_password").val();
    }
})

// 變更
$(document).on("click",".table_change",function(){
    if($(this).parents(".table").hasClass("table-permission")){
        if($(this).parents("tr").find(".permission_account").val()==""){
            let alert_text="請輸入帳號";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".permission_password").val()==""){
            let alert_text="請輸入密碼";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_change-cancel").addClass("d-none").removeClass("d-inline-block");
            $(this).parents("tr").find(".check").removeClass("valid");
            let change_time = $(this).parents("tr").find(".table_edit-date");
            let change_today = new Date();
            let change_year = change_today.getFullYear();
            let change_month = change_today.getMonth() + 1;
            let change_date = change_today.getDate();
            let change_date_num = change_year + "/" + change_month + "/" + change_date;
            change_time.empty().append(change_date_num);
        }
    }
    
})

// 取消變更
$(document).on("click",".table_change-cancel",function(){
    if($(this).parents(".table").hasClass("table-permission")){
        $(this).parents("tr").find(".permission_account").val(permission_account);
        $(this).parents("tr").find(".permission_password").val(permission_password);
    }
    $(this).parents("tr").find(".table_input").attr("disabled",true);
    $(this).addClass("d-none").removeClass("d-inline-block");
    $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
    $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
    $(this).parents("td").find(".table_change").addClass("d-none").removeClass("d-inline-block");
    $(this).parents("tr").find(".check").removeClass("valid");
})

// 新增
$(document).on("click",".table_add",function(){
    if($(this).parents(".table").hasClass("table-permission")){
        if($(this).parents("tr").find(".permission_account").val()==""){
            let alert_text="請輸入帳號";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else if($(this).parents("tr").find(".permission_password").val()==""){
            let alert_text="請輸入密碼";
            $(".alert_text").text(alert_text);
            $(".alert_box").fadeIn(300).delay(1000).fadeOut(300);
        }else {
            $(this).parents("tr").find(".table_input").attr("disabled",true);
            $(this).addClass("d-none").removeClass("d-inline-block");
            $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
            $(this).parents("td").find(".table_cancel").addClass("d-none").removeClass("d-inline-block");
            $(".btn-add-item").attr("disabled",false);
            $(this).parents("tr").find(".check").removeClass("valid");
            let add_time = $(this).parents("tr").find(".table_add-date");
            let add_today = new Date();
            let add_year = add_today.getFullYear();
            let add_month = add_today.getMonth() + 1;
            let add_date = add_today.getDate();
            let add_date_num = add_year + "/" + add_month + "/" + add_date;
            add_time.empty().append(add_date_num);
        }
    }
})

// 取消
$(document).on("click",".table_cancel",function(){
    $(this).parents("tr").remove();
    $(this).addClass("d-none").removeClass("d-inline-block");
    $(this).parents("td").find(".table_edit").addClass("d-inline-block").removeClass("d-none");
    $(this).parents("td").find(".table_delete").addClass("d-inline-block").removeClass("d-none");
    $(".btn-add-item").attr("disabled",false);
})