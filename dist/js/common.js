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
            var templatestring = '';
            if( result && result.length ){ //???
                for( var i = 0; i < result.length; i++){
                    templatestring += `<tr>
                                            <th>${result[i].first_name}</th>
                                            <th>${result[i].last_name}</th>
                                            <th>${result[i].email}</th>
                                        </tr>
                                        `;
                }; //???
                console.log(templatestring)
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