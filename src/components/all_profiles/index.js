import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenContext } from "../../App";

const AllProfile = () => {

    const { token } = useContext(tokenContext);
    const [profile, setProfile] = useState({ user: [] });
    const navigate = useNavigate()

    function getJson() {
        axios.get('https://reqres.in/api/users?page=1')
            .then(response => {
                const result = response.data;
                console.log(result);
                setProfile({ user: result });
                console.log(profile);
            })

    }

    useEffect(() => {       

        if (!token) {
            navigate('/login')            
        }
        else {
            getJson();
        }

    }, [])


    return (
        <div className="container">
            <div className="row">

                {profile.user.map((i) => {
                    return (
                        <div key={i.id} className="col-6 col-md-3 col-lg-2">
                            <div className="text-center">
                                <h3>{i.first_name}</h3>
                                <p>{i.email}</p>
                                <img src={i.avatar} alt="avatar img" ></img>
                            </div>

                        </div>

                    )
                })
                }

            </div>
        </div>
    )
}

export default AllProfile;