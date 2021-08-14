import { HomeBuilder } from "./js/pages/home.js";
import {
  MAIN_TECHNOS,
  SOME_PROJECTS,
  CURRICULUM_VITAE,
} from "./js/data/content-data.js";

const home = new HomeBuilder(MAIN_TECHNOS, SOME_PROJECTS, CURRICULUM_VITAE);
home.render();
