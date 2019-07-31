/* eslint-disable import/no-default-export */
declare module '*.ico' {
  const content: string
  export default content
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type TS_FIXME = any

type ICloseAnimationType = 'update' | 'back' | 'addToCart' | 'removeFromCart'

declare interface ICard {
  id: string
  clientRect?: ClientRect
  open?: boolean
  closeAnimationType?: ICloseAnimationType
  initialized?: boolean
}

declare interface IRecipeCard extends ICard {
  imageURL: string
  keywords: string
  title: string
}

declare interface ICarousels {
  title: string
  keyword: string
  cards: IRecipeCard[]
}
