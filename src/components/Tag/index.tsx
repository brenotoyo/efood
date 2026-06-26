import { Link } from 'react-router-dom'
import { TagContainer } from './styles'

export type Props = {
  children: React.ReactNode
  fullWidth?: boolean
  href?: string
  onClick?: () => void
}

const Tag = ({ children, fullWidth, href, onClick }: Props) => (
  <TagContainer
    as={href ? Link : 'div'}
    to={href}
    fullWidth={fullWidth}
    hasLink={!!href}
    onClick={onClick}
  >
    {children}
  </TagContainer>
)

export default Tag
