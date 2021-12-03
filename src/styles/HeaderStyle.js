import styled from 'styled-components'

const HeaderStyle = styled.header`
  width: 100vw;
  background-color: ${(props) => props.inputColor};
  /* height: 56px; */

  position: sticky;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
  /* letter-spacing: 1px; */
  h1 {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: white;
  }

  .active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      text-transform: uppercase;
      font-weight: bold;
      color: white;
      li {
        /* margin-right: 10px; */
        transition: 300ms ease-in-out all;
        padding: 10px 10px;
        /* border-radius: 10px; */
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
    .show {
      display: none;
      padding: 20px;
    }
  }
  @media (max-width: 735px) {
    background-color: rgba(42, 50, 66, 0.5);

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 300ms ease-in-out all;
      ul {
        display: none;
        flex-direction: column;
        a {
          width: 101px;
          text-align: center;
          font-size: 1rem;
        }
      }
      .show {
        display: flex;
        padding: 20px;
        transition: 300ms ease-in-out all;
      }
    }
  }
`
export { HeaderStyle }
