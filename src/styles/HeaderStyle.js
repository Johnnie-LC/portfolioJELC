import styled from 'styled-components'

const HeaderStyle = styled.header`
  width: 100vw;
  background-color: rgba(53, 56, 73, 0.95);
  height: 56px;

  position: sticky;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  /* letter-spacing: 1px; */
  h1 {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: white;
  }
  nav {
    width: auto;
    padding: 10px 15px;
    border-radius: 5px;
    border: 2px solid rgb(79, 92, 99);
    & i {
      margin-left: 5px;
      vertical-align: middle;
      color: white;
    }
  }
`

export { HeaderStyle }
