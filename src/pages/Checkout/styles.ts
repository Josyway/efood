import { styled } from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Row = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 24px;
  align-items: flex-end;
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${colors.beige};
    border: 1px solid ${colors.beige};
    padding: 0 8px;
    width: 100%;
    margin-bottom: 16px;

    &.error {
      border: 2px solid red;
    }
  }
`

export const Paragrafo = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
`
