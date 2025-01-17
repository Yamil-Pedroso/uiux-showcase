import { Btn } from './styles'
interface IButton {
  title?: string
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

const Button: React.FC<IButton> = ({ className, children, style }) => {
  return (
    <Btn className={className} style={style}>
      {children}
    </Btn>
  )
}

export default Button