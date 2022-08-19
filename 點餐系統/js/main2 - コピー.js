
  const orderS = document.querySelectorAll('select')[0];
  const orderSS = document.querySelectorAll('select')[1];
  const namev = document.querySelectorAll('input')[0];
  const name2v = document.querySelectorAll('input')[1];

var menu =["請選擇餐點","1號-大麥克","2號-雙層牛肉吉士堡","3號-安格斯黑牛堡","4號-嫩煎雞腿堡","5號-麥香雞","6號-麥克雞塊(6塊)","7號-麥克雞塊(10塊)",
          "8號-勁辣雞腿堡","9號-麥脆雞腿(2塊)","10號-麥脆雞翅(2塊)","11號-黃金起司豬排堡","12號-麥香魚","13號-千島黃金蝦堡","----極選系列----","14號-BLT安格斯黑牛堡",
          "15號-BLT辣脆雞腿堡","16號-BLT嫩煎雞腿堡","17號-BLT暈菇安格斯黑牛堡","18號-凱薩脆雞沙拉","19號-義式烤雞沙拉",];
var price =["100元","95元","85元","95元"];


  window.addEventListener('load', crateMenulist);


  function crateMenulist(){
  for(i = 0 ;i < menu.length; i++){
   var op = document.createElement("option");
   op.appendChild(document.createTextNode(menu[i]));
   op.setAttribute("id","opm" + i );
   orderS.appendChild(op);
   

  }
}

  $(function(){
        // 監聽 送出訂單 按鈕點擊
        // 下面這段主要在組合資料，還有擋使用者不填資料不能送出
        $('#sendOrder').click(function(e){
        var status = true;
        // 姓名
        var name = $('#name').val();
        // 價錢
        var price1 = $('#price').val();
        // 電話
        var total = $('#number2').val();
       // var phone = $('#phone').val(); 
        // 訂單  後面再加上選項數量*價格
        var order = '';
        var order2 = '';
        // 價格 先預設0 後面再加上
        var price = 0;
        var price2 = '';
       /* $('input').focus(function(){
          $(this).css('border','');
        });*/
        
        // 處理價格 跟 訂單 資料
        $('#number').each(function(index) {
          if($(this).val() !== ''){
            order += /*$(this).data('name') + ' - ' +*/ $(this).val() + "-" +  total +'份 \n';
            //price += Number($(this).data('price')) /* Number($(this).val());*/
          }
        });
        order = order.substring(0, order.length - 1);

        $('#number2').each(function(index) {
          if($(this).val() !== ''){
            order2 += total;
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
            'order': order,
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




