import React from 'react'
import '../CSS/Index.css'

export const Index = () => {
  return (
    <>
    <form action="">
        <label htmlFor="">User Name</label>
        <input type="text" name='username' placeholder='Enter Your Name' />
        <label htmlFor="">Password</label>
        <input type="password" name='password' placeholder='Enter Your password' />
    </form>
    </>
  )
}
