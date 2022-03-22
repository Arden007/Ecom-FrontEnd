import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import 'mdb-ui-kit/css/mdb.min.css';

createApp(App).use(router).use(mdb).use({Input}).mount("#app");
