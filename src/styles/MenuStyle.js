import styled from 'styled-components'

const MenuStyle = styled.nav`
  position: absolute;
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0%;

  padding: 10px;

  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);

  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  transition: 300ms ease;

  .inner {
    background-color: rgb(76, 92, 150);
    border-radius: 10px;
    width: 288px;
    padding: 40px 24px 24px;
    position: relative;
    text-align: center;
  }
  .inner h2 {
    padding-bottom: 20px;
    margin-bottom: 20px;
    color: white;
    border-bottom: 2px solid rgb(99, 113, 163);
  }
  .links {
    list-style: none;
    line-height: 45px;
  }
  .links a {
    text-decoration: none;
    color: rgb(151, 161, 194);
  }
  .inner .close {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 15px 15px;
    text-align: end;
    text-decoration: none;
  }
  .close i {
    color: white;
    font-size: 1rem;
  }
`
export { MenuStyle }
