import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";

const LOGIN = { component: Login, path: "/login" };
const REGISTER = { component: Register, path: "/register" };
const HOME = { component: Home, path: "/home" };

export default [LOGIN, REGISTER, HOME];
