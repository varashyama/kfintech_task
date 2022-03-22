import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenContext } from "../../App";


const MyProfile = () => {
    const { token } = useContext(tokenContext);
    const [myprofile, setMyprofile] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {

        if (!token) {
            navigate('/login')
        }
        else {
            axios.get('https://reqres.in/api/users/4')
                .then(response => {
                    const result = response.data;
                    console.log(result);
                    setMyprofile(result);
                    console.log(myprofile);
                })
        }

    }, [])


    return (
        <div className="container">

            {myprofile.map((i) => {
                return (
                    <div key={i.id} className="w-50 m-auto">
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
    )
}

export default MyProfile;