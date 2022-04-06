function init(){
//add your javascrip between these two lines of code
  function alertFunction(){
    var text1 = document.getElementById("entryinput").value;
    var text2 = document.getElementById("textoutput");
    alert("XiaoHong Kou: "+ text1);
    text2.innerHTML = text1;
  }
  var text3 = document.getElementById('entrybutton');
  text3.addEventListener("click", alertFunction); 
}
window.addEventListener('load', init);