
  const orderS = document.querySelectorAll('select')[0];
  const orderSS = document.querySelectorAll('select')[1];
  const namev = document.querySelector('input');

  var menu = ["----想來點雞----", "香酥雞腿便飯:", "香酥雞排便飯:", "香酥雞排飯:", "香滷大雞飯:", "蔥油雞飯:", "椒麻雞腿飯:", "香烤雞腿飯:", "香烤雞排飯:", "三杯雞飯:", "----想來點豬----", "手打排骨飯:", "香滷排骨飯:", "控肉飯:", "老宅鹹豬肉:", "私藏豬腳飯:", "--想來點魚--", "土魠魚飯:", "香酥鱈魚飯:", "日式鯖魚飯:", "椒鹽虱目魚:", "蒲燒鯛魚飯:", "香烤鯖魚飯:", "----想來點不一樣的----", "蒜泥白肉飯:", "叉燒雙寶飯:", "香腸飯:", "酥炸燒肉飯:", "蝦捲飯:", "花枝燒:"];
  var price = ["", "105元", "100元", "100元", "105元", "105元", "110元", "110元", "105元", "110元", "", "90元", "90元", "90元", "90元", "105元", "", "95元", "95元", "95元", "95元", "95元", "100元", "", "85元", "90元", "90元", "90元", "95元", "90元"];
  

  window.addEventListener('load', crateMenulist);


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
        // 下面這段主要在組合資料，還有擋使用者不填資料不能送出
        $('#sendOrder').click(function(e){
        var status = true;
        // 姓名
        var name = $('#name').val();
        // 電話
        var total = $('#number2').val();
       // var phone = $('#phone').val(); 
        // 訂單  後面再加上選項數量*價格
        var order = '';
        // 價格 先預設0 後面再加上
        var price = 0;
        var price2 = "";
        
       /* $('input').focus(function(){
          $(this).css('border','');
        });*/
        // 處理價格 跟 訂單 資料
        $('#number').each(function(index) {
          var ses = document.getElementById("number");
          if($(this).val() !== ''){
            order = String(ses.options[ses.selectedIndex].text) + /*' - ' + $(this).val() +*/ "-" +  total +'份 ';
            price += parseInt($(this).val());
          }
        });
        //order = order.substring(0, order.length - 1);
        $('#number2').each(function(index) {
          if($(this).val() !== ''){
            var totalPrice = total * price;
            price2 += price + "x" + total + "=" + totalPrice + '元';
          }
        });
        // 擋住不填資料邏輯
        if(name == ''){
          $('#name').css('border','1px solid #ff0000');
          status = false;
        }
        /*if(phone == ''){
          $('#phone').css('border','1px solid #ff0000');
          status = false;
        }*/
        if(order == ''  ){
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
          orderS.value ="";
          orderSS.value ="";
        }
      });
      

    }
//----------------------------------------------------------------------
  