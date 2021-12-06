import { add } from "./main";
import "./index.scss";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/manorSW.js");
}

console.log("hello world", add(1, 0), "dev");
