import { useHistory } from "react-router-dom"
import { UseData } from "../base/DataProvider";

export function Teacher() {
    const history=useHistory();
    const { data , setData} = UseData()

    const RemoveFun = (idx) => {
        const alterList = data.filter((prop) => prop.id != idx)
        setData(alterList)
    }


    return (
       <div>
        <h1><img style={{ width: "45px" }} src="https://em-content.zobj.net/thumbs/120/joypixels/340/teacher_1f9d1-200d-1f3eb.png" />   <br/> Teacher Detail  </h1>
        <div className="top">

            {data.map((prop, idx) => (
                <div key={idx} className="card">
                    <h2><b>Name : </b>{prop.name}</h2>
                    <p><b>Dept :</b> {prop.dept}</p>
                    <p><b> Email :</b> {prop.email}</p>
                    <p><b>Exp : </b>{prop.exp}</p>
                    <p><b>PhNo : </b>{prop.phNo}</p>
                        <button
                            className="but gre"
                            onClick={() => history.push(`/tcview/${idx}`)}
                        >View</button>
                        <button

                            onClick={() => history.push(`/tcedit/${prop.id}`)}
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