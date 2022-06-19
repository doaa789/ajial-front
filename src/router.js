import{createRouter, createWebHistory}from 'vue-router';

import App from './App.vue';
import SignUp from './components/layout/SignUp.vue'
import SignIn from './components/layout/SignIn.vue'
import MyProfile from './components/layout/MyProfile.vue'
import BooksList from './pages/BooksList.vue'
import SearchCourse from './pages/thecourses/SearchCourse.vue'
import ListofCourses from './pages/thecourses/ListofCourses.vue'
import CoursesDetails from './pages/thecourses/CoursesDetails.vue'
import CourseSession from './pages/thecourses/CourseSession.vue'
import StartMonster from './pages/theGames/StartMonster.vue'
import MathMonster from './pages/theGames/MathMonster.vue'
import SecretIsland from './pages/theGames/SecretIsland.vue'
import NotFound from './pages/NotFound.vue'


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:App},
        {path:'/signup',component:SignUp},
        {path:'/signin',component:SignIn},
        {path:'/MyProfile',component:MyProfile},
        {path:'/library',component:BooksList},
        {path:'/courses',component:SearchCourse},
        {path:'/courses/techniqe',component:ListofCourses},
        {path:'/courses/scratch',component:CoursesDetails},
        {path:'/courses/joiningScratch',component:CourseSession},
        {path:'/TheSecretIsland',component:SecretIsland},
        {path:'/games',component:StartMonster},
        {path:'/PlayGame',component:MathMonster},
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