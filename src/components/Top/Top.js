import React from 'react';
import Scroll from '../Scroll';

export default function Top({ title, content }) {
  return (
    <section id='top' className='one dark cover'>
      <div className='container'>
        <header>
          <h2 className='alt'>
            { title }
          </h2>
          <p>
            <div dangerouslySetInnerHTML={{__html: content}} />
          </p>
        </header>

        <footer>
          <Scroll type='id' element={'skills'}>
            <a href='#skills' className='button'>
              Let's go
            </a>
          </Scroll>
        </footer>
      </div>
    </section>
  );
}
