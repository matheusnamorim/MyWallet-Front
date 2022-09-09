import GlobalStyle from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import SignUp from "./SignUp/SignUp";
import HomePage from "./HomePage/HomePage";

export default function App(){

return (
    <>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path="*" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </>
);

}