interface IButton {
  children: React.ReactNode | JSX.Element
}

function Button({children}: IButton) {
  return <Button>{children}</Button>
}

export default Button
