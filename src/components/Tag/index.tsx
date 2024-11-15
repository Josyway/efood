import { TagContainer } from './styles'

type Props = {
  day?: 'day'
  children: string
}

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag
