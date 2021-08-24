import React from 'react';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import Top from '../../components/Top/Top';
import Skill from '../../components/Skill/Skill';
import Portfolio from '../../components/Portfolio/Portfolio';
import Contact from '../../components/Contact/Contact';
import PageFooter from '../../components/PageFooter';
import { Data } from '../../data/data.en';
import vietnameFlag from '../../assets/images/vietnam.png'

const IndexPage = () => (
  <Layout>
    <SideBar sections={Data.sidebar} />

    <div id='main'>
      <div className='lang'>
        <a href='/'>
          <img src={vietnameFlag} alt='VietNam' />
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
