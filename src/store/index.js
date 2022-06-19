import { createStore } from 'vuex';
import coursesModule from './modules/courses/index.js';
import repository from "../api/repository";


const store=createStore({
    modules:{
        courses:coursesModule,
        auth:{
            state: () => ({
              user:sessionStorage.user ? JSON.parse(sessionStorage.getItem('user')) : null
            }),
            getters:{
              user: state => state.user,
              authenticated: state => state.user !== null,
            },
            mutations:{
              SET_USER(state, user){
                state.user = user;
              }
            },
            actions:{
              async login({commit}, user){
      
                // await repository.createSession();
                const {data} = await repository.login(user);
                commit('SET_USER', data);
                sessionStorage.user = JSON.stringify(data)
      
              },
              async signup({commit}, user){
      
                await repository.createSession();
                const {data} = await repository.signUp(user);
                commit('SET_USER', data);
                sessionStorage.user = JSON.stringify(data)
      
              },
              async logout({commit}){
      
                await repository.logout();
                commit('SET_USER', null);
                sessionStorage.removeItem('user') ;
      
              }
            }
          }
    },
    state(){
        return{
            enterd:'',
            tabikha:false,
            whytabikha:false,
            workTabikha:false,
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