import React from 'react'
import styled from 'styled-components'
import {Slider} from './slider'

export interface ICarouselProps {
  data: ICarousels
  marginLeft?: number
  marginRight?: number
  columnWidth: number
  columnCount?: number
  style?: React.CSSProperties
  initialScrollLeft?: number
  index: number
  title: string
}

const Header = styled.p``
const Container = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Carousel = ({
  data,
  style,
  initialScrollLeft,
  marginLeft,
  marginRight,
  columnWidth,
  index,
  title,
}: ICarouselProps): JSX.Element => (
  <Container style={style}>
    <Header>{title}</Header>
    <Slider
      initialScrollLeft={initialScrollLeft}
      marginLeft={marginLeft}
      marginRight={marginRight}
      key={data.keyword}
      data={data}
      columnWidth={columnWidth}
      index={index}
      initializeCard={() => {}}
      updateScrollLeft={() => {}}
      visibleIndices={[]}
    />
  </Container>
)
