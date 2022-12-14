import GlobalStyle from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import SignUp from "./SignUp/SignUp";
import HomePage from "./HomePage/HomePage";
import NewEntry from "./NewEntry/NewEntry";
import NewExit from "./NewExit/NewExit";
import PrivatePage from "./PrivatePage/PrivatePage";
import EditEntry from "./EditEntry/EditEntry";
import EditExit from './EditExit/EditExit';

export default function App(){

return (
    <>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path='/home' element={<PrivatePage><HomePage/></PrivatePage>}/>
                <Route path='/new-entry' element={<PrivatePage><NewEntry/></PrivatePage>}/>
                <Route path="/new-exit" element={<PrivatePage><NewExit/></PrivatePage>}/>
                <Route path="/edit-entry" element={<PrivatePage><EditEntry/></PrivatePage>}/>
                <Route path="/edit-exit" element={<PrivatePage><EditExit/></PrivatePage>}/>
                <Route path="*" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </>
);

}