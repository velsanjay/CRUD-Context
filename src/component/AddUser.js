import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { UseData } from "../base/DataProvider";


export function AddUser() {
    const { user , setUser } = UseData();
    const histroy = useHistory();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [exp, setExp] = useState("");
    const [regNo, setRegNo] = useState("");

    const addNewUser = (e) => {

        const newUser = {
            id,
            name,
            email,
            regNo,
            exp
        }
    e.preventDefault()
     
        setUser([...user, newUser])
        // console.log(user)
        histroy.push("/")
    }
    return (
        <div className="add">
            <h1>Add New Student</h1>
            <form action="https://www.google.com/">
                <input
                    className="inp"
                    value={id}
                    placeholder="id"
                    min={10}
                    onChange={(e) => setId(e.target.value)}
                    required
                /><br />

                <input
                    className="inp"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name" /><br />

                <input
                    value={regNo}
                    className="inp"
                    onChange={(e) => setRegNo(e.target.value)}
                    placeholder="Reg No" /><br />

                <input
                    value={email}
                    className="inp"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" /><br />

                <input
                    value={exp}
                    className="inp"
                    onChange={(e) => setExp(e.target.value)}
                    placeholder="Exp" /><br />

                <button
                    type="Submit"
                    className="but"
                    onClick={addNewUser}
                >Add New Student</button>
            </form>
        </div>
    )
}