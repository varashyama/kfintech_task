import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenContext } from "../../App";


const MyProfile = () => {
    const { token, setToken } = useContext(tokenContext);
    const [myprofile, setMyprofile] = useState(null);
    const navigate = useNavigate()

    function handleLogout() {
        setToken("");
        navigate("/login");

    }

    function getJson() {
        axios.get('https://reqres.in/api/users/4')
            .then(response => {
                const result = response.data;
                console.log(result);
                setMyprofile(result.data);
                console.log(myprofile);
            })

    }

    useEffect(() => {
        getJson();

    },[])


    if (!myprofile) {
        return (
            <div>Please wait..</div>
        );
    }

    return (
        <div className="container">
            <div className="">
                <button className="logout my-3 px-4 py-2 bg-secondary text-white" onClick={handleLogout}>Logout</button>
            </div>
            <div  className="w-50 m-auto">
                        <div className="text-center">
                            <h3>{myprofile.first_name}</h3>
                            <p>{myprofile.email}</p>
                            <img src={myprofile.avatar} alt="avatar img" ></img>
                        </div>

                    </div>

        </div>
    )
}

export default MyProfile;