import{ auth, createUserWithEmailAndPassword, db, setDoc,doc} from "./firebase.js"

const email=document.querySelector("#email-signup")
const password= document.querySelector("#email-password")
const userName= document.querySelector("#username")
const userPhone= document.querySelector("#Phone")
const userbirthdate= document.querySelector("#date") 

const signupHandler= async ()=>{
    try {
        if(!email || !password || !userName || !userPhone || !userbirthdate){
            alert("Enter all the fields")
            return
        }
        const response= await createUserWithEmailAndPassword(auth,email.value,password.value)
        console.log("response",response.user)
        await setDoc(doc(db,"user",response.user.uid),{
            fullName:userName.value,
            userEmail:email.value,
            phoneNumber:userPhone.value,
            birthday:userbirthdate.value
        })
        alert("You Sign up Succeccfully")
        window.location.href="./index.html"
        } catch (error) {
        console.log("error",error.message)
    }
}

window.signupHandler=signupHandler