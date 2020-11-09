import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/pages/index";
import Login from "@/pages/login/index";
import Class from "@/pages/class/index"
import Subject from "@/pages/subjects/index"
import School from "@/pages/school/index";
import Department from "@/pages/department/index";
import Signup from "@/pages/signup/index"
import errorPage from "@/pages/404"
import Content from "@/pages/content/index"

Vue.use(VueRouter)

  const routes = 
[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/login",
    name:"login",
    component:Login,
  },
  {
    path:"/signup",
    name:"signup",
    component:Signup,
  }, 
  //!====================================== school-->department-->class--->subject ======================================
  {
    path:"/school/:schoolId/",
    name:"school",
    component:School,
  },
  {
    path:"/school/:schoolId/dept/:deptId/",
    name:"dept",
    component:Department,
  },
  {
    path:"/school/:schoolId/dept/:deptId/class/:classId",
    name:"class",
    component:Class,
  },
  {
    path:"/school/:schoolId/dept/:deptId/class/:classId/subject/:subjectId",
    name:"subject",
    component:Subject,
  },
  {
    path:"/school/:schoolId/dept/:deptId/class/:classId/subject/:subjectId/content/:contentId",
    name:"content",
    component:Content,
  },
  
  // ! ==============    error page   ==============
  {
    path:"/*",
    name:"error",
    component:errorPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
