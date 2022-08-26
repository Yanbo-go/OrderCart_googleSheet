
  const orderS = document.querySelectorAll('select')[0];
  //const orderSSS = document.querySelectorAll('select')[1];
  //const orderSS = document.querySelectorAll('select')[2];
  const namev = document.querySelectorAll('input')[0];
  //const name2v = document.querySelectorAll('input')[1];
// 菜單
var menu =["---一般套餐---","1號-大麥克:","2號-雙層牛肉吉士堡:","3號-安格斯黑牛堡:","4號-嫩煎雞腿堡:","5號-麥香雞:","6號-麥克雞塊(6塊):","7號-麥克雞塊(10塊):",
          "8號-勁辣雞腿堡:","9號-麥脆雞腿(2塊):","10號-麥脆雞翅(2塊):","11號-黃金起司豬排堡:","12號-麥香魚:","13號-千島黃金蝦堡:","----極選系列----","14號-BLT安格斯黑牛堡:",
          "15號-BLT辣脆雞腿堡:","16號-BLT嫩煎雞腿堡:","17號-BLT暈菇安格斯黑牛堡:","18號-凱薩脆雞沙拉:","19號-義式烤雞沙拉:",];
// 價錢
var price =["","130元","120元","","135元","100元","119元","159元","130元","175元","153元","","104元","",
            "","169元","169元","169元","179元","159元","159元"];
var submenu =["不升級","薯條加大","飲料加大","都加大"];
var subprice =["0元","13元","7元","20元"];

  // 網站監聽載入時呼叫建立菜單Function
  window.addEventListener('load', limitTime);
  window.addEventListener('load', crateMenulist);
  //window.addEventListener('load', cratesubMenulist);
  // 限制時間
  function limitTime() {
    var currentTime = new Date();
    var setTime = new Date(currentTime.getFullYear(),currentTime.getMonth(),
    currentTime.getDate(),19,30,0 );
    var urll = "../img/1668366.jpg";          
    if(currentTime.getTime() > setTime.getTime()){
      document.body.innerHTML="";
      alert("目前不在使用時段(截止時間為10:30)，下次請早~\n"+currentTime);
      document.body.setAttribute("background", urll);


    };
  }
  // 建立菜單列表
  function crateMenulist(){
  for(i = 0 ;i < menu.length; i++){
   var op = document.createElement("option");
   op.appendChild(document.createTextNode(menu[i]+price[i]));   
   orderS.appendChild(op);
   op.setAttribute("value",price[i]);
   op.innerHtml = menu[i]+price[i];
   op.setAttribute("id","opm" + i );
  }
}
  /*function cratesubMenulist(){
  for(i = 0 ;i < submenu.length; i++){
   var op = document.createElement("option");
   op.appendChild(document.createTextNode(submenu[i]+subprice[i]));   
   orderSSS.appendChild(op);
   op.setAttribute("value",subprice[i]);
   op.innerHtml = submenu[i]+subprice[i];
   op.setAttribute("id","sopm" + i );
  }
}*/

  $(function(){
        // 監聽 送出訂單 按鈕點擊
        $('#sendOrder').click(function(e){
        var status = true;
        // 姓名
        var name = $('#name').val();
        // 價錢
        //var price1 = $('#price').val();
        //var total = $('#number2').val();
        //var total2 = $('#number3').val();
        // 訂單
        var order = '';
        //var order2 = '';
        // 價格
        var price = 5;
        // 處理價格 跟 訂單 資料
        $('#number').each(function(index) {
          var ses = document.getElementById("number");
          //var ses2 = document.getElementById("number3");
          if($(this).val() !== ''){
            order = String(ses.options[ses.selectedIndex].text)+ "x1份";
            price += parseInt($(this).val());
          }
        });
        //order = order.substring(0, order.length - 1);
        

        /*$('#number2').each(function(index) {
          if($(this).val() !== ''){
            var totalPrice2 = total * price;
            price2 += price + "x" + total + "=" + totalPrice2 + '元';
          }
        });*/

        

        // 擋住不填資料邏輯
        if(name == ''){
          $('#name').css('border','1px solid #ff0000');
          status = false;
        }
        /*if(price1 == ''){
          $('#price').css('border','1px solid #ff0000');
          status = false;
        }*/
        if(order == '' ){
        alert('請選擇訂購品項喔');
        status = false;
        }
        // 如果必填欄位都過了 才會到這邊
        if(status){
          // 日期資料
          var currentdate = new Date();
          var filltime = currentdate.getFullYear() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getDate() + "  "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
          // 打包
          var data = {
            'name' : name,
            //'phone':phone,
            'time': filltime,
            'order': order,
            'price': price,
          }
          // 呼叫 send ajax function
          send(data);
        }
      });
    });



    function send(data){
      $.ajax({
        // get type
        type: "get",
        // api url
        url: "https://script.google.com/macros/s/AKfycbzv24Kx8LYwpHbHjHpITM05p3fnQiCKF50HX90H0WxvROueX6mBPHy3fpG5F48cbuV2uA/exec",
        // 資料帶入
        data: data,
        // 資料格式JSON 
        dataType: "JSON",
        success: function (response) {
          console.log(response);
          alert('點餐完成！！');
        // 清空欄位 
          namev.value = "";
          orderS.value ="";
        }
      });
      

    }




