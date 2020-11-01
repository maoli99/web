window.onload = function () {
  var nav = document.getElementById("nav");
  var lists = nav.getElementsByTagName("li");
  var sideline = document.getElementById("sideline");
  var x = parseInt(sideline.style.left);
  var uu = document.getElementsByTagName("ul");

  for (let i = 0; i < lists.length; i++) {
    lists[i].onmouseover = function () {
      moveElement(sideline, i * 104, 9);
    };
  }

  //下划线回去
  uu[0].addEventListener("mouseout", () => {
    uu[0].aa = setTimeout(() => {
      moveElement(sideline, x, 9);
    }, 0);
  });
  //鼠标移动到下一个标签时短时间内over和out都会触发一次，当鼠标还在uu里面时结束函数
  uu[0].addEventListener("mouseover", () => {
    clearTimeout(uu[0].aa);
  });

  function moveElement(element, final_x, interval) {
    if (element.movement) {
      clearTimeout(element.movement);
    }
    var x = parseInt(element.style.left);
    var step;
    if (x == final_x) {
      return true;
    }
    if (x < final_x) {
      step = Math.ceil((final_x - x) / 15);
      x += step;
    }
    if (x > final_x) {
      step = Math.ceil((x - final_x) / 15);
      x -= step;
    }
    element.style.left = x + "px";

    //自调用重复移动
    element.movement = setTimeout(() => {
      moveElement(element, final_x, interval);
    }, interval);
  }
};
