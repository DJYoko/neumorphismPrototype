import Vue from 'vue'
import 'babel-polyfill'
import index from './components/index';

window.addEventListener(
    'DOMContentLoaded',
    function () {

        new Vue({
            components: {
                index
            }
        }).$mount('#app')
    },
    false
)