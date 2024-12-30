import { Sadebar } from '../Cart/styles'

import * as S from './styles'

type Props = {
  title: string
  children: JSX.Element
}

const Card = ({ children, title }: Props) => {
  return (
    <S.Container>
      <S.Overlay />
      <Sadebar className="divFormulario">
        <h2>{title}</h2>
        {children}
      </Sadebar>
    </S.Container>
  )
}

export default Card
