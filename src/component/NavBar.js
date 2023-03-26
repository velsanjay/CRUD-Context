import { useHistory } from "react-router-dom"

export function NavBar() {
    const histroy = useHistory();
    return (
        <div className="nav ">
            <button
                className="but"
                onClick={() => histroy.push("/")}
            >Student Detail</button>

            <button
                className="but"
                onClick={() => histroy.push("/teacher")}
            >Teachers Detail</button>

            <button
                className="but"
                onClick={() => histroy.push("/stadd")}
            >Add New Student</button>

            <button
                className="but"
                onClick={() => histroy.push("/tcadd")}
            >Add New Teacher</button>

            <br /><br /><br /><br /><br />

            <img
                id="trans"
                className="img"
                onClick={ChngGrid}
                src="data:image/png;base64,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" />

        </div>
    )
}
function ChngGrid() {
    const a = document.querySelector('.grid')
    const b = document.getElementById('trans')
    return (
        a.classList.toggle('chng'),

        b.classList.toggle('tra')

    )
}