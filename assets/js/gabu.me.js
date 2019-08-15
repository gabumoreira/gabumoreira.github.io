var light; 

window.onload = function() {
  if (localStorage.getItem("light") === null) {
      window.localStorage.setItem('light', false);
  }

  light = JSON.parse(window.localStorage.getItem('light'));

  changeTheme();
  changeTheme();

  rmvClass('lazy-display', 'display-none', false);
};

function changeTheme() {
	console.log("changeTheme:");
	if(light){
    rmvClass('site-header', 'white-theme-bg', false);
    rmvClass('page-content', 'white-theme-bg', false);
    rmvClass('site-footer', 'white-theme-bg', false);
    rmvClass('site-nav', 'white-theme-bg', false);
    rmvClass('site-nav', 'white-theme-bg', false);

    fillIcons('#fafafa');
    linksColor('#fafafa');
    hColor('#fafafa');
    textColor('#fafafa');
    extraColor('#fafafa');
    borderTop('#fafafa');

    addClass('site-header', 'dark-theme-bg', false);
    addClass('page-content', 'dark-theme-bg', false);
    addClass('site-footer', 'dark-theme-bg', false);
    addClass('site-nav', 'dark-theme-bg', false);

		light = false;
    window.localStorage.setItem('light', false);

	} else {
    rmvClass('site-header', 'dark-theme-bg', false);
    rmvClass('page-content', 'dark-theme-bg', false);
    rmvClass('site-footer', 'dark-theme-bg', false);
    rmvClass('site-nav', 'dark-theme-bg', false);

    fillIcons('#186868');
    linksColor('#186868');
    hColor('#186868');
    textColor('#186868');
    extraColor('#828282');
    borderTop('#579191');

    addClass('site-header', 'white-theme-bg', false);
    addClass('page-content', 'white-theme-bg', false);
    addClass('site-footer', 'white-theme-bg', false);
    addClass('site-nav', 'white-theme-bg', false);

		light = true;
    window.localStorage.setItem('light', true);

	}

}
function borderTop(color){
  var i;
  var element;

  element = document.getElementsByClassName('site-header');
  for (i = 0; i < element.length; i++) {
    element[i].style.borderTop  = "5px solid " + color;
  }
}

function extraColor(color){
  var i;
  var element;

  element = document.getElementsByClassName('p-name');
  for (i = 0; i < element.length; i++) {
    element[i].style.color = color;
  }

}

function textColor(color){
  var i;
  var j;
  var element;

  element = document.getElementsByClassName('post-content');
  for (i = 0; i < element.length; i++) {
    element[i].style.color = color;

    var p = element[i].getElementsByTagName('p');
    for (j = 0; j < p.length; j++) {
      p[j].style.color = color;
    }
  } 

}

function hColor(color){
  var i;
  var element;

  element = document.getElementsByTagName('h1');
  for (i = 0; i < element.length; i++) {
    element[i].style.color = color;
  } 
  element = document.getElementsByTagName('h2');
  for (i = 0; i < element.length; i++) {
    element[i].style.color = color;
  } 
  element = document.getElementsByTagName('h3');
  for (i = 0; i < element.length; i++) {
    element[i].style.color = color;
  } 
  element = document.getElementsByTagName('h4');
  for (i = 0; i < element.length; i++) {
    element[i].style.color = color;
  } 

}

function linksColor(color){
  var element = document.getElementsByTagName('a');

  var i;
  for (i = 0; i < element.length; i++) {
    element[i].style.color = color;
  } 
}

function addClass(e, name, bid){
  //console.log("addClass");
  var element;
  
  if(bid){
    element = document.getElementById(e);
  	arr = element.className.split(" ");

    if (arr.indexOf(name) == -1) {
      element.className += " " + name;
    }
  } else{
  	element = document.getElementsByClassName(e);

  	var i;
  	for (i = 0; i < element.length; i++) {
      arr = element[i].className.split(" ");

      if (arr.indexOf(name) == -1) {
        element[i].className += " " + name;
      }
    } 
  }
}

function rmvClass(e, className, bid){ 
  //console.log("rmvClass");
  var element;
  
  if(bid){
    element = document.getElementById(e);
    element.classList.remove(className);
  } else {
    element = document.getElementsByClassName(e);

    var i;
    for (i = 0; i < element.length; i++) {
      element[i].classList.remove(className);
    } 
  }
}

function fillIcons(color){
  element = document.getElementsByClassName('svg-icon');

  var i;
  for (i = 0; i < element.length; i++) {
    var j;

    element[i].style.fill = color;

    var rect = element[i].getElementsByTagName('rect');
    var path = element[i].getElementsByTagName('path');
    var polygon = element[i].getElementsByTagName('polygon');
    var circle = element[i].getElementsByTagName('circle');

    for (j = 0; j < rect.length; j++) {
      rect[j].style.fill = color;
    }

    for (j = 0; j < path.length; j++) {
      path[j].style.fill = color;
    }

    for (j = 0; j < polygon.length; j++) {
      polygon[j].style.fill = color;
    }

    for (j = 0; j < circle.length; j++) {
      circle[j].style.stroke = color;
    }
  }   
}