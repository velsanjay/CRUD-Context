import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { UseData } from "../base/DataProvider";

export function EditUser(){
    const { user , setUser } = UseData();

    const {id}=useParams();
    const histroy = useHistory();

    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [email, setEmail] = useState("");
    const [exp, setExp] = useState("");
    const [regNo, setRegNo] = useState("");

    const selectUser = user.find((per)=>per.id==id)

    useEffect(() => {
        setIdx(selectUser.id)
        setName(selectUser.name)
        setEmail(selectUser.email)
        setExp(selectUser.exp)
        setRegNo(selectUser.regNo)
     }, []);

     const updateUser = ()=>{
         const editIndex = user.findIndex(per => per.id == id)
         console.log(editIndex)
          const editedData = {
              id :idx, 
              name, 
              email, 
              exp, 
              regNo
          }
          
            user[editIndex] = editedData
            setUser([...user]); 
            // console.log(user)
            histroy.push("/");
          
           
        }

    return(
        <div className="add">
            <h1>Change Your Detail Mr.{name}!</h1>
            <input 
            className="inp"
            placeholder="id"
            value ={idx}
            onChange={(event)=>setIdx(event.target.value)}
            /><br/><br/>

            <input 
            className="inp"
            placeholder="name"
            value= {name}
            onChange={(event)=>setName(event.target.value)}
            />

            <input 
            className="inp"
            placeholder="email"
            value= {email}
            onChange={(event)=>setEmail(event.target.value)}
            />

            <input 
            className="inp"
            placeholder="experience"
            value = {exp}
            onChange={(event)=>setExp(event.target.value)}
            />

            <input 
            className="inp"
            placeholder="batch"
            value = {regNo}
            onChange={(event)=>setRegNo(event.target.value)}
            /><br/>

            <button
            className="but"
            onClick={updateUser}
            >Commit Changes</button>
        </div>
    )
}