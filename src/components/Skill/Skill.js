import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import './skill.scss';

export default function Skill({ skill, experience }) {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.querySelectorAll('.logo-toggle').forEach(e => e.classList.add('toggle'));
          el.querySelectorAll('.img-toggle').forEach(e => e.classList.add('toggle'));
        }
      });
    });

    observer.observe(document.querySelector('.skill-wrapper'));
  }, []);

  return (
    <section id='skills' className='three'>
      <div className='container'>
        <header>
          <h2>{skill.title}</h2>
        </header>

        <p>
          {skill.description}
        </p>

        <div className='skill-wrapper'>

          {/* LOGO */}

          {skill.skills.map((s, index) => {
            return (
              <div key={index} className='skill-box'>
                {/* LOGO */}
                {s.logo.map((l, index) => {
                  return (
                    <div key={index} className={'logo' + (l.toggle ? ' logo-toggle' : '')}>
                      {/* IMAGE */}
                      {
                        l.images.map((i, index) => {
                          return (
                            <div key={index} className={'img' + (i.toggle ? ' img-toggle' : '')}>
                              <img src={i.src} alt={i.alt} />
                            </div>
                          );
                        })
                      }
                    </div>
                  );
                })}
                {/* CONTENT */}
                <div className='content'>
                  <h5 className='skill-title'>{s.content.title}</h5>
                  <div className='skill-description'>
                    {s.content.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='m-50--'>
          <h2>{experience.title}</h2>
        </div>

        <div className='p-50 experience'>
          <VerticalTimeline>

            {experience.timeline.map((t, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  className='vertical-timeline-element--work'
                  contentStyle={{ background: 'rgb(220, 227, 226)', color: '#222629' }}
                  contentArrowStyle={{ borderRight: '7px solid rgb(220, 227, 226)' }}
                  date={t.time}
                  iconClassName='timeline-icon'
                  icon={<img src={t.icon} alt={'icon'} width={25} height={25} />}
                >
                  {t.title ? <h3 className='vertical-timeline-element-title'>{t.title}</h3> : null}
                  {t.subtitle ? <h4 className='vertical-timeline-element-subtitle'>{t.subtitle}</h4> : null}
                  <p>
                    <ul>
                      {t.description.map((d, index) => {
                        return (
                          <li key={index} dangerouslySetInnerHTML={{ __html: d }} />
                        );
                      })}
                      {t.keyword ? <li className='keyword'>{t.keyword}</li> : null}
                    </ul>
                  </p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>

        <div className='mt-50'>
          <p dangerouslySetInnerHTML={{ __html: experience.moreTitle }} />
        </div>
      </div>
    </section>
  );
}
