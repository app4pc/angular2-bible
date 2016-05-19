/**
 * Created by NB on 20-Jan-16.
 */
window.localStorage.setItem('idleTime', "0");
var logInOpt=function(p1,prm){
    if(p1=='1'){
        $(".login-form,.forget-form,.register-form").hide();
    }
    $("."+prm).slideDown();
	if(prm == "register-form"){
      $(".myLog-cont").css({
        "padding": "7px 50px 17px",
        "margin-top": "-13px"
      });
    }else{
      $(".myLog-cont").css({
        "padding": "40px 50px",
        "margin-top": "75px"
      });
    }
};
$(document).ready(function () {
  //Zero the idle timer on mouse movement.
  $(this).mousemove(function (e) {
    window.localStorage.setItem('idleTime', "0");
  });
  $(this).keypress(function (e) {
    window.localStorage.setItem('idleTime', "0");
  });
});

var encrptIt=function(prm){
	console.log(typeof prm,'enc',prm);
	if(typeof prm !="string" || typeof prm !="undefined"){
		prm = "encc44$-%)"+JSON.stringify(prm);
	}
	return CryptoJS.AES.encrypt(prm,'769Edg eNetworks1').toString();
};
var decreptIt=function(prm){
	console.log(typeof prm,'dec',prm);
  let styr = CryptoJS.AES.decrypt(prm,'769Edg eNetworks1').toString(CryptoJS.enc.Utf8);
	if(styr.indexOf("encc44$-%)") != -1){
    return JSON.parse(styr.replace("encc44$-%)",""));
  }else{
    return styr;
  }
};

//console.log = function() {};
//console.warn = function() {};
//console.error = function() {};
