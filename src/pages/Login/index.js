import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Login = () => {
  return (
    <div className='main-page'>
        <div className='left'>
          <img src={LoginBg} className='bg-image' alt='imageBG'/>
        </div>
        <div className='right'>
          <p className='title'>Login</p>
          <Input label="Email" placeholder="Email"/>
          <Gap height={18}/>
          <Input label="Password" placeholder="Password"/>
          <Gap height={50}/>
          <Button title="Login"/>
          <Gap height={10}/>
          <Link title="Don't have an account? Register here"/>
        </div>
    </div>
  )
}

export default Login
