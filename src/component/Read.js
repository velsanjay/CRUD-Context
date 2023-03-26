
import { useHistory } from "react-router-dom";
import { UseData } from "../base/DataProvider";

export function DashBoard() {
    const { user , setUser } = UseData();
    const history = useHistory();

    const RemoveFun = (idx) => {
        const alterList = user.filter((prop) => prop.id != idx)
        setUser(alterList)
    }

    return (
        <div>
            <h1><img style={{ width: "40px" }} src="https://em-content.zobj.net/thumbs/120/apple/325/man-student-light-skin-tone_1f468-1f3fb-200d-1f393.png" /> Student Detail  </h1>
            <div className="top">

                {user.map((prop, idx) => (
                    <div key={idx} className="card">
                        <h2><b>Name : </b>{prop.name}</h2>
                        <p><b>Reg No :</b> {prop.regNo}</p>
                        <p><b> Email :</b> {prop.email}</p>
                        <p><b>Exp : </b>{prop.exp}</p>
                        <button
                            className="but gre"
                            onClick={() => history.push(`/stview/${idx}`)}
                        >View</button>
                        <button

                            onClick={() => history.push(`/stedit/${prop.id}`)}
                            className="but blu">Edit</button>
                        <button
                            onClick={() => RemoveFun(prop.id)}
                            className="but red"
                        >Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
