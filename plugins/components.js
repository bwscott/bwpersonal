import Vue from 'vue'

//Components
Vue.component('main-nav', () => import('@/components/MainNavigation.vue'))
Vue.component('home', () => import('@/components/Home.vue'))
Vue.component('news-archive', () => import('@/components/NewsArchive.vue'))
Vue.component('news', () => import('@/components/News.vue'))

//Layouts
Vue.component('full-width-layout', () => import('@/layouts/full-width.vue'))