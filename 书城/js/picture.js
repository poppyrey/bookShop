$(window).on( "load", function(){
   // 调用waterfall函数
    waterfall();
	var dataInt={'data':[{'src':'01.jpg'},{'src':'02.jpg'},{'src':'03.jpg'},{'src':'04.jpg'}]};
    window.onscroll=function(){
       // 拖动滚动条时
       if(checkscrollside()){
            $.each(dataInt.data, function(index, item){
          
          var $oPin = $('<div>').addClass('box').appendTo($("#picture"));
          var $oBox = $('<div>').addClass('pic').appendTo($oPin);
          $('<img>').attr('src', 'img/'+$(item).attr('src')).appendTo($oBox);
        });
       waterfall();
       }
     }
});
function waterfall(){
 // 计算及定位数据块显示分散效果
    var boxes=$(".box");
    var parent=$("#picture");
    var boxesW=boxes.eq(0).outerWidth();
    var windowW=$(window).width();
    var cols=Math.floor(windowW/boxesW);
    parent.css({
        "width":cols*boxesW+"px",
        "margin":"0 auto"
    });
    
    var boxH=[];
    boxes.each(function(index,intem){
        if(index<cols){
            boxH[index]=boxes.eq(index).outerHeight();
        }else{
            var minH=Math.min.apply(null,boxH);
            var minIndex=$.inArray(minH,boxH);
            $(intem).css({
                "position":"absolute",
                "top":minH+"px",
                "left":minIndex*boxesW+"px",
            });
            boxH[minIndex]+=boxes.eq(index).outerHeight();
        }
	})
}


function checkscrollside(){
  // 检测是否具备了加载数据块的条件
  var parent=$("#picture");
  var boxes=$(".box");
  var lastH=boxes.last().offset().top+Math.floor(boxes.last().outerHeight()/2);
  var scrollH=$(window).scrollTop()+$(window).height();
  return (lastH<scrollH)?true:false;
}