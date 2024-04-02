import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null
  });

  const { name, email, password, error } = data;


  const handleSubmit = async (e) => {    
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    e.preventDefault();
    try {
      setData({...data, error: null});
      await axios.post("http://localhost:5000/auth/register", { name, email, password }, config);
      navigate('/login')
    } catch (err) {
      setData({...data, error: err.response.data.error });
    }
  };


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };



  return (
    <div className='flex items-center justify-center h-[44rem]'>
      <form className='flex flex-col gap-6 h-96 w-96 p-8 rounded-2xl shadow' onSubmit={handleSubmit}>
        <h1 className='fw-bolder text-3xl text-center'>SIGN UP</h1>
        {error ? <p className=' text-red-500'>{error}</p> : null}
        <input name='name' className='outline-none border-2 focus:border-blue-500 w-full p-2 rounded-md' type="text" placeholder='Enter full name' value={name} onChange={handleChange} />
        <input name='email' className='outline-none border-2 focus:border-blue-500 w-full p-2 rounded-md' type="email" placeholder='Enter email' value={email} onChange={handleChange} />
        <input name='password' className='outline-none border-2 focus:border-blue-500 w-full p-2 rounded-md' type="password" placeholder='Enter password' value={password} onChange={handleChange} />
        <button type="submit" className='text-center font-medium border-blue-400 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white outline-none border-2 w-50 self-center p-2 rounded-md'>SIGN UP</button>
      </form>
    </div>
  );
}

export default Signup;
