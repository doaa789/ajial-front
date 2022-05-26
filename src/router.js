import{createRouter, createWebHistory}from 'vue-router';

import App from './App.vue';
import SearchCourse from './pages/thecourses/SearchCourse.vue'
import ListofCourses from './pages/thecourses/ListofCourses.vue'
import CoursesDetails from './pages/thecourses/CoursesDetails.vue'
import JoinCourse from './pages/thecourses/JoinCourse.vue'
import BooksList from './pages/BooksList.vue'
import StartPlay from './pages/StartPlay.vue'
import PlayGames from './pages/PlayGames.vue'
import startGame3 from './pages/startGame3.vue'
import MyProfile from './pages/MyProfile.vue'
import NotFound from './pages/NotFound.vue'
import SignIn from './components/layout/SignIn.vue'
import SignUp from './components/layout/SignUp.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:App},
        {path:'/signup',component:SignUp},
        {path:'/signin',component:SignIn},
        {path:'/MyProfile',component:MyProfile},
        {path:'/courses/techniqe',component:ListofCourses},
        {path:'/courses',component:SearchCourse},
        {path:'/courses/scratch',component:CoursesDetails},
        {path:'/courses/joiningScratch',component:JoinCourse},
        {path:'/library',component:BooksList},
        {path:'/games',component:StartPlay},
        {path:'/PlayGame',component:PlayGames},
        {path:'/contact',component:startGame3},
        {path:'/:notFound(.*)',component:NotFound},


    ],
    linkActiveClass:'active',
    scrollBehavior(to,from,savedPosition){
        if (savedPosition){
            return savedPosition;
        }
        return{left:0,top:0};
    }

});

export default router;