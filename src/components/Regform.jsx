import {useState} from 'react'
import '../CSS/Regfrm.css'
export const Regform = () => {
    const [user,setUser] = useState({
        name:"",
        age:0,
        gender:"",
        ismaried:false,
        country:"",
        bio:""
    });
    function changeHandler(e){
        const name = e.target.name;
        // console.log(name);
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({...user, [name]: value})
    }
  return (
    <>
        <table>
            <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Martital Status</td>
                <td>{user.ismaried ? "Married" : "single"}</td>
            </tr>
            <tr>
                <td>Country </td>
                <td>{user.country}</td>
            </tr>
            <tr>
                <td>Bio</td>
                <td>{user.bio}</td>
            </tr>
            </tbody>
        </table>
        <form action="">
            <input type="text" placeholder='Full Name' value={user.name} onChange={changeHandler} name='name'/>
            <input type="number" placeholder='Age' onChange={changeHandler} value={user.age} name='age' />
            <div className='gender'>
                <label htmlFor="Male">
                <input type="radio" name='gender' id='male' checked={user.gender == "Male"} value="Male" onChange={changeHandler} />
                Male
                </label>
                <label htmlFor="Female">
                <input type="radio" name='gender' id='female' checked={user.gender == "Female"} value="Female" onChange={changeHandler}/>
                female
                </label>
            </div>
            <label htmlFor="Ismarried">
                  <input type="checkbox" id="ismarried" name='ismarried' checked={user.ismaried} onChange={changeHandler}/>
                  IsMarried  
            </label>
            <div className='no1'>
            <label htmlFor="Country"> Select Country :</label>
            <select name="country" id="country" value={user.country} onChange={changeHandler}>
                <option value="India"> India </option>
                <option value="USA">USA</option>
                <option value="Dubai">Dubai</option>
                <option value="UK">UK</option>
            </select>
            <textarea name="bio" id="" cols="30" rows="5" placeholder='Say Something About Your Achivement' onChange={changeHandler}></textarea>
            </div>
        </form>
    </>
  )
}
