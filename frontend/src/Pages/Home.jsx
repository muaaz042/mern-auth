import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const res = await axios.get("http://localhost:5000/auth", { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    setUser(res.data);
  }

  useEffect(() => {
    getUser();
    if(!localStorage.getItem('token')){
      navigate('/login');
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  

  return (
    <div className='flex justify-center gap-8 mt-6'>
      <h1 className='text-6xl'>Welcome {user && user.name}</h1>
      <button onClick={logOut} className='hover:text-white hover:bg-blue-500 transition-colors duration-300 text-blue-500 text-3xl border-2 border-blue-500 rounded-lg px-8 py-4'>Log out</button>
    </div>
  )
}

export default Home