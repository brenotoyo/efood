import { Link } from 'react-router-dom'
import { TagContainer } from './styles'

export type Props = {
  children: React.ReactNode
  fullWidth?: boolean
  href?: string
}

const Tag = ({ children, fullWidth, href }: Props) => (
  <TagContainer
    as={href ? Link : 'div'}
    to={href}
    fullWidth={fullWidth}
    hasLink={!!href}
  >
    {children}
  </TagContainer>
)

export default Tag
