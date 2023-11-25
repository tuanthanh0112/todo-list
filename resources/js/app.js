import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Test from "./components/Test.vue";

const app = createApp({
    components:{
        Test,
    }
});

app.mount("#app")
