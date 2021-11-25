import { HeaderStyle } from '../styles/HeaderStyle.js'

const Header = ({ name }) => (
  <HeaderStyle id="header">
    <h1>
      <a href="index.html">Hi my name is {name}</a>
    </h1>
    <nav>
      <a href="#menu">
        Menu <i className="fas fa-bars"></i>
      </a>
    </nav>
  </HeaderStyle>
)
export { Header }
