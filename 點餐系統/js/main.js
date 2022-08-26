
  const orderS = document.querySelectorAll('select')[0];
  //const orderSS = document.querySelectorAll('select')[1];
  const namev = document.querySelector('input');
  // 菜單
  var menu = ["----想來點雞----", "香酥雞腿飯:", "香酥雞排飯:", "香滷雞排飯:", "香滷大雞腿:", "蔥油雞飯:", "椒麻雞腿飯:", "香烤雞腿飯:", "香烤雞排飯:", "三杯雞飯:", "----想來點豬----", "手打排骨飯:", "香滷排骨飯:", "控肉飯:", "老宅鹹豬肉:", "私藏豬腳飯:", "----想來點魚----", "土魠魚飯:", "香酥鱈魚飯:", "日式鯖魚飯:", "椒鹽虱目魚:", "蒲燒鯛魚飯:", "香烤鯖魚飯:", "----想來點不一樣的----", "蒜泥白肉飯:", "叉燒雙寶飯:", "香腸飯:", "酥炸燒肉飯:", "蝦捲飯:", "花枝燒:"];
  // 價錢
  var price = ["", "105元", "100元", "100元", "105元", "105元", "110元", "110元", "105元", "110元", "", "90元", "90元", "90元", "90元", "105元", "", "95元", "95元", "95元", "95元", "95元", "100元", "", "85元", "90元", "90元", "90元", "95元", "90元"];
  
  // 網站監聽載入時呼叫建立菜單Function
  window.addEventListener('load', limitTime);
  window.addEventListener('load', crateMenulist);
  // 限制時間
  function limitTime() {
    var currentTime = new Date();
    var setTime = new Date(currentTime.getFullYear(),currentTime.getMonth(),
    currentTime.getDate(),19,31,0 );
    var urll = "../img/1668366.jpg";          
    if(currentTime.getTime() > setTime.getTime()){
      document.body.innerHTML="";
      alert("目前不在使用時段(截止時間為10:30)，下次請早~\n"+currentTime);
      document.body.setAttribute("background", urll);


    };
  }
　// 建立菜單列表
  function crateMenulist() {
    for (var i = 0; i < menu.length; i++) {
      var op = document.createElement("option");
      op.appendChild(document.createTextNode(menu[i]+price[i]));
      orderS.appendChild(op);
      op.setAttribute("value",price[i]);
      //op.setAttribute("text",menu[i]+price[i])
      op.innerHtml = menu[i]+price[i];
      op.setAttribute("id", "op" + i);
    }
  }

　　

 $(function(){
        // 監聽 送出訂單 按鈕點擊
        $('#sendOrder').click(function(e){
        var status = true;
        // 姓名
        var name = $('#name').val();
        // 數量
        //var total = $('#number2').val();
        // 訂單
        var order = '';
        // 價錢
        var price = "";
        
        // 處理價錢 跟 訂單 資料
        $('#number').each(function(index) {
          var ses = document.getElementById("number");
          if($(this).val() !== ''){
            order = String(ses.options[ses.selectedIndex].text) + "-" + '1份 ';
            price += parseInt($(this).val());
          }
        });
        //order = order.substring(0, order.length - 1);
        /*$('#number2').each(function(index) {
          if($(this).val() !== ''){
            var totalPrice = total * price;
            price2 += price + "x" + total + "=" + totalPrice + '元';
          }
        });*/
        // 擋住不填資料
        if(name == ''){
          $('#name').css('border','1px solid #ff0000');
          status = false;
        }
        if(order == ''  ){
        alert('請選擇訂購品項喔');
        status = false;
        }
        //if(total == ''  ){
        //alert('請選擇數量喔');
        //status = false;
        //}

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
          //orderSS.value ="";
        }
      });
      

    }
//----------------------------------------------------------------------
  