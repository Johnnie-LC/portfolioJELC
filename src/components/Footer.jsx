import { FooterStyle } from '../styles/FooterStyle.js'

const Footer = () => (
  <FooterStyle>
    <div className="contactMe">
      <h2>Contact me</h2>
      <ul>
        <li>
          <a href="mailto: johesloc@gmail.com" title="mail">
            <i className="fas fa-paper-plane"></i> Mail
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/johnnie-lopez-3343008/"
            target="_blank"
            title="Github"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="whatsapp://send?text=Tu mensaje&phone=+573117475676&abid=+573117475676"
            title="whatsapp"
          >
            <i className="fab fa-whatsapp"></i> Phone
          </a>
        </li>
      </ul>
    </div>
  </FooterStyle>
)

export { Footer }
