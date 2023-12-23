import React from "react";

function Footer() {
  return (
    <footer className="bg">
      <div class="row-footer">
        <div class="footer-right">
          <a href="#">
            <img src="./assets/img/logorpl4.png" alt="rpl" />
          </a>
          <a href="#">
            <img src="./assets/img/logosmk.png" alt="rpl" />
          </a>
          <a href="#">
            <img src="./assets/img/logorpl.png" alt="rpl" />
          </a>
          <p>Unit Kegiatan Waspada Virus.</p>
        </div>
        <div class="footer-left">
          <h2>Tautan</h2>
          <p class="deskripsi-footer">github.com/bilalll7</p>
          <p class="deskripsi-footer">albilalbintang.github.io</p>
        </div>
      </div>
      <div class="copyright-border">
        <div class="row-copyright">
          <p>Copyright © 2023 Covid-19. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
