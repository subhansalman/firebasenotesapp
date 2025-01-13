

import {app, collection, addDoc, getDocs, doc, updateDoc, db, setDoc} from "./firebase.js"

const authCheck= async ()=>{
    const userUID= localStorage.getItem("uid")
    if(!userUID){
        window.location.replace("./index.html")
    }
    const userData= await getDocs(doc(db,"users",userUID))
    console.log(userData.data())
}





console.log(app)
const inputNotes=document.querySelector("#inputvalue");
const parentNotes=document.querySelector("#parent");

const addData= async ()=>{
    try {
        if(!inputNotes.value){
            alert("Enter the valid Note Value")
            return
        }

        const userUID=localStorage.getItem("uid");
        console.log("userUID",userUID)

        const response= await addDoc(collection(db,"userNotes"),{
            todo:inputNotes.value,
            uid:userUID
        })

        console.log("response",response.user)

        inputNotes.value="",

        fetchData()

    } catch (error) {
        console.log("error",error.message)
    }
}

const fetchData= async ()=>{
    try {
       const gettingQuery= await getDocs(collection(db,"userNotes"))
       parentNotes.innerHTML=""
       gettingQuery.forEach((doc)=>{
        const storeUID= localStorage.getItem("uid")
        const docUID=doc.data().uid

        if(docUID===storeUID){
            parentNotes.innerHTML+=`<div class="col-sm-6 col-md-4 col-lg-3 mb-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${doc.data().todo}</h5>
        <button class="btn btn-success" onclick="updateNotes(this)" id="${doc.id}">Edit</button>
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
        console.log("userEdit",ele.id)
        const editNote=prompt("DEnter Your Value")
        if(!editNote){
            alert("Enter the edit value")
            return
        }
        await updateDoc (doc(db,"userNotes",ele.id),{
            todo:editNote
        })
        fetchData()
    } catch (error) {
        console.log("error",error.message)
    }
}



window.addData=addData
window.fetchData = fetchData
window.updateNotes=updateNotes
window.authCheck=authCheck