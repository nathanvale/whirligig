import React from 'react'
import styled from 'styled-components'

export interface IImageProps {
  url: string
  width?: string
  height?: string
  fitToContent?: boolean
}

const BackgroundContainer = styled.div`
  position: absolute;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Image = ({
  url,
  width,
  height,
  fitToContent,
}: IImageProps): JSX.Element => (
  <>
    <img
      alt=""
      src={url}
      style={{
        position: 'absolute',
      }}
      width={0}
      height={0}
    />
    <BackgroundContainer
      style={{
        position: 'absolute',
        width,
        height,
        backgroundSize: fitToContent ? 'contain' : 'cover',
        backgroundImage: `url(${url})`,
      }}
    />
  </>
)

Image.defaultProps = {
  width: '100%',
  height: '100%',
  fitToContent: false,
}
