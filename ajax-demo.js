$.ajax({
    url: 'https://mockapi.io/api/', // url (demo thôi éo dùng đc đâu)
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
    },
    error: function(err, msg){
        console.log(msg);
        console.log(err);
        // nếu lỗi thông báo ở đây
    }
});