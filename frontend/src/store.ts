import {create} from "zustand";
type User={userId:number;username:string;email:string;role:string};
type State={user:User|null;login:(u:User)=>void;logout:()=>void};
export const useAuth=create<State>(set=>({user:JSON.parse(localStorage.getItem("eggora_user")||"null"),login:u=>{localStorage.setItem("eggora_user",JSON.stringify(u));set({user:u})},logout:()=>{localStorage.removeItem("eggora_user");set({user:null})}}));