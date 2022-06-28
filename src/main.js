import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.css";

import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign);

createApp(App).mount("#app");
