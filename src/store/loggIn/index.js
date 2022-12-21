import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
export default {
    namespaced:true,
state (){
    return {
        loggedIn:false
    };
},
mutations:mutations,
actions:actions,
getters:getters
};