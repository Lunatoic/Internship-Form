import React, { useState } from "react";

const Registration = () => {

    const [Firstname,setfirstName] = useState("");
    const [lastname,setlastName] = useState("");
    const [education,setEducation] = useState("");
    const [skills,setSkills] = useState("");
    const [workPlace,setworkPlace] = useState("");
    const [hobbies,setHobbies] = useState("");

    const collectData = async()=>{
        console.log(Firstname,lastname,education,skills,workPlace,hobbies);
        let result = await fetch('http://localhost:5000/register', { 
            method: "post",
            body: JSON.stringify({Firstname,lastname,education,skills,workPlace,hobbies}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await result.json();
        console.log(result);
    }

    return(
        <div className="form">
            <h1 className="heading_form">Please enter your details</h1>
            
            <div className="inputGroup inputGroup1">
                <input type="text" id="firstname" value={Firstname} 
                onChange={(e)=>setfirstName(e.target.value)} ></input>
                <label for="firstname">First Name </label > 

                <input type="text" id="lastname" value={lastname}
                onChange={(e)=>setlastName(e.target.value)} ></input>
                <label className="lastname" for="lastname">Last Name : </label>
            </div>

            <div className="inputGroup">
                <input type="text" id="education" value={education}
                onChange={(e)=>setEducation(e.target.value)}></input>
                <label for="education">Education </label>
            </div>

            <div className="inputGroup">
                <input type="text" id="skills" value={skills}
                onChange={(e)=>setSkills(e.target.value)}></input>
                <label for="skills">skills </label>
            </div>

            <div className="inputGroup">
                <input type="text" id="workPlace" value={workPlace}
                onChange={(e)=>setworkPlace(e.target.value)}></input>
                <label for="workPlace">Work Place </label>
            </div>

            <div className="inputGroup">
                <input type="text" id="hobbies" value={hobbies}
                onChange={(e)=>setHobbies(e.target.value)}></input>
                <label for="hobbies">Hobbies </label>
            </div>

            <button onClick={collectData} type="button">Click to proceed</button>
        </div>
    )
}

export default Registration;