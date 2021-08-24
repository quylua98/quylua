import reactLogo from '../assets/images/react-logo.png';
import vueLogo from '../assets/images/vue-logo.png';
import angularLogo from '../assets/images/angular-logo.png';
import htmlLogo from '../assets/images/html-logo.png';
import cssLogo from '../assets/images/css-logo.png';
import jsLogo from '../assets/images/js-logo.png';
import javaLogo from '../assets/images/java-logo.png';
import hibernateLogo from '../assets/images/hibernate-logo.png';
import springLogo from '../assets/images/spring-logo.png';
import dockerLogo from '../assets/images/docker-logo.png';
import kubernateLogo from '../assets/images/kubernate-logo.png';
import gitLogo from '../assets/images/git-logo.png';
import suitcaseIcon from '../assets/images/suitcase-ico.svg';
import mortarboardIcon from '../assets/images/mortarboard.svg';
import unetiImg from '../assets/images/portfolio/uneti-app.png';
import thomasBayesImg from '../assets/images/portfolio/Thomas_Bayes.gif';
import dbToolImg from '../assets/images/portfolio/db-to-excel.png';
import ashibinaaImg from '../assets/images/portfolio/ashibinaa.png';
import toyosakiImg from '../assets/images/portfolio/toyosaki.png';
import skyflagImg from '../assets/images/portfolio/logo_skyflag.svg';
import quy2Img from '../assets/images/portfolio/quy2.png';
import fbLogo from '../assets/images/facebook-logo.png';
import gmailLogo from '../assets/images/gmail-logo.png';
import skypeLogo from '../assets/images/skype-logo.png';
import callLogo from '../assets/images/call-logo.png';
import mysqlLogo from '../assets/images/mysql-logo.png';
import mongodbLogo from '../assets/images/mongodb-logo.png';
import linuxLogo from '../assets/images/linux-logo.png';
import ptsLogo from '../assets/images/photoshop-logo.png';
import intelIJLogo from '../assets/images/intelij-logo.png';

