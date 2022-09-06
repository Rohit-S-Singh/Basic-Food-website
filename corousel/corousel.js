alert("hello");
document.getElementById("play-forward-btn").addEventListener("click", () => {
  var container = document.getElementById("container");

  
  //   container.style.marginLeft = Number(container.style.marginLeft) - 100;
  container.style.translateX-=15;
  container.style.backgroundColor = 'red';
  console.log("cdfcdcdsc",container.style);
//   Number(container.style.marginLeft) - 100;
//   $("#container").css({ marginLeft: "-=15px" });



//   $("#container").animate({ marginLeft: "-=15px" }, function () {
//     $("#container").css({ marginLeft: "-=15px" });
//   });
});
