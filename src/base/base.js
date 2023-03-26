import { Route, Switch} from "react-router-dom";
import AddTeacher from "../component/AddTeacher";
import { AddUser } from "../component/AddUser";
import { BlankPage } from "../component/Blank";
import { EditUser } from "../component/Edit";
import { NavBar } from "../component/NavBar";
import { DashBoard } from "../component/Read";
import { Teacher } from "../component/TeacherDetail";
import TeacherEdit from "../component/TeacherEdit";
import TeacherView from "../component/TeacherView";
import { ViewUser } from "../component/View";



export default function BaseApp() {
    return (
        <div className="grid">

            <NavBar />
            <Switch>
                <Route exact path="/">
                    <DashBoard />
                </Route>

                <Route path="/stadd">
                    <AddUser />
                </Route>

                <Route path="/stview/:id">
                    <ViewUser />
                </Route>

                <Route path="/stedit/:id">
                    <EditUser />
                </Route>

                <Route path="/teacher">
                    <Teacher />
                </Route>

                <Route path="/tcadd">
                    <AddTeacher />
                </Route>

                <Route path="/tcview/:id">
                    <TeacherView/>
                </Route>

                <Route path="/tcedit/:id">
                    <TeacherEdit/>
                </Route>

                <Route path="**">
                    <BlankPage />
                </Route>

            </Switch>
        </div>
    )
}



