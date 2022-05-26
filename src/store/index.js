import { createStore } from 'vuex';
import coursesModule from './modules/courses/index.js';
const store=createStore({
    modules:{
        courses:coursesModule
    },
    state(){
        return{
            enterd:'',
         }
        },
        mutations:{
            change(state){
                state.enterd='valid'; 
            },

        } ,
        getters:{
            finalEnter(state){
               return state.enterd='valid'; 
            }, 
        },
        actions:{
            change(context){
                setTimeout(function(){
                    context.commit('change')
                },2000);
            } 
        }
});


export default store;