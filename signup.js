import{ addDoc, auth, collection, createUserWithEmailAndPassword, db, setDoc} from "./firebase.js"

const email=document.querySelector("#email-signup")
const password= document.querySelector("#email-password")
const userName= document.querySelector("#username")
const userPhone= document.querySelector("#phone")
const userbirthdate= document.querySelector("#date") 

const adduserData= async ()=>{
    try {
        if(!email&&!password&&userName&&userPhone){
            alert("Fill the required fields")
            return
        }
        const userRegister= await createUserWithEmailAndPassword(auth, email.value, password.value)
        console.log(userRegister.user)
        await setDoc(doc(db,"users",userRegister.uid),{
            useremail:email,
            fullName:userName,
            phoneNumber:userPhone,
            birthDay:userbirthdate
        })
        console.log("userData",userRegister)
        window.location.href="./index.html"
    } catch (error) {
        console.log("erroe",error.message)
    }
}