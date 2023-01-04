import React from 'react';
import { RegisterBG } from '../../assets';
import './register.css';
import {Button, Gap, Input, Link} from '../../components'

const Register = () => {
  return (
    <div className='main-page'>
        <div className='left'>
          <img src={RegisterBG} className='bg-image' alt='imageBG'/>
        </div>
        <div className='right'>
          <p className='title'>Register</p>
          <Input label="Full Name" placeholder="Full Name"/>
          <Gap height={18}/>
          <Input label="Email" placeholder="Email"/>
          <Gap height={18}/>
          <Input label="Password" placeholder="Password"/>
          <Gap height={50}/>
          <Button title="Register"/>
          <Gap height={10}/>
          <Link title="Back to Login"/>
        </div>
    </div>
  )
}

export default Register