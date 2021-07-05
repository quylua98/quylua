import React from 'react';
import pic8 from "../../assets/images/frontend-skill.png";
import javaLogo from "../../assets/images/java-logo.png";

export default function Skill() {
    return (
        <section id="skills" className="three">
            <div className="container">
                <header>
                    <h2>Kĩ năng</h2>
                </header>

                <p>
                    Mình có một vài năm kinh nghiệm với lập trình và đam mê tìm tòi những thứ mới mẻ.
                    Vì thế nên mỗi thứ mình lại biết một tý, ngôn ngữ chính của mình thì là Java và JS.
                    Dưới đây là một số công nghệ mình đã hấp thụ được trong bao ngày tháng qua 🔥
                </p>

                <div className="bg-color">
                    <a href="/#" className="image featured">
                        <img src={pic8} alt="skill"/>
                    </a>

                    <div className="" id="up-down">
                        <img className="max-w-150" src={javaLogo} alt='java' />
                    </div>
                </div>
            </div>
        </section>
    );
}
