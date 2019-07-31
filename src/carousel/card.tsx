import React from 'react'
import styled from 'styled-components'
import {Description} from './description'
import {ImageContainer} from '..'

export interface ICardProps {
  recipe: IRecipeCard
  scrollLeft: number
  onInitialized?: () => void
}

const Container = styled.div`
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 30px;
  display: inline-block;
  width: 100%;
`

const Panel = styled.div`
  background: white;
  position: relative;
  height: 100%;
  margin-bottom: 0;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
`

export const Card = ({recipe}: ICardProps): JSX.Element => (
  <Container>
    <Panel>
      <ImageContainer url={recipe.imageURL} ratio={0.4} />
      <Description recipe={recipe} />
    </Panel>
  </Container>
)
