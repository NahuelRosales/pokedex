import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div style={{ display:"flex", justifyContent:"space-between", alignItems: "center", margin: 10, backgroundColor:"blueviolet", padding: 10 }}>
            <Link to={"/"}><h1>Pokedex</h1></Link>
            <Link to={"/detail"}><h1>Detail</h1></Link>
        </div>
    );
};

export default SideBar;
