import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {

  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')
  const [error, setError] = useState({})
  const [visible ,setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const Validate = () => {
    let tempErrors = {}
    if (!email) {
      tempErrors.email = '*Email is required* '
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "*Email is invalid*";
    }
    if (!password) {
      tempErrors.password = 'Password is required ';
    }
    else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    setError(tempErrors)
    return Object.keys(tempErrors).length === 0 
  


  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Validate()) {
      console.log(email, password)
      setEmail('');
      setPassword('');
      
    }
  }
  return (
    <div className='loginn'>
      <>
       <h2>تسجيل الدخول</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input type="email" name="email" value={email} placeholder='mattsmith@mail.com' className="em" onChange={(e) => setEmail(e.target.value)} />
          {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
          <br />
          <label>Password</label>
          <br />
          <input type='password' name="password" placeholder='.......' value={password} className="password" onChange={(e) => setPassword(e.target.value)}  />
      
          {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
         

          <br />
          <p>نسيت كلمه السر؟</p>
          <button type="submit" className='bbb'>تسجيل الدخول</button>
        
          <br />
         <Link Link to ="/Register" className='link'>ليس لديك حساب؟ <span>انشئ الان</span></Link>

       </form>  

















      </>






    </div>
  )
}

export default Login