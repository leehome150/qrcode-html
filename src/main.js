function mytime() {
  var a = new Date();
  var b = a
    .toLocaleTimeString("chinese", { hour12: false })
    .replace(/[\u4e00-\u9fa5]+/g, "")
    .split(":")
    .slice(0, 1);
  var e = a
    .toLocaleTimeString("chinese", { hour12: false })
    .replace(/[\u4e00-\u9fa5]+/g, "")
    .split(":")
    .slice(1, 2);
  var f = a
    .toLocaleTimeString("chinese", { hour12: false })
    .replace(/[\u4e00-\u9fa5]+/g, "")
    .split(":")
    .slice(2, 3);
  var c = a.toLocaleDateString().split("/")[1] + "月";
  var d = a.toLocaleDateString().split("/")[2] + "日";
  document.getElementById("date").innerHTML = c + d;
  document.getElementById("time").innerHTML = b + ":" + e;
  document.getElementById("miao").innerHTML = f;
}
setInterval(function () {
  mytime();
}, 1000);
