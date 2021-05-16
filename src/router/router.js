// import { component } from "vue/types/umd";
import Home from "../components/Home"
import Header from "../components/Header"




// import User from "../components/User"
// import UserEdit from "../components/UserEdit"
// import UserDetail from "../components/UserDetail"
// import UserStart from "../components/UserStart"
// import { resolve } from "core-js/fn/promise"


const User= resolve=>{
    require.ensure(["../components/User.vue"],()=>{
        resolve(require("../components/User.vue"));
    })
}
const UserStart= resolve=>{
    require.ensure(["../components/UserStart.vue"],()=>{
        resolve(require("../components/UserStart.vue"));
    })
}

const UserEdit= resolve=>{
    require.ensure(["../components/UserEdit.vue"],()=>{
        resolve(require("../components/UserEdit.vue"));
    })
}

const UserDetail= resolve=>{
    require.ensure(["../components/UserDetail.vue"],()=>{
        resolve(require("../components/UserDetail.vue"));
    })
}



export const routes=[
    {path:'/',name:"Home",components:{
        default:Home,
        "header-top":Header
    }},
    {path:'/user',name:"user",components:{
        default:User,
        "header-top":Header
    },
        children:[
            {path :'',component:UserStart},// /user
            {path :':id',component:UserDetail,beforeEnter:(to,from,next)=>{
                next();
            }}, // /user/12
            {path :':id/edit',component:UserEdit,name:"userEdit"} // /user/12/edit          
        ]
    },
    {path:"/redirect",redirect:{name:"user"}},
    {path:"*",redirect:"/"}
];