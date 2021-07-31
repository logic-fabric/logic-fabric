import { HomeBuilder } from "./js/home.js";
import { MAIN_TECHNOS } from "./js/data.js";

const home = new HomeBuilder(MAIN_TECHNOS);
home.render();
