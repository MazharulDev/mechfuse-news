import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import NewsCard from './NewsCard';

const News = () => {
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a0495a8f0bde411c8b7db4a5b0eb9414')
      .then(res => res.json())
      .then(data => setNewsData(data.articles))
  }, [])
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <p>Loading...</p>
  }
  const handleSignOut = () => {
    signOut(auth);
    toast("Sign out successfully")
  }

  return (
    <div className='bg-slate-200'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href='/'>Mechfuse-News</a>
        </div>
        <div className="flex-none mr-6 gap-4">
          <p>{user?.displayName}</p>
          <button className='btn btn-xs btn-error text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
      <div className='my-10'>
        <h2 className='text-4xl text-center'>Latest News</h2>
      </div>
      <div className='grid grid-cols-2 gap-5 w-fit mx-auto'>
        {
          newsData?.map(news => <NewsCard news={news} />)
        }
      </div>
      <div className='mt-5'>
        <p className='p-6 text-center bg-gray-700 text-white'>Created by <a className='text-blue-500' href="https://web.facebook.com/MazharulDev/">Mazharul Islam</a></p>
      </div>
    </div>
  );
};

export default News;