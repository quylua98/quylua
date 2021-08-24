import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Top from '../components/Top/Top';
import Portfolio from '../components/Portfolio/Portfolio';
import Skill from '../components/Skill/Skill';
import Contact from '../components/Contact/Contact';
import { Data } from '../data/data.vi';
import usFlag from '../assets/images/united-states.png';

const IndexPage = () => (
  <Layout>
    <SideBar sections={Data.sidebar} />

    <div id='main'>
      <div className='lang'>
        <a href='/en'>
          <img src={usFlag} alt='US' />
        </a>
      </div>

      <Top title={Data.top.title} content={Data.top.content} />

      <Skill skill={Data.skill} experience={Data.experience} />

      <Portfolio portfolio={Data.portfolio} />

      <Contact contact={Data.contact} />
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
