// import { component } from "vue/types/umd";
import Home from "../components/Home"
import User from "../components/User"
import UserEdit from "../components/UserEdit"
import UserDetail from "../components/UserDetail"
import UserStart from "../components/UserStart"

export const routes=[
    {path:'/',component :Home ,name:"Home"},
    {path:'/user',component :User,name:"user",
        children:[
            {path :'',component:UserStart},// /user
            {path :':id',component:UserDetail}, // /user/12
            {path :':id/edit',component:UserEdit,name:"userEdit"} // /user/12/edit

            
        ]
    }
];