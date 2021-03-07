import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Top from "../components/Top/Top";
import Something from "../components/Something/Something";
import Skill from "../components/Skill/Skill";
import Contact from "../components/Contact/Contact";
import Work from "../components/Work/Work";

const sections = [
    {id: 'top', name: 'Trang chủ', icon: 'fa-home'},
    {id: 'something', name: 'Vài thứ linh tinh', icon: 'fa-fire'},
    {id: 'skills', name: 'Kĩ năng', icon: 'fa-code'},
    {id: 'work', name: 'Công việc', icon: 'fa-building'},
    {id: 'contact', name: 'Liên hệ', icon: 'fa-phone'},
];

const IndexPage = () => (
    <Layout>
        <SideBar sections={sections}/>

        <div id="main">
            <Top/>

            <Something/>

            <Skill/>

            <Work/>

            <Contact/>
        </div>

        <PageFooter/>
    </Layout>
);

export default IndexPage;
