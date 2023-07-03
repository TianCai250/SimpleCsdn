var style = document.createElement("style");
style.setAttribute("type", "text/css");
const cssString =
  ".toolbar-advert,.blog_container_aside,.recommend-right,#mys-wrapper,.more-toolbox-new,.type_download{display: none!important};";
const cssText = document.createTextNode(cssString);
style.appendChild(cssText);
const heads = document.getElementsByTagName("head");
heads[0].appendChild(style);
