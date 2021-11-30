import styled from 'styled-components'

const BlockStyle = styled.div`
  background-color: ${(props) => props.inputColor};
  background-image: linear-gradient(
    ${(props) => props.orientation},
    ${(props) => props.upColor} 50%,
    ${(props) => props.downColor} 50%
  );
  width: 100%;
  height: 100px;
  @media (min-width: 736px) {
    height: 150px;
  }
`
export { BlockStyle }
