import React from 'react';

import './contact.scss';

export default function Contact({ contact }) {
  return (
    <section id='contact' className='four'>
      <div className='container'>
        <header>
          <h2>Contact</h2>
        </header>

        <div className='contact'>
          {contact.items.map((i , index) => {
            return (
              <div key={index} className='contact-item'>
                <a href={i.link} target='_blank' rel="noreferrer" className='contact-link'>
                  <div className='contact-img'>
                    <img src={i.img} alt={i.alt} />
                  </div>
                  <div>
                    <span className='info'>{i.name}</span>
                    <span className='hidden-info'>{i.info}</span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
