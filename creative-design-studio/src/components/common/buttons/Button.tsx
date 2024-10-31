import { Btn } from './styles'

interface IButton {
  title?: string
  className?: string
}

const Button: React.FC<IButton> = ({ title, className }) => {
  return (
    <Btn className={className}>{title}</Btn>
  )
}

export default Button
