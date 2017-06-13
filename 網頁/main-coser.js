var drag = false; //拖曳狀態
var K; //被拖曳物件
var Kx, Ky; //拖曳物件起點
var x0, y0; //拖曳滑鼠起點
function md() {
  drag = true; //鎖定拖曳功能
  K = event.srcElement; //取得被拖曳物件參考
  Kx = K.offsetLeft; //物件初始位置x
  Ky = K.offsetTop; //物件初始位置y
  x0 = event.clientX; //滑鼠初始位置x
  y0 = event.clientY; //滑鼠初始位置y
}

function mv() {
  if (drag) {
    //鎖定拖曳時
    K.style.left = Kx + (event.clientX - x0)+"px"; //移動物件位置x
    K.style.top = Ky + (event.clientY - y0)+"px"; //移動物件位置y  
  }
}

function mup() {
  //滑鼠放開時
  drag = false; //解除拖曳狀態
}

var hdcircleonclicknum=0;
function hdcircleonclick(){
  
  if(hdcircleonclicknum==0){ 
    document.getElementById("headdiv").innerHTML='<div id="hdbt1" class=headerbutton>  <div>個人空間</div></div><div id="hdbt2"class=headerbutton><div>討論版</div></div><div id="hdbt3" class=headerbutton><div>場次/茶會資訊</div></div><div id="hdbt4"         class=headerbutton><div>工作室資訊</div>       </div><div id="hdbt5" class=headerbutton>     <div>外拍場景資訊</div></div>'
    hdcircleonclicknum=1;
   }
  else if(hdcircleonclicknum==1){
    $("#hdbt1").fadeOut();
    $("#hdbt2").fadeOut();
    $("#hdbt3").fadeOut();
    $("#hdbt4").fadeOut();
    $("#hdbt5").fadeOut();
    hdcircleonclicknum=0;
  }
  //淡出
}

$( "#headcircle" ).hover(function(){
   $("#headcircle").css("background-color","rgba(0, 0, 0, 1)");
})
//hover時變黑

$("#headcircle").mouseout(function(){
  $("#headcircle").css("background-color","rgba(0, 0, 0, 0.5)");
});

<<<<<<< HEAD
//2017/6/13 文義編寫廣告輪播

//2017/6/13 編寫完成
=======
>>>>>>> master
