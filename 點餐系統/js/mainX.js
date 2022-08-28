
  const orderSS = document.querySelector('select');
  const orderS = document.querySelectorAll('input')[0];
  const namev = document.querySelectorAll('input')[1];
  const name2v = document.querySelectorAll('input')[2];


  $(function(){
        // 監聽 送出訂單 按鈕點擊
        // 下面這段主要在組合資料，還有擋使用者不填資料不能送出
        $('#sendOrder').click(function(e){
        var status = true;
        // 訂單
        var order = $('#order').val();
        // 姓名
        var name = $('#name').val();
        // 價錢
        var price1 = $('#price').val();
        // 電話
        var total = $('#number2').val();
       // var phone = $('#phone').val(); 
        // 訂單  後面再加上選項數量*價格
        var order2 = '';
        // 價格 先預設0 後面再加上
        var price = 0;
        var price2 = '';
       /* $('input').focus(function(){
          $(this).css('border','');
        });*/
        
        // 處理價格 跟 訂單 資料
        order2 += order + "-" +  total +'份';;

        $('#number2').each(function(index) {
          if($(this).val() !== ''){
            price +=  Number(price1) * Number($(this).val());
          }
        });
        price2 += Number(price1) + 'x' + total +'份' + '=' +  price +'元';

        // 擋住不填資料邏輯
        if(name == ''){
          $('#name').css('border','1px solid #ff0000');
          status = false;
        }
        /*if(phone == ''){
          $('#phone').css('border','1px solid #ff0000');
          status = false;
        }*/
        if(price1 == ''){
          $('#price').css('border','1px solid #ff0000');
          status = false;
        }
        if(order == '' || order2 == ''){
        alert('請選擇訂購品項喔');
        status = false;
        }
        if(total == ''  ){
        alert('請選擇數量喔');
        status = false;
        }
        // 如果 �必填欄位都過了 才會到這邊
        if(status){
          // 增加日期資料
          var currentdate = new Date();
          var filltime = currentdate.getFullYear() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getDate() + "  "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
          // 打包 要的資料
          var data = {
            'name' : name,
            //'phone':phone,
            'time': filltime,
            'order': order2,
            'price': price2,
          }
          // 呼叫 send ajax function
          send(data);
        }
      });
    });



    function send(data){
      $.ajax({
        // 這邊用get type
        type: "get",
        // api url - google appscript 產出的 url
        url: "https://script.google.com/macros/s/AKfycbzv24Kx8LYwpHbHjHpITM05p3fnQiCKF50HX90H0WxvROueX6mBPHy3fpG5F48cbuV2uA/exec",
        // 剛剛整理好的資料帶入
        data: data,
        // 資料格式是JSON 
        dataType: "JSON",
        // 成功送出 會回頭觸發下面這塊感謝
        success: function (response) {
          console.log(response);
          alert('點餐完成！！');
          namev.value = "";
          name2v.value = "";
          orderS.value ="";
          orderSS.value ="";
        }
      });
      

    }

  $('#file').change(function() {
  var file = $('#file')[0].files[0];
  var reader = new FileReader;
  reader.onload = function(e) {
  $('#demo').attr('src', e.target.result);
  };
  reader.readAsDataURL(file);
});




