function getData(){
    $.ajax({
        url: 'http://5b71a13e586eb5001463a75b.mockapi.io/api-vuml/user', // url (demo thôi éo dùng đc đâu)
        method: "get", // phương thức: get, post, put, delete
        dataType: "JSON", // kiểu giữ liệu trả về JSON, String, Object, ...
        data: { // dữ liệu gửi đi tương ứng với key(xem lại postman)
            id: 1,
            first_name: 'Vũ ML'
        },
        beforeSend: function(){
            // $('.loading').removeClass('hide');
            // setInterval(function(){
            //     $('.loading').toggleClass('txt-red');
            // }, 200);
            
            // Đoạn trong này xử lí action gì đấy trong lúc gửi dữ liệu đi mà chưa có phản hồi
            // Ví dụ: cho cái icon xoay xoay cho đẹp
        },
        complete: function(){
            // $('.loading').addClass('hide');
            // Đoạn trong này xử lí action gì đấy sau khi đã có dữ liệu
            // Ví dụ: tắt cái icon xoay xoay đi
        },
        success: function(result){
            // result là cái dữ liệu đã được trả về
            // xử lý ở đây
            //console.log(result);
            var templatestring = 0;
            if( result && result.length ){
                for( i = 0; i < result.length; i++ )
                    templatestring += `<tr>
                                            <td>${result[i].first_name}</td>
                                            <td>${result[i].last_name}</td>
                                            <td>${result[i].email}</td>
                                            <td>
                                                <button 
                                                    type="button" 
                                                    class="btn btn-danger btn-sm remove-user"
                                                    user-id="${result[i].id}"
                                                >
                                                    <i class="fa fa-remove"></i>
                                                </button>
                                            </td>
                                        </tr>`;
                                        $('.table-body').append(templatestring);
            }
        },
        error: function(err, msg){
            console.log(msg);
            console.log(err);
            // nếu lỗi thông báo ở đây
        }
    });
}

// Create User
$('#form-action').submit(function(event) {
    event.preventDefault(); // huỷ action gửi đi của form html

    // khai báo các biến nhận dữ liệu trên form
    var email     = $('#email').val();
    var firstName = $('#fist_name').val();
    var lastName  = $('#last_name').val();

    $.ajax({
        url: 'http://5b71a13e586eb5001463a75b.mockapi.io/api-vuml/user', // url (demo thôi éo dùng đc đâu)
        method: "post", // phương thức: get, post, put, delete
        dataType: "JSON", // kiểu giữ liệu trả về JSON, String, Object, ...
        data: { // dữ liệu gửi đi tương ứng với key(xem lại postman)
            first_name: firstName,  
            email: email,
            last_name: lastName,
        },
        beforeSend: function(){
            // $('.loading').removeClass('hide');
            // setInterval(function(){
            //     $('.loading').toggleClass('txt-red');
            // }, 200);
            
            // Đoạn trong này xử lí action gì đấy trong lúc gửi dữ liệu đi mà chưa có phản hồi
            // Ví dụ: cho cái icon xoay xoay cho đẹp
        },
        complete: function(){
            // $('.loading').addClass('hide');
            // Đoạn trong này xử lí action gì đấy sau khi đã có dữ liệu
            // Ví dụ: tắt cái icon xoay xoay đi
        },
        success: function(result){
            // result là cái dữ liệu đã được trả về
            // xử lý ở đây
            //console.log(result);
            if (result) { // kiểm tra dữ liệu có trả về hay không
                window.location.replace('file:///D:/training-js/crud-js/starter.html'); // reload về trang chu
            }
        },
        error: function(err, msg){
            console.log(msg);
            console.log(err);
            // nếu lỗi thông báo ở đây
        }
    });

});

//delete
$('.table-body').on('click', '.remove-user',function() {
    var userID = $(this).attr('user-id');
    
    $.ajax({
        url: `http://5b71a13e586eb5001463a75b.mockapi.io/api-vuml/user/${userID}`, // url (demo thôi éo dùng đc đâu)
        method: "delete", // phương thức: get, post, put, delete
        dataType: "JSON", // kiểu giữ liệu trả về JSON, String, Object, ...
        data: { // dữ liệu gửi đi tương ứng với key(xem lại postman)
          
        },
        beforeSend: function(){
            // $('.loading').removeClass('hide');
            // setInterval(function(){
            //     $('.loading').toggleClass('txt-red');
            // }, 200);
            
            // Đoạn trong này xử lí action gì đấy trong lúc gửi dữ liệu đi mà chưa có phản hồi
            // Ví dụ: cho cái icon xoay xoay cho đẹp
        },
        complete: function(){
            // $('.loading').addClass('hide');
            // Đoạn trong này xử lí action gì đấy sau khi đã có dữ liệu
            // Ví dụ: tắt cái icon xoay xoay đi
        }, 
        success: function(result){
            // result là cái dữ liệu đã được trả về
            // xử lý ở đây
            //console.log(result);
            if (result) { // kiểm tra dữ liệu có trả về hay không
                window.location.replace('file:///D:/training-js/crud-js/starter.html'); // reload về trang chu
            }
        },
        error: function(err, msg){
            console.log(msg);
            console.log(err);
            // nếu lỗi thông báo ở đây
        }
    });

});