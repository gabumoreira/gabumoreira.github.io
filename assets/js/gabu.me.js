var light = false; 

$(function(){
  light_s = localStorage.getItem("light")
  if (light_s !== null) {
    if (JSON.parse(light_s)){
      changeTheme();
    }
  }

  rmvClass('lazy-display', 'display-none', false);
});

function changeTheme() {
	console.log("changeTheme:");
	if(light){
    rmvClass('site-header', 'white-theme-bg', false);
    rmvClass('page-content', 'white-theme-bg', false);
    rmvClass('site-footer', 'white-theme-bg', false);
    rmvClass('site-nav', 'white-theme-bg', false);
    rmvClass('post-meta', 'white-theme-cl', false);
    rmvClass('summary', 'white-theme-cl', false);
    rmvClass('cat-label', 'white-cat-label', false);

    fillIcons('#fafafa');
    linksColor('#fafafa');
    hColor('#fafafa');
    textColor('#fafafa');
    extraColor('#fafafa');
    borderTop('#fafafa');

    addClass('cat-label', 'dark-cat-label', false);
    addClass('site-header', 'dark-theme-bg', false);
    addClass('page-content', 'dark-theme-bg', false);
    addClass('site-footer', 'dark-theme-bg', false);
    addClass('site-nav', 'dark-theme-bg', false);
    addClass('post-meta', 'dark-theme-cl', false);
    addClass('summary', 'dark-theme-cl', false);

		light = false;
    window.localStorage.clear();

	} else {
    rmvClass('site-header', 'dark-theme-bg', false);
    rmvClass('page-content', 'dark-theme-bg', false);
    rmvClass('site-footer', 'dark-theme-bg', false);
    rmvClass('site-nav', 'dark-theme-bg', false);
    rmvClass('post-meta', 'dark-theme-cl', false);
    rmvClass('summary', 'dark-theme-cl', false);
    rmvClass('cat-label', 'dark-cat-label', false);

    fillIcons('#1c2a28');
    linksColor('#204742');
    hColor('#204742');
    textColor('#204742');
    extraColor('#204742');
    borderTop('#204742');

    addClass('cat-label', 'white-cat-label', false);
    addClass('site-header', 'white-theme-bg', false);
    addClass('page-content', 'white-theme-bg', false);
    addClass('site-footer', 'white-theme-bg', false);
    addClass('site-nav', 'white-theme-bg', false);
    addClass('post-meta', 'white-theme-cl', false);
    addClass('summary', 'white-theme-cl', false);

		light = true;
    window.localStorage.setItem('light', true);

	}

}
function catLabel(color, textColor){
  var i;
  var element;

  element = document.getElementsByClassName('cat-label');
  for (i = 0; i < element.length; i++) {
    element[i].style.color = textColor;
    element[i].style['background-color'] = color;
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

  element = document.getElementsByClassName('p-404');
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
  var j;
  var k;

  for (i = 0; i < element.length; i++) {

    if(element[i].classList.contains("svg-icon-theme")){
      if(light){
        element[i].innerHTML = '<path fill="none" d="M8.652,16.404c-0.186,0-0.337,0.151-0.337,0.337v2.022c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.022C8.989,16.555,8.838,16.404,8.652,16.404z"></path><path fill="none" d="M11.348,16.404c-0.186,0-0.337,0.151-0.337,0.337v2.022c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.022C11.685,16.555,11.535,16.404,11.348,16.404z"></path><path fill="none" d="M17.415,5.281V4.607c0-2.224-1.847-4.045-4.103-4.045H10H6.687c-2.256,0-4.103,1.82-4.103,4.045v0.674H10H17.415z"></path><path fill="none" d="M18.089,10.674V7.304c0,0,0-0.674-0.674-0.674V5.955H10H2.585v0.674c-0.674,0-0.674,0.674-0.674,0.674v3.371c-0.855,0.379-1.348,1.084-1.348,2.022c0,1.253,2.009,3.008,2.009,3.371c0,2.022,1.398,3.371,3.436,3.371c0.746,0,1.43-0.236,1.98-0.627c-0.001-0.016-0.009-0.03-0.009-0.047v-2.022c0-0.372,0.303-0.674,0.674-0.674c0.301,0,0.547,0.201,0.633,0.474h0.041v-0.137c0-0.372,0.303-0.674,0.674-0.674s0.674,0.302,0.674,0.674v0.137h0.041c0.086-0.273,0.332-0.474,0.633-0.474c0.371,0,0.674,0.302,0.674,0.674v2.022c0,0.016-0.008,0.03-0.009,0.047c0.55,0.391,1.234,0.627,1.98,0.627c2.039,0,3.436-1.348,3.436-3.371c0-0.362,2.009-2.118,2.009-3.371C19.438,11.758,18.944,11.053,18.089,10.674z M5.618,18.089c-0.558,0-1.011-0.453-1.011-1.011s0.453-1.011,1.011-1.011s1.011,0.453,1.011,1.011S6.177,18.089,5.618,18.089z M6.629,13.371H5.474c-0.112,0-0.192-0.061-0.192-0.135c0-0.074,0.08-0.151,0.192-0.174l1.156-0.365V13.371z M8.652,12.521c-0.394,0.163-0.774,0.366-1.148,0.55c-0.061,0.03-0.132,0.052-0.2,0.076v-0.934c0.479-0.411,0.906-0.694,1.348-0.879V12.521z M5.281,10c-1.348,0-1.348-2.696-1.348-2.696h5.393C9.326,7.304,6.629,10,5.281,10z M10.674,12.296c-0.22-0.053-0.444-0.084-0.674-0.084s-0.454,0.032-0.674,0.084v-1.168C9.539,11.086,9.762,11.06,10,11.05c0.238,0.01,0.461,0.036,0.674,0.078V12.296z M12.696,13.146c-0.068-0.024-0.14-0.046-0.2-0.076c-0.374-0.184-0.754-0.386-1.148-0.55v-1.188c0.442,0.185,0.87,0.467,1.348,0.879V13.146zM14.382,18.089c-0.558,0-1.011-0.453-1.011-1.011s0.453-1.011,1.011-1.011c0.558,0,1.011,0.453,1.011,1.011S14.94,18.089,14.382,18.089z M13.371,13.371v-0.674l1.156,0.365c0.112,0.022,0.192,0.099,0.192,0.174c0,0.074-0.08,0.135-0.192,0.135H13.371z M14.719,10c-1.348,0-4.045-2.696-4.045-2.696h5.393C16.067,7.304,16.067,10,14.719,10z"></path><path fill="none" d="M10,16.067c-0.186,0-0.337,0.151-0.337,0.337V19.1c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.696C10.337,16.218,10.186,16.067,10,16.067z"></path>'
      } else{
        element[i].innerHTML = '<path fill="none" d="M16.853,8.355V5.888c0-3.015-2.467-5.482-5.482-5.482H8.629c-3.015,0-5.482,2.467-5.482,5.482v2.467l-2.741,7.127c0,1.371,4.295,4.112,9.594,4.112s9.594-2.741,9.594-4.112L16.853,8.355z M5.888,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C6.402,17.137,6.173,17.367,5.888,17.367z M5.203,10c0-0.377,0.19-0.928,0.423-1.225c0,0,0.651-0.831,1.976-0.831c0.672,0,1.141,0.309,1.141,0.309C9.057,8.46,9.315,8.938,9.315,9.315v1.028c0,0.188-0.308,0.343-0.685,0.343H5.888C5.511,10.685,5.203,10.377,5.203,10z M7.944,16.853H7.259v-1.371l0.685-0.685V16.853z M9.657,16.853H8.629v-2.741h1.028V16.853zM8.972,13.426v-1.028c0-0.568,0.46-1.028,1.028-1.028c0.568,0,1.028,0.46,1.028,1.028v1.028H8.972z M11.371,16.853h-1.028v-2.741h1.028V16.853z M12.741,16.853h-0.685v-2.056l0.685,0.685V16.853z M14.112,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C14.626,17.137,14.396,17.367,14.112,17.367z M14.112,10.685h-2.741c-0.377,0-0.685-0.154-0.685-0.343V9.315c0-0.377,0.258-0.855,0.572-1.062c0,0,0.469-0.309,1.141-0.309c1.325,0,1.976,0.831,1.976,0.831c0.232,0.297,0.423,0.848,0.423,1.225S14.489,10.685,14.112,10.685z M18.347,15.801c-0.041,0.016-0.083,0.023-0.124,0.023c-0.137,0-0.267-0.083-0.319-0.218l-2.492-6.401c-0.659-1.647-1.474-2.289-2.905-2.289c-0.95,0-1.746,0.589-1.754,0.595c-0.422,0.317-1.084,0.316-1.507,0C9.239,7.505,8.435,6.916,7.492,6.916c-1.431,0-2.246,0.642-2.906,2.292l-2.491,6.398c-0.069,0.176-0.268,0.264-0.443,0.195c-0.176-0.068-0.264-0.267-0.195-0.444l2.492-6.401c0.765-1.911,1.824-2.726,3.543-2.726c1.176,0,2.125,0.702,2.165,0.731c0.179,0.135,0.506,0.135,0.685,0c0.04-0.029,0.99-0.731,2.165-0.731c1.719,0,2.779,0.814,3.542,2.723l2.493,6.404C18.611,15.534,18.524,15.733,18.347,15.801z"></path>'
      }
    }

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