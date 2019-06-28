import _ from "lodash";
import printMe from "./print.js";

function component() {
  let element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack", "gogogo lol 22 33"], " ");

  btn.innerHTML = "点击这里，然后查看 console！";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
