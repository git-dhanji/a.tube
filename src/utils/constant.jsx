import { AiFillHome } from "react-icons/ai";
import { GoVideo } from "react-icons/go";
import { BiHistory } from "react-icons/bi";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" ,ref:'/'},
  {name:"History",icon:<BiHistory/>,type:'Histroy',ref:'/history'},
  {name:"Suscripation",icon:<GoVideo/>,type:'Suscripation',ref:'/subscribe'}
];
