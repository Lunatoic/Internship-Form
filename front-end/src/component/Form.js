import React, { useState } from "react";

const Registration = () => {

    const [Firstname,setfirstName] = useState("");
    const [lastname,setlastName] = useState("");
    const [education,setEducation] = useState("");
    const [skills,setSkills] = useState("");
    const [workPlace,setworkPlace] = useState("");
    const [hobbies,setHobbies] = useState("");
    const [error, setError] = useState(false);

    const collectData = async()=>{

        if(!Firstname || !lastname || !education || !skills || !workPlace || !hobbies){
            setError(true);
            return false;
        }

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
                
                <div className="invalidInput2">
                {error && !Firstname && <span>Enter Valid Firstname</span> }
                {error && !lastname && <span>Enter Valid Lastname</span> }
                </div>
            </div>

            <div className="inputGroup">
                <input type="text" id="education" value={education}
                onChange={(e)=>setEducation(e.target.value)}></input>
                <label for="education">Education </label>
                {error && !education && <span className='invalidInput'>Enter Valid Education</span> }
            </div>

            <div className="inputGroup">
                <input type="text" id="skills" value={skills}
                onChange={(e)=>setSkills(e.target.value)}></input>
                <label for="skills">skills </label>
                {error && !skills && <span className='invalidInput'>Enter Valid Skills</span> }
            </div>

            <div className="inputGroup">
                <input type="text" id="workPlace" value={workPlace}
                onChange={(e)=>setworkPlace(e.target.value)}></input>
                <label for="workPlace">Work Place </label>
                {error && !workPlace && <span className='invalidInput'>Enter Valid Workplace</span> }
            </div>

            <div className="inputGroup">
                <input type="text" id="hobbies" value={hobbies}
                onChange={(e)=>setHobbies(e.target.value)}></input>
                <label for="hobbies">Hobbies </label>
                {error && !hobbies && <span className='invalidInput'>Enter Valid Hobbies</span> }
            </div>

            <button onClick={collectData} type="button">Click to proceed</button>
        </div>
    )
}

export default Registration;