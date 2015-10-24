window.onload=time();
  function time(){
    //获得显示时间的div
    a_div = document.getElementById('dash_year');
    b_div = document.getElementById('dash_hour');
    c_div = document.getElementById('dash_minute');
    d_div = document.getElementById('dash_second');
   var now=new Date()
    //替换div内容 
   a_div.innerHTML = now.getFullYear();
   b_div.innerHTML = now.getHours()+":";
   c_div.innerHTML = now.getMinutes()+":";
   d_div.innerHTML = now.getSeconds();
   
    //等待一秒钟后调用time方法，由于settimeout在time方法内，所以可以无限调用
   setTimeout(time,1000);
  }