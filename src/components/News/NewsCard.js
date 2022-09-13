import React from 'react';

const NewsCard = ({ news }) => {
    console.log(news);
    const { publishedAt, title, url, urlToImage } = news;
    return (
        <div className='flex shadow hover:shadow-xl rounded-md bg-white mb-4 md:mb-0 box-border overflow-hidden border'>
            <div className='box-border h-56 w-72 overflow-hidden cursor-pointer'>
                {urlToImage ? <img className=' hover:scale-105 duration-300 h-full w-full' src={urlToImage} alt="" /> : <div className='flex justify-center items-center h-full'><p className='font-bold text-xl'>No photos</p></div>}
            </div>
            <div className='w-96 h-56 px-8 py-5'>
                <p className='text-slate-500 mb-2'>Publish: {publishedAt.slice(0, 10)}</p>
                <h3 className='text-lg font-bold mb-3'>{title}</h3>
                <a className='text-lg border-b-4 border-blue-600 hover:text-blue-500' href={url}>Read More</a>
            </div>
        </div>
    );
};

export default NewsCard;