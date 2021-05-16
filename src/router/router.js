// import { component } from "vue/types/umd";
import Home from "../components/Home"
import User from "../components/User"
import UserEdit from "../components/UserEdit"
import UserDetail from "../components/UserDetail"
import UserStart from "../components/UserStart"
import Header from "../components/Header"

export const routes=[
    {path:'/',name:"Home",components:{
        default:Home,
        "header-top":Header
    }},
    {path:'/user',name:"user",components:{
        default:User,
        "header-bottom":Header
    },
        children:[
            {path :'',component:UserStart},// /user
            {path :':id',component:UserDetail}, // /user/12
            {path :':id/edit',component:UserEdit,name:"userEdit"} // /user/12/edit          
        ]
    },
    {path:"/redirect",redirect:{name:"user"}}
];