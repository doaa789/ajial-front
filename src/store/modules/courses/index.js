import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";


export default{
    namespaced:true,
    state(){
        return{
            courses:[
                {
                    id:'c1',
                    name:'سكراتش للاطفال',
                    description:"يقدم هذا الكورس اساسيات البرمجة بلغة سكراتش للاطفال مما يسهل فهم الانطلاق في عالم البرمجة وتعلم لغات اكثر تعقيدا في المستقبل",
                    SessionNumber:'12'
                },
                {
                    id:'c2',
                    name:'اردوينو لليافعين',
                    description:"يقدم هذا الكورس اساسيات الالكترةنيات البسيطة والعمل على لوحة الاردوينو مع القيام ببناء مشاريع بسيطة وممتعة مما يسهل فهم الانطلاق في عالم الالكترونيات وتعلم العمل على لوحات اكثر تعقيدا في المستقبل",
                    SessionNumber:'20'
                },
            ]
        };
    },
    mutations,
    getters,
    actions
}