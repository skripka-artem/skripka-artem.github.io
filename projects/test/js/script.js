var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
function countdown(yr,m,d){theyear=yr;themonth=m;theday=d
var today=new Date()
var todayy=today.getYear()
if(todayy<1000)todayy+=1900
var todaym=today.getMonth()
var todayd=today.getDate()
var todayh=today.getHours()
var todaymin=today.getMinutes()
var todaysec=today.getSeconds()
var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
futurestring=montharray[m-1]+" "+d+", "+yr
dd=Date.parse(futurestring)-Date.parse(todaystring)
dday=Math.floor(dd/(60*60*1000*24)*1)
dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
if(dday==0&&dhour==0&&dmin==0&&dsec==1){return;}else{if(dhour<1)dhour=1;if(dhour<10)dhour='0'+dhour;if(dmin<10)dmin='0'+dmin;if(dsec<10)dsec='0'+dsec;$('.time_').html("<span>"+dhour+"</span> <span>"+dmin+"</span> <span>"+dsec+"</span>");}setTimeout("countdown(theyear,themonth,theday)",1000)}countdown(2100,11,1);$(function(){$('#mform').attr('action','http://antonbeliy2412.e-autopay.com/checkout/save_order_data.php');$('#mform2').attr('action','http://antonbeliy2412.e-autopay.com/checkout/save_order_data.php');$('.to_order_form').on('click',function(e){$('html,body').stop().animate({scrollTop:$('#order_form').offset().top},1000);e.preventDefault();});$('.menu_content ul li.m1').on('click',function(e){$('html,body').stop().animate({scrollTop:$('#m1').offset().top},1000);e.preventDefault();});$('.menu_content ul li.m2').on('click',function(e){$('html,body').stop().animate({scrollTop:$('#m2').offset().top},1000);e.preventDefault();});$('.menu_content ul li.m22').on('click',function(e){$('html,body').stop().animate({scrollTop:$('#m22').offset().top},1000);e.preventDefault();});$('.menu_content ul li.m3').on('click',function(e){$('html,body').stop().animate({scrollTop:$('#m3').offset().top},1000);e.preventDefault();});$('.menu_content ul li.m4').on('click',function(e){$('html,body').stop().animate({scrollTop:$('#m4').offset().top},1000);e.preventDefault();});$('.menu_content ul li.m5').on('click',function(e){$('html,body').stop().animate({scrollTop:$('#m5').offset().top},1000);e.preventDefault();});$('.menu_content ul li.m6').on('click',function(e){$('html,body').stop().animate({scrollTop:$('#m6').offset().top},1000);e.preventDefault();});$('.menu_content ul li.m7').on('click',function(e){$('html,body').stop().animate({scrollTop:$('#order_form').offset().top},1000);e.preventDefault();});$('.menu_content ul li.m8').on('click',function(e){$('html,body').stop().animate({scrollTop:$('#m8').offset().top},1000);e.preventDefault();});$(".menu_bar").click(function(){$(".menu_content").animate({height:"toggle"},500);});(function($,F){F.transitions.resizeIn=function(){var previous=F.previous,current=F.current,startPos=previous.wrap.stop(true).position(),endPos=$.extend({opacity:1},current.pos);startPos.width=previous.wrap.width();startPos.height=previous.wrap.height();previous.wrap.stop(true).trigger('onReset').remove();delete endPos.position;current.inner.hide();current.wrap.css(startPos).animate(endPos,{duration:current.nextSpeed,easing:current.nextEasing,step:F.transitions.step,complete:function(){F._afterZoomIn();current.inner.fadeIn("fast");}});};}(jQuery,jQuery.fancybox));$(".order_frame").fancybox({maxWidth:550,maxHeight:550,fitToView:false,width:'550px',height:'550px',autoSize:false,closeClick:false,openEffect:'fade',closeEffect:'fade'});$(".complain_frame").fancybox({maxWidth:550,maxHeight:550,fitToView:false,width:'550px',height:'450px',autoSize:false,closeClick:false,openEffect:'fade',closeEffect:'fade'});$(".order_form2").fancybox({maxWidth:550,fitToView:false,autoSize:true,openEffect:'fade',closeEffect:'fade'});$(".photo").fancybox({openEffect:'elastic',closeEffect:'fade',nextMethod:'resizeIn',nextSpeed:250,prevMethod:false,});$(".gal").fancybox({openEffect:'elastic',closeEffect:'fade',nextMethod:'resizeIn',nextSpeed:250,prevMethod:false,});});setInterval('updt_topbar()',10000);

lvjq1(function($) {
lvjq1('#lv-formLanding1').yiiactiveform({'validateOnSubmit':true,'afterValidate':function(form, data, hasError){return window.leadvertex.form.validation(form, data, hasError);},'attributes':[{'id':'FormLanding_fio','inputID':'lv-formLanding1-fio','errorID':'lv-formLanding1-fio_em_','model':'FormLanding','name':'fio','enableAjaxValidation':false,'clientValidation':function(value, messages, attribute) {

if(lvjq1.trim(value)!='') {

if(value.length>255) {
	messages.push("Fio \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 (\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c: 255 \u0441\u0438\u043c\u0432.).");
}

}


if(lvjq1.trim(value)!='' && !value.match(/^.+$/)) {
	messages.push("\u041f\u043e\u043b\u0435 \u00ab\u0424.\u0418.\u041e\u00bb \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u043e");
}

}},{'id':'FormLanding_phone','inputID':'lv-formLanding1-phone','errorID':'lv-formLanding1-phone_em_','model':'FormLanding','name':'phone','enableAjaxValidation':false,'clientValidation':function(value, messages, attribute) {

if(lvjq1.trim(value)!='') {

if(value.length>25) {
	messages.push("Phone \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 (\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c: 25 \u0441\u0438\u043c\u0432.).");
}

}


if(lvjq1.trim(value)!='' && !value.match(/\+?\d/)) {
	messages.push("\u041f\u043e\u043b\u0435 \u00ab\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u00bb \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u043e");
}


if(lvjq1.trim(value)=='') {
	messages.push("\u041f\u043e\u043b\u0435 \u00ab\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u00bb \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u043e");
}

}}],'errorCss':'error'});
});

lvjq1(document).ready(function () {lvjq1(".lv-form-timezone").val(new Date().getTimezoneOffset());});





  if ('US'=='UA')
    window.location.href = 'http://c.trklp.ru/bAGX';

  if ('US'=='BY')
    window.location.href = 'http://c.trklp.ru/bAGX';

  if ('US'=='KZ')
    window.location.href = 'http://kzshoping.kz/powerbank-m/Hvr5j/';
