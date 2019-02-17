var int = self.setInterval("varupdate()", 250);

function varupdate() {
    var xmlhttp, xmlDoc;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET", "eccontrol.xml", false);
  xmlhttp.send();
  xmlDoc = xmlhttp.responseXML;
  document.getElementById("date_time").innerHTML = xmlDoc.getElementsByTagName("date_time")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW101").innerHTML = xmlDoc.getElementsByTagName("MW101")[0].childNodes[0].nodeValue;
  document.getElementById("MW201").innerHTML = xmlDoc.getElementsByTagName("MW201")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW301").innerHTML = xmlDoc.getElementsByTagName("MW301")[0].childNodes[0].nodeValue;
  document.getElementById("MW401").innerHTML = xmlDoc.getElementsByTagName("MW401")[0].childNodes[0].nodeValue;
  //
  document.getElementById("MW102").innerHTML = xmlDoc.getElementsByTagName("MW102")[0].childNodes[0].nodeValue;
  document.getElementById("MW202").innerHTML = xmlDoc.getElementsByTagName("MW202")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW302").innerHTML = xmlDoc.getElementsByTagName("MW302")[0].childNodes[0].nodeValue;
  document.getElementById("MW402").innerHTML = xmlDoc.getElementsByTagName("MW402")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW103").innerHTML = xmlDoc.getElementsByTagName("MW103")[0].childNodes[0].nodeValue;
  document.getElementById("MW203").innerHTML = xmlDoc.getElementsByTagName("MW203")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW303").innerHTML = xmlDoc.getElementsByTagName("MW303")[0].childNodes[0].nodeValue;
  document.getElementById("MW403").innerHTML = xmlDoc.getElementsByTagName("MW403")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW104").innerHTML = xmlDoc.getElementsByTagName("MW104")[0].childNodes[0].nodeValue;
  document.getElementById("MW204").innerHTML = xmlDoc.getElementsByTagName("MW204")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW304").innerHTML = xmlDoc.getElementsByTagName("MW304")[0].childNodes[0].nodeValue;
  document.getElementById("MW404").innerHTML = xmlDoc.getElementsByTagName("MW404")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW105").innerHTML = xmlDoc.getElementsByTagName("MW105")[0].childNodes[0].nodeValue;
  document.getElementById("MW205").innerHTML = xmlDoc.getElementsByTagName("MW205")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW305").innerHTML = xmlDoc.getElementsByTagName("MW305")[0].childNodes[0].nodeValue;
  document.getElementById("MW405").innerHTML = xmlDoc.getElementsByTagName("MW405")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW106").innerHTML = xmlDoc.getElementsByTagName("MW106")[0].childNodes[0].nodeValue;
  document.getElementById("MW206").innerHTML = xmlDoc.getElementsByTagName("MW206")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW306").innerHTML = xmlDoc.getElementsByTagName("MW306")[0].childNodes[0].nodeValue;
  document.getElementById("MW406").innerHTML = xmlDoc.getElementsByTagName("MW406")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW107").innerHTML = xmlDoc.getElementsByTagName("MW107")[0].childNodes[0].nodeValue;
  document.getElementById("MW207").innerHTML = xmlDoc.getElementsByTagName("MW207")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW307").innerHTML = xmlDoc.getElementsByTagName("MW307")[0].childNodes[0].nodeValue;
  document.getElementById("MW407").innerHTML = xmlDoc.getElementsByTagName("MW407")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW108").innerHTML = xmlDoc.getElementsByTagName("MW108")[0].childNodes[0].nodeValue;
  document.getElementById("MW208").innerHTML = xmlDoc.getElementsByTagName("MW208")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW308").innerHTML = xmlDoc.getElementsByTagName("MW308")[0].childNodes[0].nodeValue;
  document.getElementById("MW408").innerHTML = xmlDoc.getElementsByTagName("MW408")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW109").innerHTML = xmlDoc.getElementsByTagName("MW109")[0].childNodes[0].nodeValue;
  document.getElementById("MW209").innerHTML = xmlDoc.getElementsByTagName("MW209")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW309").innerHTML = xmlDoc.getElementsByTagName("MW309")[0].childNodes[0].nodeValue;
  document.getElementById("MW409").innerHTML = xmlDoc.getElementsByTagName("MW409")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW110").innerHTML = xmlDoc.getElementsByTagName("MW110")[0].childNodes[0].nodeValue;
  document.getElementById("MW210").innerHTML = xmlDoc.getElementsByTagName("MW210")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW310").innerHTML = xmlDoc.getElementsByTagName("MW310")[0].childNodes[0].nodeValue;
  document.getElementById("MW410").innerHTML = xmlDoc.getElementsByTagName("MW410")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW111").innerHTML = xmlDoc.getElementsByTagName("MW111")[0].childNodes[0].nodeValue;
  document.getElementById("MW211").innerHTML = xmlDoc.getElementsByTagName("MW211")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW311").innerHTML = xmlDoc.getElementsByTagName("MW311")[0].childNodes[0].nodeValue;
  document.getElementById("MW411").innerHTML = xmlDoc.getElementsByTagName("MW411")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW112").innerHTML = xmlDoc.getElementsByTagName("MW112")[0].childNodes[0].nodeValue;
  document.getElementById("MW212").innerHTML = xmlDoc.getElementsByTagName("MW212")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW312").innerHTML = xmlDoc.getElementsByTagName("MW312")[0].childNodes[0].nodeValue;
  document.getElementById("MW412").innerHTML = xmlDoc.getElementsByTagName("MW412")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW113").innerHTML = xmlDoc.getElementsByTagName("MW113")[0].childNodes[0].nodeValue;
  document.getElementById("MW213").innerHTML = xmlDoc.getElementsByTagName("MW213")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW313").innerHTML = xmlDoc.getElementsByTagName("MW313")[0].childNodes[0].nodeValue;
  document.getElementById("MW413").innerHTML = xmlDoc.getElementsByTagName("MW413")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW114").innerHTML = xmlDoc.getElementsByTagName("MW114")[0].childNodes[0].nodeValue;
  document.getElementById("MW214").innerHTML = xmlDoc.getElementsByTagName("MW214")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW314").innerHTML = xmlDoc.getElementsByTagName("MW314")[0].childNodes[0].nodeValue;
  document.getElementById("MW414").innerHTML = xmlDoc.getElementsByTagName("MW414")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW115").innerHTML = xmlDoc.getElementsByTagName("MW115")[0].childNodes[0].nodeValue;
  document.getElementById("MW215").innerHTML = xmlDoc.getElementsByTagName("MW215")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW315").innerHTML = xmlDoc.getElementsByTagName("MW315")[0].childNodes[0].nodeValue;
  document.getElementById("MW415").innerHTML = xmlDoc.getElementsByTagName("MW415")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW116").innerHTML = xmlDoc.getElementsByTagName("MW116")[0].childNodes[0].nodeValue;
  document.getElementById("MW216").innerHTML = xmlDoc.getElementsByTagName("MW216")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW316").innerHTML = xmlDoc.getElementsByTagName("MW316")[0].childNodes[0].nodeValue;
  document.getElementById("MW416").innerHTML = xmlDoc.getElementsByTagName("MW416")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW117").innerHTML = xmlDoc.getElementsByTagName("MW117")[0].childNodes[0].nodeValue;
  document.getElementById("MW217").innerHTML = xmlDoc.getElementsByTagName("MW217")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW317").innerHTML = xmlDoc.getElementsByTagName("MW317")[0].childNodes[0].nodeValue;
  document.getElementById("MW417").innerHTML = xmlDoc.getElementsByTagName("MW417")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW118").innerHTML = xmlDoc.getElementsByTagName("MW118")[0].childNodes[0].nodeValue;
  document.getElementById("MW218").innerHTML = xmlDoc.getElementsByTagName("MW218")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW318").innerHTML = xmlDoc.getElementsByTagName("MW318")[0].childNodes[0].nodeValue;
  document.getElementById("MW418").innerHTML = xmlDoc.getElementsByTagName("MW418")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW119").innerHTML = xmlDoc.getElementsByTagName("MW119")[0].childNodes[0].nodeValue;
  document.getElementById("MW219").innerHTML = xmlDoc.getElementsByTagName("MW219")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW319").innerHTML = xmlDoc.getElementsByTagName("MW319")[0].childNodes[0].nodeValue;
  document.getElementById("MW419").innerHTML = xmlDoc.getElementsByTagName("MW419")[0].childNodes[0].nodeValue;
  // 
  document.getElementById("MW120").innerHTML = xmlDoc.getElementsByTagName("MW120")[0].childNodes[0].nodeValue;
  document.getElementById("MW220").innerHTML = xmlDoc.getElementsByTagName("MW220")[0].childNodes[0].nodeValue / 10;
  document.getElementById("MW320").innerHTML = xmlDoc.getElementsByTagName("MW320")[0].childNodes[0].nodeValue;
  document.getElementById("MW420").innerHTML = xmlDoc.getElementsByTagName("MW420")[0].childNodes[0].nodeValue;
}