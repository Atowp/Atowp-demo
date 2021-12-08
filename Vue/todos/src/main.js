import Vue from 'vue'
import { component } from 'vue/types/umd'
import App from './App.vue'

new Vue({
    el: '#app',
    components: {
        //[组件名：]组件对象
        App
    },
    template: '<App/>'
}) 