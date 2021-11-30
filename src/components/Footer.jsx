import { FooterStyle } from '../styles/FooterStyle.js'

const Footer = ({ linkedIn, mail, whatsapp, bground }) => (
  <FooterStyle inputColor={bground[1]}>
    <div className="contactMe">
      <h2>Contact me</h2>
      <ul>
        <li>
          <a href={`mailto: ${mail}`} title="mail">
            <i className="fas fa-paper-plane"></i> Mail
          </a>
        </li>
        <li>
          <a href={linkedIn} target="_blank" title="LinkedIn">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href={whatsapp} title="whatsapp">
            <i className="fab fa-whatsapp"></i> Phone
          </a>
        </li>
      </ul>
    </div>
  </FooterStyle>
)

export { Footer }