export const Data = {
  sidebar: [
    { id: 'top', name: 'Home', icon: 'fa-home' },
    { id: 'skills', name: 'Skill & Experience', icon: 'fa-code' },
    { id: 'portfolio', name: 'Portfolio', icon: 'fa-fire' },
    { id: 'contact', name: 'Contact', icon: 'fa-phone' },
  ],
  top: {
    title: 'Hi 👋 thanks for visiting',
    content: 'I\'m <a href=\'https://fb.com/quylua98\'>Quy</a>, a software engineer that have many years experience in Web Development with strong skill in Java. ' +
      'I am open-minded and like to keep myself updated with new softwares and technologies. When i\'m not coding, i play a game, foodball, go fishing and Backpacking is my hobby. ' +
      'Below is some my information, hope you like it.',
  },
  skill: {
    title: 'Skill',
    description: 'I am experienced with all stages of the development cycle for dynamic web projects.',
    skills: [
      // FRONT END
      {
        logo: [{
          images: [
            { src: htmlLogo, alt: 'HTML logo', toggle: false },
            { src: cssLogo, alt: 'CSS logo', toggle: false },
            { src: jsLogo, alt: 'JS logo', toggle: false },
          ],
          toggle: false,
        }, {
          images: [
            { src: vueLogo, alt: 'Vue logo', toggle: false },
            { src: reactLogo, alt: 'React logo', toggle: false },
            { src: angularLogo, alt: 'Angular logo', toggle: false },
          ],
          toggle: true,
        }],
        content: {
          title: 'Front end',
          description: 'Develop, maintain, upgrade, optimize website using HTML/CSS/JS and libs, framework like Vue, React, Angular, Jquery...',
        },
      },
      // BACK END
      {
        logo: [{
          images: [
            { src: springLogo, alt: 'Spring logo', toggle: true },
            { src: javaLogo, alt: 'Java logo', toggle: false },
            { src: hibernateLogo, alt: 'Hibernate logo', toggle: true },
          ],
          toggle: false,
        }, {
          images: [
            { src: mysqlLogo, alt: 'MySQL logo', toggle: false },
            { src: mongodbLogo, alt: 'MongoDB logo', toggle: false },
          ],
          toggle: true,
        }],
        content: {
          title: 'Back end',
          description: 'My approach to BE system is fast, scalability, high performance, easy to maintain and all of these will save the cost.',
        },
      },
      // OTHER
      {
        logo: [
          {
            images: [
              { src: dockerLogo, alt: 'Docker logo', toggle: false },
              { src: kubernateLogo, alt: 'kubernate logo', toggle: false },
              { src: gitLogo, alt: 'GIT logo', toggle: false },
            ],
            toggle: false,
          },
          {
            images: [
              { src: linuxLogo, alt: 'Linux logo', toggle: false },
              { src: ptsLogo, alt: 'Photoshop logo', toggle: false },
              { src: intelIJLogo, alt: 'IntelIJ IDE logo', toggle: false },
            ],
            toggle: true,
          },
        ],
        content: {
          title: 'Other',
          description: 'Learn some useful tools can help our save the time for a few months or even years of our life. So i do research new technology sometimes.',
        },
      },
    ],
  },
  experience: {
    title: 'Kinh nghiệm',
    timeline: [
      {
        title: 'Java Developer',
        subtitle: 'Rabiloo',
        time: '03/2020 - hiện tại',
        icon: suitcaseIcon,
        description: [
          '- Developed a CMS service that could manage Mall System using Spring Boot for Backend and VueJS, NuxtJS for UI.',
          '- Developed a spin bonus system.',
          '- Maintained and Developed new futures for CPE rewarded advertising web application.',
        ],
        keyword: 'Software development, Java, Spring, VueJS, Javascript.',
      },
      {
        title: 'Intern Java Developer',
        subtitle: 'Altplus (Extreme VN)',
        time: '01/2020 - 03/2020',
        icon: suitcaseIcon,
        description: [
          '- Developed a Travel Blog site using Spring Framework and ReactJS.',
          '- Improve coding skills and resolve problems through mini projects.',
        ],
        keyword: 'Java, Java Servlet, Struts, Spring, React, Javascript.',
      },
      {
        title: 'Aptech Ha Noi',
        time: '07/2017 - 04/2019',
        icon: mortarboardIcon,
        description: [
          '- Completed a Java Basic and Java Advanced course .',
          '- Completed a HTML/CSS/JS course.',
        ],
      },
      {
        title: 'University of Economics - Technology for Industries ( UNETI )',
        time: '09/2016 - 06/2020',
        icon: mortarboardIcon,
        description: [
          '- Majoring in information technology.',
          '- Join a <a href="https://cuocduaso.fpt.com.vn">Cuoc Dua So</a> contest ( A self-driving car technology ).',
          '- First prize at Scientific Technological Innovation Contest.',
        ],
      },
    ],
    moreTitle: 'For more information, please read <a href=\'#\'>my resume.</a>',
  },
  portfolio: {
    title: 'Portfolio',
    description: 'Some projects i have been working.',
    projects: [
      {
        href: 'https://github.com/quylua98/uneti-app',
        title: 'Uneti App',
        description: 'Mobile Application provide news, search student\'s information.',
        img: [
          { src: unetiImg, alt: 'Uneti logo' },
        ],
      },
      {
        href: 'https://github.com/quylua98/NaiveBayes',
        title: 'Naive Bayes',
        description: 'Naive bayes implementation.',
        img: [
          { src: thomasBayesImg, alt: 'Thomas Bayes\'s image' },
        ],
      },
      {
        href: 'https://github.com/quylua98/db-to-excel',
        title: 'DB Tools',
        description: 'Export table\'s database to excel tool.',
        img: [
          { src: dbToolImg, alt: 'Tool' },
        ],
      },
      {
        href: 'https://www.ashibinaa.com',
        title: 'Shopping mall',
        description: 'A CMS service manages Shop and Mall System.',
        img: [
          { src: ashibinaaImg, alt: 'Ashibina image' },
          { src: toyosakiImg, alt: 'toyosaki image' },
        ],
      },
      {
        href: 'https://skyflag.info',
        title: 'SKYFLAG',
        description: 'The third-party system provides an advertising platform for buyers and sellers.',
        img: [
          { src: skyflagImg, alt: 'SKYFLAG logo' },
        ],
      },
      {
        href: 'https://github.com/quylua98/quylua',
        title: 'Personal Website',
        description: 'A personal website.',
        img: [
          { src: quy2Img, alt: 'Ảnh Quý' },
        ],
      },
    ],
  },
  contact: {
    title: '',
    description: '',
    items: [
      {
        name: 'Gmail',
        info: 'quylua98@gmail.com',
        link: 'mailto:quylua98@gmail.com',
        img: gmailLogo,
        alt: 'Gmail logo',
      },
      {
        name: 'Skype',
        info: 'live:quylua98',
        link: 'skype:live:quylua98?chat',
        img: skypeLogo,
        alt: 'Skype logo',
      },
      {
        name: 'Facebook',
        info: 'Nguyễn Duy Quý',
        link: 'https://fb.com/quylua98',
        img: fbLogo,
        alt: 'Facebook logo',
      },
      {
        name: 'Điện thoại',
        info: '0333088048',
        link: 'tel:0333088048',
        img: callLogo,
        alt: 'Call logo',
      },
    ],
  },
};