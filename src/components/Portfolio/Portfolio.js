import React, { useEffect } from 'react';


import './Portfolio.scss';

export default function Portfolio({ portfolio }) {

  useEffect(() => {
    document.querySelectorAll('.image-slider').forEach(e => new Slideshow(e));
  }, []);

  return (
    <section id='portfolio' className='two'>
      <div className='container'>
        <header>
          <h2>{ portfolio.title }</h2>
        </header>
        <p>
          { portfolio.description }
        </p>

        <div className='row'>
          {portfolio.projects.map((d, key) => {
            return (
              <PortfolioItem key={key} item={d} />
            )
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioItem(props) {
  const { item } = props;

  return (
    <div className='col-4 col-12-mobile'>
      <article className='item m-auto shadow'>
        <a href={item.href} target='_blank' rel="noreferrer" className='image fit'>
          <div className='image-slider'>
            <div className='slider-wrapper'>
              {item.img.map((i , key) => {
                return (<img key={key} className='slide' src={i.src} alt={i.alt} />);
              })}
            </div>
            <div className='overlay'>
              <div className='text'>{item.description}</div>
            </div>
          </div>
        </a>
        <header>
          <h3>{item.title}</h3>
        </header>
      </article>
    </div>
  );
}

function Slideshow(element) {
  this.init(element)
}

Slideshow.prototype = {
  init: function(e) {
    this.wrapper = e.querySelector('.slider-wrapper');
    this.slides = e.querySelectorAll('.slide');
    this.previous = e.querySelector('.slider-previous');
    this.next = e.querySelector('.slider-next');
    this.index = 0;
    this.total = this.slides.length;
    this.timer = null;

    this.action();
    this.stopStart(e);
  },
  _slideTo: function(slide) {
    const currentSlide = this.slides[slide];
    currentSlide.style.opacity = 1;

    for (let i = 0; i < this.slides.length; i++) {
      const slide = this.slides[i];
      if (slide !== currentSlide) {
        slide.style.opacity = 0;
      }
    }
  },
  action: function() {
    const self = this;
    self.timer = setInterval(function() {
      self.index++;
      if (self.index === self.slides.length) {
        self.index = 0;
      }
      self._slideTo(self.index);

    }, 3000);
  },
  stopStart: function(e) {
    const self = this;
    e.addEventListener('mouseover', function() {
      clearInterval(self.timer);
      self.timer = null;

    }, false);
    e.addEventListener('mouseout', function() {
      self.action();

    }, false);
  },
};