timeend= new Date(2017, 9, 6, 21, 48);
function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);
    day='0'+today;
    hour=thour;
    min=tmin;
    sec=tsec;
    document.getElementById('d').innerHTML=day;
    document.getElementById('h').innerHTML=hour;
    document.getElementById('m').innerHTML=min;
    document.getElementById('s').innerHTML=sec;
    window.setTimeout("time()",1000);
}