function subLink(num) {
	
  var linkurls = new Array;
  
  linkurls[1] = '../YSTool/index.html';    //main menu
  
  linkurls[2] = '../YSTool/Info.html';     //company info
  linkurls[22] = '../YSTool/ShowMap.html'; //company info
  
  linkurls[3] = '../YSTool/Products.html'; //products info
  linkurls[5] = '../YSTool/Checkout.html'; //checkout page
  
  window.location = linkurls[num];
}