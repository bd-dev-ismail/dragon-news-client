import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            <h3>This is category has {news.length} news</h3>
        </div>
    );
};

export default Category;