import reactLogo from '../assets/images/react-logo.png';
import vueLogo from '../assets/images/vue-logo.png';
import angularLogo from '../assets/images/angular-logo.png';
import htmlLogo from '../assets/images/html-logo.png';
import cssLogo from '../assets/images/css-logo.png';
import jsLogo from '../assets/images/js-logo.png';
import javaLogo from '../assets/images/java-logo.png';
import hibernateLogo from '../assets/images/hibernate-logo.png';
import springLogo from '../assets/images/spring-logo.png';
import mysqlLogo from '../assets/images/mysql-logo.png';
import mongodbLogo from '../assets/images/mongodb-logo.png';
import dockerLogo from '../assets/images/docker-logo.png';
import kubernateLogo from '../assets/images/kubernate-logo.png';
import gitLogo from '../assets/images/git-logo.png';
import linuxLogo from '../assets/images/linux-logo.png';
import ptsLogo from '../assets/images/photoshop-logo.png';
import intelIJLogo from '../assets/images/intelij-logo.png';

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

export const Data = {
  sidebar: [
    { id: 'top', name: 'Trang chủ', icon: 'fa-home' },
    { id: 'skills', name: 'Kĩ năng', icon: 'fa-code' },
    { id: 'portfolio', name: 'Portfolio', icon: 'fa-fire' },
    { id: 'contact', name: 'Liên hệ', icon: 'fa-phone' },
  ],
  top: {
    title: 'Xin chào 👋 Cảm ơn bạn đã ghé thăm',
    content: 'Mình là <a href=\'https://fb.com/quylua98\'>Quý</a>, là một Java Developer với hơn 2 năm kinh nghiệm. Mình đam mê tìm tòi những thứ mới mẻ và hay cập nhật nhưng tin tức về công nghệ. Ngoài việc code ra, mình có sở thích đi phượt, đá bóng, chơi game và câu cá. Và là con trai IT nên mình có vẻ hơi trầm nhưng bên trong tinh thần vẫn luôn lạc quan, vui tính 😁 Dưới đây có vài thông tin về mình, mong bạn sẽ thích.',
  },
  skill: {
    title: 'Kĩ năng',
    description: 'Mình có kinh nghiệm với hầu hết các giai đoạn phát triển của một trang web. Dưới đây là một số công nghệ mình đã có kinh nghiệm, hi vọng có thể giúp đỡ được bạn 🚀',
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
          description: 'Xây dựng, bảo trì, nâng cấp, tối ưu hoá website sử dụng HTML/CSS/JS và các thư viện, framework như Vue, React, Angular, Jquery...',
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
          description: 'Đáp ứng nhanh, có khả năng mở rộng, hiệu suất cao, chi phí thấp, dễ dàng bảo trì là những gì mình hướng tới ở một hệ thống Back End',
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
          description: 'Thành thạo sử dụng các công cụ có thể giúp tăng hiệu quả và giảm thời gian làm việc. Vì vậy mình thường đầu tư thời gian vào học cách sử dụng các công cụ hữu ích',
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
          '- Phát triển dịch vụ CMS quản lí dữ liệu các trung tâm thương mại sử dụng Spring Boot cho Backend và giao diện sử dụng VueJS, NuxtJS.',
          '- Xây dựng hệ thống quay thưởng cho các cửa hàng.',
          '- Bảo trì và phát triển thêm tính năng mới cho hệ thống quảng cáo CPE.',
        ],
        keyword: 'Software development, Java, Spring, VueJS, Javascript.',
      },
      {
        title: 'Intern Java Developer',
        subtitle: 'Altplus (Extreme VN)',
        time: '01/2020 - 03/2020',
        icon: suitcaseIcon,
        description: [
          '- Xây dựng blog du lịch sử dụng Spring Framework và ReactJS.',
          '- Phát triển kĩ năng coding và xử lí vấn đề qua các mini project.',
        ],
        keyword: 'Java, Java Servlet, Struts, Spring, React, Javascript.',
      },
      {
        title: 'Aptech Hà Nội',
        time: '07/2017 - 04/2019',
        icon: mortarboardIcon,
        description: [
          '- Hoàn thành khoá học Java cơ bản và nâng cao.',
          '- Hoàn thành khoá học HTML/CSS/JS căn bản.',
        ],
      },
      {
        title: 'UNETI - Đại học Kinh tế Kĩ thuật Công Nghiệp',
        time: '09/2016 - 06/2020',
        icon: mortarboardIcon,
        description: [
          '- Chuyên ngành CNTT.',
          '- Tham gia cuộc thi <a href="https://cuocduaso.fpt.com.vn">Cuộc đua số</a>.',
          '- Tham gia nghiên cứu khoa học đạt giải xuất sắc.',
        ],
      },
    ],
    moreTitle: 'Thông tin chi tiết hơn có thể xem tại <a href=\'#\'>đây</a>',
  },
  portfolio: {
    title: 'Portfolio',
    description: 'Một vài dự án mình đã làm và tham gia.',
    projects: [
      {
        href: 'https://github.com/quylua98/uneti-app',
        title: 'Uneti App',
        description: 'Ứng dụng điện thoại cung cấp tin tức, tra cứu thông tin sinh viên.',
        img: [
          { src: unetiImg, alt: 'Uneti logo' },
        ],
      },
      {
        href: 'https://github.com/quylua98/NaiveBayes',
        title: 'Naive Bayes',
        description: 'Ứng dụng giúp sinh viên chọn ngành sử dụng thuật toán naive bayes.',
        img: [
          { src: thomasBayesImg, alt: 'Thomas Bayes\'s image' },
        ],
      },
      {
        href: 'https://github.com/quylua98/db-to-excel',
        title: 'DB Tools',
        description: 'Công cụ export table database ra excel.',
        img: [
          { src: dbToolImg, alt: 'Tool' },
        ],
      },
      {
        href: 'https://www.ashibinaa.com',
        title: 'Shopping mall',
        description: 'Hệ thống quản lí các trung tâm mua sắm.',
        img: [
          { src: ashibinaaImg, alt: 'Ashibina image' },
          { src: toyosakiImg, alt: 'toyosaki image' },
        ],
      },
      {
        href: 'https://skyflag.info',
        title: 'SKYFLAG',
        description: 'Hệ thống trung gian cung cấp nền tảng quảng cáo cho người mua và người thuê.',
        img: [
          { src: skyflagImg, alt: 'SKYFLAG logo' },
        ],
      },
      {
        href: 'https://github.com/quylua98/quylua',
        title: 'Personal Website',
        description: 'Website cá nhân.',
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