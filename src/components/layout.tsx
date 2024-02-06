import { Outlet } from "react-router-dom";
import SearchIcon from "./searchbtn";
export default function Layout() {
    return (
        <div>
            <SearchIcon />
            <Outlet />
        </div>
    );
}