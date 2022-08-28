
  const orderS = document.querySelectorAll('select')[0];
  const orderSS = document.querySelectorAll('select')[1];
  const form = document.getElementById("form");
  const namev = document.querySelector('input');
  // 菜單
  var menu = ["----板燒漢堡----","----活力蛋餅(酥皮)----","----活力蛋餅(特酥)----","----日式穀堡----",
              "----厚片----","----法國吐司----"];
  //項目
  var item1 = [ "玉米蛋:", "肉鬆蛋:", "豬肉蛋:", "烤肉蛋:", "香雞蛋:", "牛肉蛋:", "總匯蛋:", "日式雞排蛋:", "日式豬排蛋:","日式花枝排蛋:","日式蝦排蛋:","雞腿蛋(辣/原):"];
  var item2 = ["原味蛋餅:", "肉鬆蛋餅:", "玉米蛋餅:", "起司蛋餅:", "萵苣蛋餅:","洋蔥蛋餅:","火腿蛋餅:","培根蛋餅:","熱狗蛋餅:","鮪魚蛋餅:","烤肉蛋餅:"];
  var item3 = ["原味蛋餅:", "肉鬆蛋餅:", "玉米蛋餅:", "起司蛋餅:", "萵苣蛋餅:","洋蔥蛋餅:","火腿蛋餅:","培根蛋餅:","熱狗蛋餅:","鮪魚蛋餅:","烤肉蛋餅:"];
  var item4 = ["日式疏食沙拉","日式咖哩","冰洲魚排","大洋鮮魚","孜然醬雞排","孜然醬豬排"];
  var item5 = ["----果醬系列----","草莓","藍莓","花生","奶油","奶酥","巧克力","----其他----","起司奶油","鮪魚洋蔥","燻雞起司"];
  var item6 = ["----果醬系列----","草莓","藍莓","花生","奶油","奶酥","巧克力","----其他----","日式培根","深海鮪魚","黃金烤肉"];

  // 價錢
  var price1 = ["30元", "30元", "35元", "40元", "40元", "40元", "45元", "45元", "45元", "45元", "45元", "50元"];
  var price2 = ["30元","35元","35元","35元","35元","35元","40元","40元","40元","40元","45元"]
  var price3 = ["35元","40元","40元","40元","40元","40元","45元","45元","45元","45元","50元"];
  var price4 = ["35元","35元","45元","45元","45元","45元"];
  var price5 = ["","25元","25元","25元","25元","25元","25元","","30元","35元","45元"];
  var price6 = ["","25元","25元","25元","25元","25元","25元","","35元","35元","40元"];


  
  // 網站監聽載入時呼叫建立菜單Function
  window.addEventListener('load', limitTime);
  window.addEventListener('load', crateMenulist);
  // 限制時間
  function limitTime() {
    var currentTime = new Date();
    var setTime = new Date(currentTime.getFullYear(),currentTime.getMonth(),
    currentTime.getDate(),22,31,0 );
    var urll = "../img/1668366.jpg";          
    if(currentTime.getTime() > setTime.getTime()){
      document.body.innerHTML="";
      alert("目前不在使用時段(截止時間為10:30)，下次請早~\n"+currentTime);
      document.body.setAttribute("background", urll);


    };
  }
　// 建立菜單

  //系列列表
  function crateMenulist() {
    for (var i = 0; i < menu.length; i++) {
      var op = document.createElement("option");
      op.appendChild(document.createTextNode(menu[i]));
      orderS.appendChild(op);
      //op.setAttribute("text",menu[i]+price[i])
      op.innerHtml = menu[i];
    }
  }
  //板燒漢堡
  function crateMenulist1() {
    for (var i = 0; i < item1.length; i++) {
      var op = document.createElement("option");
      op.appendChild(document.createTextNode(item1[i]+price1[i]));
      orderSS.appendChild(op);
      op.setAttribute("value",price1[i]);
      op.innerHtml = item1[i]+price1[i];
      op.setAttribute("id", "opb1" + i);
    }
  }
  //蛋餅
  function crateMenulist2() {
    for (var i = 0; i < item2.length; i++) {
      var op = document.createElement("option");
      op.appendChild(document.createTextNode(item2[i]+price2[i]));
      orderSS.appendChild(op);
      op.setAttribute("value",price2[i]);
      op.innerHtml = item2[i]+price2[i];
      op.setAttribute("id", "opb2" + i);
    }
  }
  //蛋餅(特酥)
  function crateMenulist3() {
    for (var i = 0; i < item3.length; i++) {
      var op = document.createElement("option");
      op.appendChild(document.createTextNode(item3[i]+price3[i]));
      orderSS.appendChild(op);
      op.setAttribute("value",price3[i]);
      op.innerHtml = item3[i]+price3[i];
      op.setAttribute("id", "opb3" + i);
    }
  }
  //日式穀堡
  function crateMenulist4() {
    for (var i = 0; i < item4.length; i++) {
      var op = document.createElement("option");
      op.appendChild(document.createTextNode(item4[i]+price4[i]));
      orderSS.appendChild(op);
      op.setAttribute("value",price4[i]);
      op.innerHtml = item4[i]+price4[i];
      op.setAttribute("id", "opb4" + i);
    }
  }
  //厚片
  function crateMenulist5() {
    for (var i = 0; i < item5.length; i++) {
      var op = document.createElement("option");
      op.appendChild(document.createTextNode(item5[i]+price5[i]));
      orderSS.appendChild(op);
      op.setAttribute("value",price5[i]);
      op.innerHtml = item5[i]+price5[i];
      op.setAttribute("id", "opb5" + i);
    }
    
  }

  //法國土司
  function crateMenulist6() {
    for (var i = 0; i < item6.length; i++) {
      var op = document.createElement("option");
      op.appendChild(document.createTextNode(item6[i]+price6[i]));
      orderSS.appendChild(op);
      op.setAttribute("value",price6[i]);
      op.innerHtml = item6[i]+price6[i];
      op.setAttribute("id", "opb6" + i);
    }
  }

  //監聽選擇系列內容並建立各系列菜單
  orderS.addEventListener('change', test);
  function test() {
    orderSS.options.length = 0;
    var sesV = "";
    $('#number').each(function(index) {
       var ses = document.getElementById("number");
       if($(this).val() !== ''){
         sesV = String(ses.options[ses.selectedIndex].text);
         crateSeriselist(sesV);
       }
   })
  }
  //判斷選擇系列
  function crateSeriselist(sesV) {
       switch(sesV){
        case ("----板燒漢堡----"):         
         crateMenulist1();
         break
        case ("----活力蛋餅(酥皮)----"):
         crateMenulist2();
         break
        case ("----活力蛋餅(特酥)----"):
         crateMenulist3();
         break
        case ("----日式穀堡----"):
         crateMenulist4();
         break
        case ("----厚片----"):
         crateMenulist5();
         break
        case ("----法國吐司----"):
         crateMenulist6();
         break  
       }
  }
  //按下送出後處理
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
        $('#number2').each(function(index) {
          var ses = document.getElementById("number");
          var ses2 = document.getElementById("number2");
          var sesV = String(ses.options[ses.selectedIndex].text);
          if($(this).val() !== ''){
            order = sesV + String(ses2.options[ses2.selectedIndex].text) + "-" + '1份 ';
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
  