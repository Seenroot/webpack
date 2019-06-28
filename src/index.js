import { cube } from "./math.js";
import printMe from "./print.js";
import "./styles.css";

function component() {
  var element = document.createElement("pre");
  var btn = document.createElement("button");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );

  btn.innerHTML = "点击这里，然后查看 console！";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  });
}
