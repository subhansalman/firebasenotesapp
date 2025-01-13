const authCheck=()=>{
    const userUID= localStorage.getItem("uid")
    if(userUID){
        window.location.replace("./todo.html")
    }
}

import {auth,signInWithEmailAndPassword} from "./firebase.js"

const email=document.querySelector("#email-signup")
const password= document.querySelector("#email-password")

const loginHandler= async()=>{
    try {
        const response= await signInWithEmailAndPassword(auth, email.value, password.value)
        const uid=response.user.uid
        localStorage.setItem("uid",uid)

        console.log("uid",uid)
        window.location.replace("./todo.html")


    } catch (error) {
        console.log("error",error.message)
        alert("error",error.code)
    }
}
window.authCheck=authCheck
window.loginHandler=loginHandler