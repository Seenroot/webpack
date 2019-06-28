import _ from "lodash";
import "./styles.css";
import Print from './print';

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function component() {
  var element = document.createElement("div");
  var button = document.createElement("button");
  var br = document.createElement("br");

  button.innerHTML = "Click me and look at the console!";
  element.innerHTML = _.join(["Hello", "webpack go"], " ");
  element.appendChild(br);
  element.appendChild(button);

  element.onclick = Print.bind(null, 'Hello webpack!');

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  
  // 静态引入、动态引入同时存在时，不会将动态引入文件单独打包成一个chunk
  // 切换是否 静态引入 依赖时，vendor hash 不会改变
  // 切换是否 动态引入 依赖时，vendor hash 会发生改变
  button.onclick = e =>
    import(/* webpackChunkName: "print" */ "./print").then(module => {
      var print = module.default;

      print();
    });
  return element;
}

document.body.appendChild(component());
