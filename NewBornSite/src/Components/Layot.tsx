import { Outlet } from "react-router-dom";
import Home from "./Home";


export default function Layout() {
    return (
        <div>
            <Outlet />
            <Home />
        </div>
   );
}
