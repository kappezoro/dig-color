window.onload = function() {
  var nav = document.getElementsByTagName('nav');

  if(location.host == "localhost:65432"){
    nav[0].style.backgroundColor = '#008b8b';
  } else if (location.hostname == "stg-digdag.com"){
    nav[0].style.backgroundColor = '#ba55d3';
  }
};