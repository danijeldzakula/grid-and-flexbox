import React from 'react';

export default function Card({ title }) {
    return (
        <div className='card'>
            <figure className='images' />
            
            <div className='content'>
                <h3>{title}</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <button className='btn'>Add to cart</button>
            </div>
        </div>
    );
}
