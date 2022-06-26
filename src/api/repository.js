import api from './api';
import store from "../store";

export default {

    createSession(){
        return api.get('/sanctum/csrf-cookie')
    },
    login(params){
        return api.post('login', params);
    },
    signUp(params){
        return api.post('register', params);
    },






    
    logout(params){
        return api.post('logout',params);
    },
    getArticles(){
        return api.get('articles')
    },
    getUserArticles(params){
        return api.post('user/articles', params)
    },
    getUserArticle(page, params){
        return api.post('user/article?page='+page, params)
    },
    getUserGoals(params){
        return api.post('user/goals', params)
    },
    getRandomArticles(){
        return api.get('user/random/articles')
    },
    getFourArticles(){
        return api.get('user/four/articles')
    },
    getArticle(params){
        return api.get('article/'+params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} })
    },
    getCountries(){
        return api.get('countries')
    },
    getCities(params){
        return api.get('cities/'+params)
    },
    addArticle(params){
        return api.post('article', params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    addComplain(params){
        return api.post('complains', params);
    },
    getPage(params){
        return api.get('page/'+ params);
    },
    getComplains(){
        return api.get('complains',{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    addCountry(params){
        return api.post('country', params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    addCity(params){
        return api.post('city', params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    addPage(params){
        return api.post('article/page', params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    uploadImage(params){
        return api.post('image-upload', params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    deleteArticle(params){
        return api.delete('article/'+params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    deleteCountry(params){
        return api.delete('country/'+params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    deleteCity(params){
        return api.delete('city/'+params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    deletePage(params){
        return api.delete('article/page/'+params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    deleteComplain(params){
        return api.delete('complain/'+params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    publishArticle(params){
        return api.post('article/publish', params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    updatePage(params){
        return api.put('article/page', params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
    updateArticle(params){
        return api.put('article', params,{ headers: {"Authorization" : `Bearer ${store.getters.user.token}`} });
    },
}