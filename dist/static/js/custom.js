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
      "padding": "25px 50px 38px",
      "margin-top": "4px"
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

//console.log = function() {};
//console.warn = function() {};
//console.error = function() {};
