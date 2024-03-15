import React from 'react';
import Product from '../product';

export default function Grid() {
  return (
        <div className='container'>
            <h2>* Grid Layout <small style={{ color: 'gold' }}>(two-dimensional)</small></h2>
            
            <article className='grid'>
                <div className='product-images'>
                    <Product.Images />
                </div>
                <div className='product-description'>
                    <Product.Description />
                </div>
                <div className='product-variation'>
                    <Product.Variation />
                </div>
                <div className='product-actions'>
                    <Product.Actions />
                </div>
            </article>
        </div>
    );
}
