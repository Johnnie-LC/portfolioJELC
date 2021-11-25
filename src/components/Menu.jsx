import { MenuStyle } from '../styles/MenuStyle.js'

const menuItems = ['Home', 'Generic', 'Elements', 'log In', 'Sign Up']

const Menu = () => (
  <MenuStyle display="none">
    <div className="inner">
      <h2>Menu</h2>
      <ul className="links">
        {menuItems.map((item, i) => (
          <li key={i}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <a href="#" className="close">
        <i className="fas fa-times"></i>
      </a>
    </div>
  </MenuStyle>
)

export { Menu }
