import React, {CSSProperties} from 'react'
import styled from 'styled-components'
import {Card} from './card'

export interface ISliderProps {
  initializeCard: TS_FIXME
  updateScrollLeft: TS_FIXME
  modalExists?: boolean
  visibleIndices: number[]
  columnWidth: number
  marginLeft?: number
  marginRight?: number
  width?: number
  height?: number
  data: ICarousels
  index: number
  initialScrollLeft?: number
  onScroll?: () => void
  registerElement?: TS_FIXME
  scrollLeft?: TS_FIXME
}

const OuterContainer = styled.div`
  position: relative;
  margin-top: 0;
  overflow-y: hidden;
`

const InnerContainer = styled.div`
  transition: -ms-transform 0.5s, -webkit-transform 0.5s, transform 0.5s;
  white-space: nowrap;
  overflow-x: auto;
  padding: 0 8px;
  margin-bottom: -30px;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
`

export const Slider = ({
  registerElement,
  visibleIndices,
  columnWidth,
  width,
  height,
  marginLeft,
  marginRight,
  modalExists,
  data,
  onScroll,
  initializeCard,
  scrollLeft,
}: ISliderProps): JSX.Element => {
  const elements = visibleIndices.map(index => {
    const style: CSSProperties = {
      position: 'absolute',
      width: columnWidth,
      left: index * columnWidth,
    }
    return (
      <div key={index} style={style}>
        <Card
          scrollLeft={scrollLeft}
          onInitialized={() => {
            initializeCard({
              id: data.cards[index].id,
            })
          }}
          recipe={data.cards[index]}
        />
      </div>
    )
  })

  return (
    <OuterContainer
      style={{
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
      }}
    >
      <InnerContainer
        ref={registerElement}
        onScroll={onScroll}
        style={{
          overflowX: modalExists ? 'hidden' : 'scroll',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            position: 'relative',
            width,
            height,
          }}
        >
          {elements}
        </div>
      </InnerContainer>
    </OuterContainer>
  )
}
