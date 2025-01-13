const authCheck=()=>{
    const userUID= localStorage.getItem("uid")
    if(userUID){
        window.location.replace("./index.html")
    }
}

import {app, collection, addDoc, getDocs, doc, updateDoc, db} from "./firebase.js"

console.log(app)
const inputNotes=document.querySelector("#inputvalue");
const parentNotes=document.querySelector("#parent");

const addData= async ()=>{
    try {
        if(!inputNotes.value){
            alert("Ener Valid Notes")
            return
        }
        const todoObj={
            todo:inputNotes.value
        }
        const response= await addDoc(collection(db,"userNotes"),todoObj)
        console.log("response",response)
        inputNotes.value="";
        fetchData()

    } catch (error) {
        console.log("error",error.message)
    }
}

const fetchData= async ()=>{
    try {
       const gettingQuery= await getDocs(collection(db,"userNotes"))
    parentNotes.innerHTML="";
    gettingQuery.forEach((doc)=>{
        console.log(doc.data())
        if(doc.data().uid === localStorage.getItem("uid")){

            parentNotes.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">${doc.data().todo}</h5>
            <button class="btn btn-success" onclick="updateNotes(this)" id="${doc.id}">Edit Notes</button>
            </div>
            </div>
            </div>`
            }
    })
    } catch (error) {
        console.log("error",error.message)
    }
}

const updateNotes= async(ele)=>{
    try {
        console.log("User Edit",ele.id)
        const editNotes=prompt("Enter Your Editted value")
        if(!editNotes){
            alert("Enter the edtted Value")
            return
        }
        await updateDoc(doc(db,"userNotes",ele.id),{
            todo:editNotes
        })
    } catch (error) {
        console.log("error",error.message)
    }
}



window.addData=addData
window.fetchData = fetchData
window.updateNotes=updateNotes
window.authCheck=authCheck