import React from 'react';
import pic2 from '../../assets/images/pic02.jpg';
import pic5 from '../../assets/images/pic05.jpg';
import pic6 from '../../assets/images/pic06.jpg';

export default function Something() {

  return (
    <section id='something' className='two'>
      <div className='container'>
        <p>
          Chúng ta chỉ sống một lần trong đời, hãy làm những điều mình thích và
          tận hưởng những thứ đang có. <br />
          Thi thoảng hãy bỏ qua nhịp sống bận bịu,
          dành chút thời gian cho bản thân và mọi thứ xung quanh nhé. <br />
          Cân bằng lại cuộc sống để tạo niềm vui cho riêng mình nào.
        </p>

        <div className='row'>
          <div className='col-4 col-12-mobile'>
            <article className='item'>
              <a href='/#' className='image fit'>
                <img src={pic2} alt='' />
              </a>
              <header>
                <h3>Ipsum Feugiat</h3>
              </header>
            </article>

          </div>
          <div className='col-4 col-12-mobile'>

            <article className='item'>
              <a href='/#' className='image fit'>
                <img src={pic5} alt='' />
              </a>
              <header>
                <h3>Natoque Vitae</h3>
              </header>
            </article>
          </div>
          <div className='col-4 col-12-mobile'>
            <article className='item'>
              <a href='/#' className='image fit'>
                <img src={pic6} alt='' />
              </a>
              <header>
                <h3>Dolor Penatibus</h3>
              </header>
            </article>
          </div>
        </div>
      </div>
      <div className='col-8 col-12-mobile' style={{ height: '950px' }}>
      </div>
    </section>
  );
}
