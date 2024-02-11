type AuthBtnProps = {
  text: string
}


const AuthBtn: React.FC<AuthBtnProps> = (props) => {
  
  return (
    <button className="btn">{props.text}</button>
  )
}

export default AuthBtn