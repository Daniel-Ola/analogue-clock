// JavaScript Document


var h ;

function time()
{
	//alert(1234567) ;
	var d = new Date ;
	var h = d.getHours() ;
	var m = d.getMinutes() ;
	var s = d.getSeconds() ;
	var ampm = "am" ;/*
	var hralarm = document.getElementById("hralarm").value ;
	var minalarm = document.getElementById("minalarm").value ;
	if(h==hralarm && m==minalarm && s==00)
	{
		//alert(3456789) ;
		document.getElementById("alarm").innerHTML = "<audio src='../../../Music/02 What Is Love _feat. V. Bozeman_.mp3' autoplay='autoplay' controls></audio>" ;
	}*/
	if(h>=16)
	{
		//alert('hey') ;
		ampm = "am" ;
		document.getElementById("greet").innerHTML = "Good evening!" ;
		document.getElementById("greet").style.color = "#FF6600" ;
		document.getElementById("timer").style.color = "#FF6600" ;
		document.getElementById("body").style.backgroundColor = "#999" ;
	}
	if(h<12)
	{
		//alert(h) ;
		ampm = "am" ;
		document.getElementById("greet").innerHTML = "Good morning!" ;
		document.getElementById("greet").style.color = "cyan" ;
		document.getElementById("timer").style.color = "cyan" ;
		document.getElementById("body").style.backgroundColor = "#6699FF" ;
	}
	if(h>=12 && h<16)
	{
		//h = h-12 ;
		ampm = "pm" ;
		document.getElementById("greet").innerHTML = "Good afternoon!" ;
		document.getElementById("greet").style.color = "red" ;
		document.getElementById("timer").style.color = "red" ;
		document.getElementById("body").style.backgroundColor = "#FFFF99" ;
	}
	if(h>12)
	{
		//alert(h) ;
		h = h-12 ;
		ampm = "pm" ;
	}
	if(m<10)
	{
		m = "0" + m ;
	}
	if(s<10)
	{
		s = "0" + s ;
	}
	if(h<10)
	{
		h = "0" + h ;
	}
	document.getElementById("hr").value = h ;
	document.getElementById("min").value = m ;
	document.getElementById("sec").value = s ;
	document.getElementById("timer").value = h + ":" + m + ":" + s + " " + ampm ;
	window.setTimeout("time()",1000) ;	
}

function timed()
{
	//alert(4567890) ;
	time() ;
	hour = document.getElementById("hr").value ;
	minute = document.getElementById("min").value ;
	sec = document.getElementById("sec").value ;
	hour = parseFloat(hour) ;
	prehr = (minute/12) * 0.2 ;
	preprehr = (hour + prehr) ;
 	hour = (preprehr * 30) ;
	minute = minute * 6 ;
	sec = sec * 6 ;
	var hhand = document.getElementById("hour") ;
	hhand.style.transformOrigin = "bottom" ;
	hhand.style.transform = 'rotate(' + hour + 'deg)' ;
	
	var mhand = document.getElementById("minute") ;
	mhand.style.transformOrigin = "bottom" ;
	mhand.style.transform = 'rotate(' + minute + 'deg)' ;
	
	var shand = document.getElementById("seconds") ;
	shand.style.transformOrigin = "bottom" ;
	shand.style.transform = 'rotate(' + sec + 'deg)' ;
	window.setTimeout("timed()" , 1000) ;
	//alert(hour) ;
	
	
	hours = document.getElementById("hr").value ;
	minutes = document.getElementById("min").value ;
	secs = document.getElementById("sec").value ;
	//alert(hours) ;
	var hralarm = document.getElementById("hralarm").value ;
	var minalarm = document.getElementById("minalarm").value ;
	if(hours==hralarm && minutes==minalarm && secs==00)
	{
		//alert(3456789) ;
		document.getElementById("alarm").innerHTML += "<br /><audio src='../../../Music/02 What Is Love _feat. V. Bozeman_.mp3' autoplay='autoplay' id='music' loop controls onPause='hidealarm()'></audio>" ;
	}
	
}

function rotate()
{
	//alert(1234567) ;
	var elem = document.getElementById("rotate") ;
	//elem.style.width = '100px' ;
	var p = 0 ;
	//if(p != 360)
	for(p=0; p>=2; p++)
	{
		//p++ ;
		alert(12345678) ;
		elem.style.transform = 'rotate(' + p + 'deg)' ;
	}
}


















/*function rotate()
{
	alert(1234567) ;
	//document.getElementById("link1").className(rotate) ;
	var elem = document.getElementById("rotate") ;
	elem.style.transform = rotate(30+'deg') ;
	elem.style.width = 100 + 'px' ;
	document.getElementById("rotate").style.width = '100px' ;
	//var pos = 360 ;
	//var id = setInterval(frame(), 10) ;
	/*function frame()
	{
		if(pos == 0)
		{
			pos++ ;
			elem.style.transform = rotate(pos + 'deg') ;
			elem.style.transform = rotate(pos + 'deg') ;
		}
		else
		{
			clearInterval(id) ;
		}
	}*/
//}