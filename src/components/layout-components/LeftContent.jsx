import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftContent = () => {
    const [categories , setCategories] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[]);
    console.log(categories)
    return (
        <div>
            <h1 className='font-semibold'>All Category</h1>
            <div className='flex flex-col gap-2 mt-5'>
                {
                    categories.map((category) => (<NavLink to={`/category/${category.category_id}`} className='btn bg-white border-none' key={category.category_id}>{category.category_name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default LeftContent;