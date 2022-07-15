import Vue from 'vue'
import Router from 'vue-router'
import helloWorld from "../components/HelloWorld";
import user from "../components/User";
import student from "../components/student";



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: helloWorld},
    {path: '/user', component: user},
    {path: '/student', component: student},
  ]
})
