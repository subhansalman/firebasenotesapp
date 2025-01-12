import{ auth, createUserWithEmailAndPassword, db, setDoc,doc} from "./firebase.js"

const email=document.querySelector("#email-signup")
const password= document.querySelector("#email-password")
const userName= document.querySelector("#username")
const userPhone= document.querySelector("#Phone")
const userbirthdate= document.querySelector("#date") 

const signupHandler= async ()=>{
    try {
        if(!email || !password || !userName || !userPhone || !userbirthdate){
            alert("Enter All The Required Fields")
            return
        }
        const userRegiter= await createUserWithEmailAndPassword(auth, email.value, password.value)
        console.log("user",userRegiter.user)
        await setDoc(doc(db,"users",userRegiter.user.uid),{
            userEmail:email.value,
            fullName:userName.value,
            phoneNumber:userPhone.value,
            birthDay:userbirthdate.value
        })
        alert("User Succefully Signed Up")
        window.location.href="./index.html"
    } catch (error) {
        console.log("error",error.message)
    }
}

window.signupHandler=signupHandler