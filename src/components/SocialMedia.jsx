import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
function SocialMedia() {
  return (
    <div class="hero-social">
      <a
        href="https://www.linkedin.com/in/albilal-bintang-a5250a292"
        id="linkedin"
      >
        <FaLinkedin />
      </a>
      <a href="https://instagram.com/albilalbintang" id="instagram">
        <FaInstagram />
      </a>
      <a href="https://github.com/bilalll7" id="github">
        <FaGithub />
      </a>
    </div>
  );
}

export default SocialMedia;
