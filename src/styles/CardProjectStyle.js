import styled from 'styled-components'

const CardProjectStyle = styled.div`
  min-width: 200px;
  width: 300px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0px 10px 13px -7px #000000, 1px 6px 23px 1px rgba(0, 0, 0, 0);
  position: relative;
  img {
    flex: 1;
  }
  .cardInfo {
    flex: 1;
    padding: 20px;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: initial;
    }
    li {
      font-size: 0.8rem;
      list-style: none;
      padding: 0 5px;
      margin: 2px 2px;
      background-color: yellow;
      border-radius: 5px;
      color: black;
    }

    a {
      position: absolute;
      margin: 20px;
      padding: 5px 10px;
      background-color: rgba(255, 255, 255, 0.2);
      border-style: none;
      border-radius: 5px;
      border: 2px solid rgba(255, 255, 255, 0.5);
      cursor: pointer;
      color: white;
      transition: 300ms ease-in-out all;
      font-size: 1rem;

      &:hover {
        background-color: gray;
      }
    }

    a[title]:hover::after {
      content: attr(title);
      position: absolute;
      top: 100%;
      left: 0;
      padding: 5px 5px;
      margin-top: 5px;
      font-size: 0.8rem;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 3px;
    }

    .githubButton {
      top: 0px;
      right: 0px;
    }
    .deployButton {
      top: 0px;
      right: 50px;
    }
  }
  @media (min-width: 1000px) {
    margin: 30px;
  }
`
export { CardProjectStyle }
