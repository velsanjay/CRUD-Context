import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UseData } from '../base/DataProvider';

function TeacherEdit() {
    const { data, setData } = UseData();

    const { id } = useParams();
    const histroy = useHistory();

    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [email, setEmail] = useState("");
    const [exp, setExp] = useState("");
    const [dept, setDept] = useState("");
    const [phNo, setPhNo] = useState("");

    const selectUser = data.find((per) => per.id == id)

    useEffect(() => {
        setIdx(selectUser.id)
        setName(selectUser.name)
        setEmail(selectUser.email)
        setExp(selectUser.exp)
        setPhNo(selectUser.phNo)
        setDept(selectUser.dept)
    }, []);

    const updateUser = () => {
        const editIndex = data.findIndex(per => per.id == id)
        //  console.log(editIndex)
        const editedData = {
            id: idx,
            name,
            email,
            exp,
            phNo,
            dept
        }

        data[editIndex] = editedData
        setData([...data]);
        // console.log(user)
        histroy.push("/teacher");


    }


    return (
        <div className="add">
            <h1>Change Your Detail Mr.{name}!</h1>
            <input
                className="inp"
                placeholder="id"
                value={idx}
                onChange={(event) => setIdx(event.target.value)}
            /><br /><br />

            <input
                className="inp"
                placeholder="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <input
                className="inp"
                placeholder="Dept"
                value={dept}
                onChange={(event) => setDept(event.target.value)}
            />

            <input
                className="inp"
                placeholder="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <input
                className="inp"
                placeholder="experience"
                value={exp}
                onChange={(event) => setExp(event.target.value)}
            />

            <input
                className="inp"
                placeholder="Phone No"
                value={phNo}
                onChange={(event) => setPhNo(event.target.value)}
            />

            <br />

            <button
                className="but"
                onClick={updateUser}
            >Commit Changes</button>
        </div>
    )
}

export default TeacherEdit