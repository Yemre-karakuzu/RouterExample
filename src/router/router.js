import Home from "../components/Home"
import User from "../components/User"

export const routes=[
    {path:'/',component :Home ,name:"Home"},
    {path:'/user/:id',component :User,name:"user"}
];