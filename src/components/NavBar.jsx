import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav >
      <div style={{display:"flex",gap:"20%",position:"absolute",top:"20px"}}>
             <Link to="/">
        <h6>First Compo</h6>
      </Link>
      <Link to="/sec">
        <h6>Second Compo</h6>
      </Link>
      <Link to="/th">
        <h6>Third Compo</h6>
      </Link>
      <Link to="/products">
        <h6>Product page</h6>
        </Link>
        <Link to={"/users"}>
          <h6>Users</h6>
        </Link>
 </div>
      <div style={{display:"flex",gap:"20%",position:"absolute",bottom:"50px" }}>
      <NavLink to='/'>First</NavLink>
      <NavLink to='/sec'>second</NavLink>
      <NavLink to='/th'>third</NavLink>
</div>

    </nav>
  );
};

export default NavBar;
