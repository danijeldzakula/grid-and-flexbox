import React from 'react';
import Card from '../card/Card';

export default function Flexbox() {
    return (
        <div className='container'>
            <h2>* Flexbox Layout <small style={{ color: 'gold' }}>(one-dimensional)</small></h2>
            
            <article className='flexbox'>
                <Card title="Bronze" />        
                <Card title="Silver" />
                <Card title="Gold" />
            </article>
        </div>
    );
}
