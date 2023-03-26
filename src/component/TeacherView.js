import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { UseData } from '../base/DataProvider';

function TeacherView() {
    const { data } = UseData();

    const history = useHistory();
    const { id } = useParams()
    const teacher = data[id]
    // console.log(student)
    return (
        <div style={{ height: "100vh" }}>
            <h1> Hii {teacher.name}  <img className="hi" src="https://em-content.zobj.net/thumbs/120/apple/325/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png" /></h1>
            <div className="card1">
                <h2><b>Name : </b>{teacher.name}</h2>
                <p><b>Dept :</b> {teacher.dept}</p>
                <p><b> Email :</b> {teacher.email}</p>
                <p><b>Exp : </b>{teacher.exp}</p>
                <p><b>Phone No : </b>{teacher.phNo}</p>
                <button
                    className="but"
                    onClick={() => history.push("/teacher")}
                >Go Back</button>

            </div>

        </div>
    )
}

export default TeacherView