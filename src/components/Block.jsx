import { BlockStyle } from '../styles/BlockStyle'

const Block = ({ upColor, downColor, orientation }) => {
  return (
    <BlockStyle
      upColor={upColor}
      downColor={downColor}
      orientation={orientation}
    ></BlockStyle>
  )
}

export default Block
