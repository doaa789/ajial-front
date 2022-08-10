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
import tabikhaUp from './pages/tabikha/tabikhaUp'
import tabikhaLearn from './pages/tabikha/tabikhaLearn'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/home',component:App},
        {path:'/tabikha',component:tabikhaUp},
        {path:'/tabikha/HowToWork',component:tabikhaLearn},
        {path:'/signup',component:SignUp},
        {path:'/signin',component:SignIn},
        {path:'/MyProfile',component:MyProfile},
        {path:'/library',component:BooksList},
        {path:'/courses',component:SearchCourse},
        {path:'/courses/courseType1',component:ListofCourses},
        {path:'/courses/courseType1/courseNum1',component:CoursesDetails},
        {path:'/courses/courseType1/courseNum1/joiningCourse1',component:CourseSession},
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