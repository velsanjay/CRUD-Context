import { useHistory } from "react-router-dom"

export function BlankPage(){
    const history=useHistory();
    return(
        <div style={{textAlign:'center',height:"100vh"}}>
        <h1 style={{fontSize:"170px"}}>404</h1>
        <p><b>Page Not Found</b></p>
        <br/>
        <p>It looks like you found a glitch in the matrix...</p>
        <a 
        onClick={()=>history.push("/")}
        href="#"
        ><u>← Back to Student Detail</u></a><br/><br/>
         <a 
        onClick={()=>history.push("/teacher")}
        href="#"
        ><u>← Back to Teacher Detail</u></a>
    </div>
    )
}