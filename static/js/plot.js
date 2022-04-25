import { normalizationConst, associatedLeg } from "./function.js";
import { radian, spherToCart } from "./utils.js";
import "https://cdn.plot.ly/plotly-2.11.1.min.js";


let L, M;

let a = [],
  b = [],
  c = [];

let data = [
  {
    type: "scatter3d",
    mode: "lines",
    x: a,
    y: b,
    z: c,
    opacity: 1,
    line: {
      width: 10,
      color: c,
      reversescale: false,
    },
  },
];

function result(l, m, x, phi){
  if (m >= 0)
    return (
      Math.cos(m * phi) * associatedLeg(l, m, x) * normalizationConst(l, m)
    );
  else {
    m = Math.abs(m);
    return (
      Math.sin(m * phi) * associatedLeg(l, m, x) * normalizationConst(l, m)
    );
  }
};

function calculate(a = [], b = [], c = []) {
  for (let i = 0; i <= 360; i++) {
    for (let j = 0; j <= 180; j++) {
      let Phi = radian(i);
      let Theta = radian(j);
      let X = Math.cos(Theta);
      let Y = result(L, M, X, Phi);
      let arr = spherToCart(Y * Y, Phi, Theta);
      a.push(arr[0]);
      b.push(arr[1]);
      c.push(arr[2]);
    }
  }
}

function plot(data) {
  Plotly.newPlot("plot", data, {
    // height: 600,
  });
}



const form = document.getElementById("form");
const errordiv = document.getElementById("error");
const formSection = document.getElementsByClassName("form-section")[0];
const plotSection = document.getElementsByClassName("plot-section")[0];

form.addEventListener("submit", (event) => {
  const valN = parseInt(document.getElementById("n").value.trim());
  const valL = parseInt(document.getElementById("l").value.trim());
  const valM = parseInt(document.getElementById("m").value.trim());
  
  let error;

  if (valN === 0) {
    error = true;
  } else {
    error = false;
  }

  if (!error) {
    if (valL >= 0 && valL <= valN - 1) {
      error = false;
    } else {
      error = true;
    }
  }

  if (!error) {
    if (valM >= -1 * valL && valM <= valL) {
      error = false;
    } else {
      error = true;
    }
  }

  if (error) {
    errordiv.innerHTML = "Incorrect Input";
  } else {
    L = valL;
    M = valM;
    formSection.classList.add("hidden");
    refreshBtn.classList.remove("hidden");
    plotSection.classList.remove("hidden");
    calculate(a, b, c);
    plot(data);

    try {
      document.getElementsByClassName("main-svg")[0].style.width = "0%";
      document.getElementsByClassName("main-svg")[0].style.height = "0%";

      document.getElementsByClassName("main-svg")[1].style.width = "0%";
      document.getElementsByClassName("main-svg")[1].style.height = "0%";

      document.getElementsByClassName("svg-container")[0].style.position = "absolute";
      document.getElementsByClassName("svg-container")[0].style.height = "100vh";
      document.getElementsByClassName("svg-container")[0].style.width = "100vw";
      document.getElementsByClassName("svg-container")[0].style.top = "0vh";
      document.getElementsByClassName("svg-container")[0].style.left = "0vw";

      document.getElementsByClassName("user-select-none")[0].style.position = "absolute";
      document.getElementsByClassName("user-select-none")[0].style.height = "100vh";
      document.getElementsByClassName("user-select-none")[0].style.width = "100vw";
      document.getElementsByClassName("user-select-none")[0].style.top = "0vh";
      document.getElementsByClassName("user-select-none")[0].style.left = "0vw";

      document.getElementById("scene").style.position = "relative";
      document.getElementById("scene").style.height = "80vh";
      document.getElementById("scene").style.width = "100vw";
      document.getElementById("scene").style.top = "5vh";
      document.getElementById("scene").style.left = "0vw";
      document.getElementById("scene").style.alignItems = "center";

    } catch (err) {}
  }
  event.preventDefault();
});
