import { createStore } from 'vuex';
import coursesModule from './modules/courses/index.js';
import auth from './modules/auth.js';


const store=createStore({
    modules:{
        courses:coursesModule,
        auth
    },
    state(){
        return{
            tabikha:false,
            tabikhaSlider:null,
            whytabikha:false,
            workTabikha:false,
            productCenter:false,
            secretIsland:false,
            classifierSelectCourse:null,
            goToNewCourse:1,
            exellentStudentsCourses:[
                {
                    trophy:`/images/trophy1.png`,
                    image:`/images/member6.jpg`,
                    firstName:'فرح',
                    secondName:'السيد',
                    rewardNumber:7
                },
                {
                    trophy:`/images/trophy3.png`,
                    image:`/images/member7.jpg`,
                    firstName:'فراس',
                    secondName:'العابد',
                    rewardNumber:5
                    },
                {
                    trophy:`/images/trophy2.png`,
                    image:`/images/member.jpg`,
                    firstName:'نور',
                    secondName:'الحماد',
                    rewardNumber:3
                    }                 
            ],
            exellentStudentsBooks:[
                {
                    trophy:`/images/trophy1.png`,
                    image:`/images/avatar2.png`,
                    firstName:'حازم',
                    secondName:'السروجي',
                    rewardNumber:5
                },
                {
                    trophy:`/images/trophy3.png`,
                    image:`/images/member5.jpg`,
                    firstName:'سمر',
                    secondName:'الأخرس',
                    rewardNumber:4
                    },
                {
                    trophy:`/images/trophy2.png`,
                    image:`/images/avatar1.png`,
                    firstName:'لؤي',
                    secondName:'الكشك',
                    rewardNumber:2
                    },                 
            ],
            contact:{
                name:null,
                letter:null,
                image:`/images/avatar10.png`
            },
            ratingStar:null,
            courseReward:1,
            bookReward:1,
            
            
         }
        },
        mutations:{
        },
        getters:{
        },
        actions:{


        }
});


export default store;