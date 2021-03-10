import React from 'react';
import Scroll from "../Scroll";

export default function Top() {
  return (
      <section id="top" className="one dark cover">
          <div className="container">
              <header>
                  <h2 className="alt">
                      Xin chào, mình là Quý
                  </h2>
                  <p>Ở đây có một số thứ hay ho về mình, mong bạn sẽ thích ❤️</p>
              </header>

              <footer>
                  <Scroll type="id" element={'something'}>
                      <a href="#something" className="button">
                          Let's go
                      </a>
                  </Scroll>
              </footer>
          </div>
      </section>
  );
}
