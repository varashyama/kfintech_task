    import { Link } from "react-router-dom";

const Nav = () =>  {
    return (
      <div
        style={{
          backgroundColor: "grey",
          minHeight: "10vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ul className="Navbar ms-2 d-flex justify-content-between align-items-center w-50 text-white list-unstyled">
        <Link style={{color:'white'}} to="/">
            <li>Register</li>
          </Link>
          <Link style={{color:'white'}} to="/login">
            <li>Login</li>
          </Link>
          <Link style={{color:'white'}}to="/myprofile">
            <li>MyProfile</li>
          </Link>
          <Link style={{color:'white'}} to="/allprofiles">
            <li>AllProfiles</li>
          </Link>
        </ul>
      </div>
    );
}


export default Nav;
