import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { UseData } from '../base/DataProvider';

function AddTeacher() {
    const { data, setData } = UseData();
    const histroy = useHistory();

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [exp, setExp] = useState("");
    const [dept, setDept] = useState("");
    const [phNo, setPhNo] = useState("");
    const addNewTeac = () => {

        const newUser = {
            id,
            name,
            email,
            dept,
            exp,
            phNo,

        }

        setData([...data, newUser])
        // console.log(user)
        histroy.push("/teacher")
    }
    return (
        <div className="add">
            <h1>Add New Teachaer</h1>
            <form action="https://www.google.com/">
                <input
                    className="inp"
                    value={id}
                    placeholder="id"
                    min="1"
                    onChange={(e) => setId(e.target.value)}
                    required
                /><br />

                <input
                    className="inp"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name" /><br />

                <input
                    value={dept}
                    className="inp"
                    onChange={(e) => setDept(e.target.value)}
                    placeholder="DEPT" /><br />

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

                <input
                    value={phNo}
                    className="inp"
                    onChange={(e) => setPhNo(e.target.value)}
                    placeholder="Phone No" /><br />

                <button
                    type="Submit"
                    className="but"
                    onClick={addNewTeac}
                >Add New Teachaer</button>
            </form>
        </div>
    )
}

export default AddTeacher