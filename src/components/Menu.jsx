import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <NavLink to={"/"}>Product List</NavLink>
            <NavLink to={"/create"}>Create Product</NavLink>
        </div>
    );
};

export default Menu;