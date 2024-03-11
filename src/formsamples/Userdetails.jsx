import {useState, } from 'react'
export const Userdetails = () => {
    const [user,setUser] = useState({name:"",age:20});
   function changehandel(e){
    setUser({...user , [e.target.name]: e.target.value});
//     setUser((oldState)=> {
//         return {...oldState,name:e.target.value};
//     })
//    }
//    function changeage(e){
//     setUser((oldState)=> {
//         return {...oldState,age:e.target.value};
//     })
   }
  return (
    <>
    <form action="">
        <h3>{user.name} , {user.age}</h3>
        <input type="text" placeholder='Enter the user Name' onChange={changehandel} name='name' />
        <input type="text" placeholder='Enter the user Age' onChange={changehandel} name='age' />
    </form>
    </>
  )
}
