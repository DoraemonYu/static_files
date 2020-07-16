/* [Simple Alert DIV]
   Written by DoraemonYu. Last modify date is 2016-06-29 21:50
*/

//弹出隐藏层
function ShowDiv(show_div, bg_div, closeByBG) {
    var showdiv             = document.getElementById(show_div);   
    var bgdiv               = document.getElementById(bg_div);

    //##显示
    showdiv.style.display   = 'block';
    bgdiv.style.display     = 'block';

    //##高度和位置
    var body 		        = document.body,html = document.documentElement;
    var targetHeight 	    = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    var targetScrollTop     = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    var targetScrollButtom  = targetScrollTop + (window.innerHeight || document.documentElement.clientHeight);

    bgdiv.style.height      = targetHeight + "px";
    showdiv.style.top       = (targetScrollTop + (targetScrollButtom - targetScrollTop - showdiv.clientHeight) / 2) + "px";

    //##滚动条
    document.body.style.overflow='hidden';

   //close by click bg
   if (closeByBG != false) {
       bgdiv.onclick = function () {
           CloseDiv(show_div, bg_div);
       };
   }
};
//关闭弹出层
function CloseDiv(show_div,bg_div)
{
    document.getElementById(show_div).style.display='none';
    document.getElementById(bg_div).style.display='none';
    document.body.style.overflow='';
};