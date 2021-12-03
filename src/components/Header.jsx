import { HeaderStyle } from '../styles/HeaderStyle.js'
const menuItems = ['Home', 'About me', 'Projects', 'Contact me']

const Header = ({ name, bground }) => {
  const handleClick = (e) => {
    const brotherNodes = e.target.parentNode.parentNode.childNodes
    brotherNodes.forEach((element) => {
      if (e.target.innerText === element.firstChild.innerText) {
        element.firstChild.classList.add('active')
      } else {
        element.firstChild.classList.remove('active')
      }
    })
  }

  const handleMenu = (e) => {
    console.log(e.target)
    e.target.classList.contains('fa-bars')
      ? e.target.classList.replace('fa-bars', 'fa-times')
      : e.target.classList.replace('fa-times', 'fa-bars')

    if (e.target.classList.contains('fa-times')) {
      document.getElementById('deployMenu').style = 'display:flex'
      e.target.style = 'width:101px; text-align:center;'
    } else {
      document.getElementById('deployMenu').style = 'display:none'
      e.target.style = 'width:0'
    }

    const menu = document.getElementById('deployMenu')
    console.log(menu)
  }

  return (
    <HeaderStyle inputColor={bground[1]} id="header">
      <h1>
        <a href="index.html">{name}</a>
      </h1>
      <nav>
        <a className="show" id="menu" onClick={handleMenu}>
          <i className="fas fa-bars"></i>
        </a>

        <ul onClick={handleClick} id="deployMenu">
          {menuItems.map((item, ind) => (
            <a key={ind} href={`#${item}`}>
              <li className={ind === 0 ? 'active' : null}>{item}</li>
            </a>
          ))}
        </ul>
      </nav>
    </HeaderStyle>
  )
}
export { Header }
