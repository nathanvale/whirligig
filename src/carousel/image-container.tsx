import React from 'react'
import styled from 'styled-components'
import {Image} from './image'

export interface IImageContainerProps {
  ratio: number
  url: string
  style?: React.CSSProperties
}

const OuterContainer = styled.div`
  position: relative;
  z-index: 0;
  background: white;
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  font-weight: normal;
  justify-content: space-between;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
  transform: translateZ(0);
`

const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
`

export const ImageContainer = ({
  style,
  ratio,
  url,
}: IImageContainerProps): JSX.Element => (
  <OuterContainer
    style={{
      ...style,
      paddingTop: `${ratio * 100}%`,
    }}
  >
    <InnerContainer>
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Image url={url} />
        </div>
      </div>
    </InnerContainer>
  </OuterContainer>
)
