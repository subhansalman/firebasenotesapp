import {app, collection, addDoc, getDocs, doc, updateDoc, db} from "./firebase.js"

const inputNotes=document.querySelector("#input-notes");
const parentNotes=document.querySelector("#parent");

const addTodo= async()=>{
    try {
        if(!inputNotes.value){
            alert("Enter A task")
            return
        }
        const todoObj ={
            todo:inputNotes.value
        }

        const response = await addDoc(collection(db,"userTodos"),todoObj)
        console.log("response",response)
        fetchData()
    } catch (error) {
        console.log("error",error.message)
    }
}

const fetchData= async ()=>{
    try {
        const tempArr = []

        const gettingQuery= await getDocs(collection(db,"userTodos"))
        parentNotes.innerHTML=""
        gettingQuery.forEach= (doc)=>{
            console.log(doc.data())

            parentNotes.innerHTML=`<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${doc.data().todo}</h5>
                <button type="button" class="btn btn-success" id=${doc.id}>Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
            </div>`
        }
    } catch (error) {
        console.log("error",error.message)
    }
}
const updateNotes = async(ele)=>{
    try {
        console.log(ele.id)
        const editNote=inputNotes.value
        console.log("editNote",editNote)
        if(!editNote){
            alert("Enter the editted value")
            return
        }
        await updateDoc(doc(db,"userTodos",ele.id),{
            todo:editNote
        })
        fetchData()
    } catch (error) {
        
    }
}

