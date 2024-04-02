import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "", 
    error: null
  });

  const config = {
    headers: { "Content-Type": "application/json" }
  };

  const { email, password, error } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setData({...data, error: null});
      const res = await axios.post("http://localhost:5000/auth/login", { email, password }, config);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setData({...data, error: err.response.data.error });
    }
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className='flex items-center justify-center h-[44rem]'>
      <form className='flex flex-col gap-7 h-96 w-96 p-8 rounded-2xl shadow' onSubmit={handleSubmit}>
        <h1 className='mt-4 font-bold text-3xl text-center'>LOG IN</h1>
        {error ? <p className=' text-red-500'>{error}</p> : null}
        <input name='email' value={email} className='outline-none border-2 focus:border-blue-500 w-full p-2 rounded-md' type="email" placeholder='Enter email' onChange={handleChange} />
        <input name='password' value={password} className='outline-none border-2 focus:border-blue-500 w-full p-2 rounded-md' type="password" placeholder='Enter password' onChange={handleChange} />
        <button type='submit' className='shadow-md text-center font-medium border-blue-500 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white outline-none border-2 self-center w-32 p-2 rounded-md'>LOG IN</button>
      </form>
    </div>
  );
};

export default Login;
