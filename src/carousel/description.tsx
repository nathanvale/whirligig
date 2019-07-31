import React from 'react'
import styled from 'styled-components'

export interface IDescriptionProps {
  recipe: IRecipeCard
}

const Container = styled.div`
  padding: 7px 12px 12px;
  flex-grow: 0;
  height: 64px;
`

const Heading = styled.h5`
  white-space: normal !important;
  max-height: 48px !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important;
  color: red;
`

export const Description = ({recipe}: IDescriptionProps): JSX.Element => (
  <Container>
    <Heading>{recipe.title}</Heading>
  </Container>
)
