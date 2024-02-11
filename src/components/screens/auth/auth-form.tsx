import AuthBtn from "./authBtn";
import './auth-form.css'


const Auth: React.FC = () => {
  return (
    <div className="auth">
      <h2 className="subtitle">
        Log In to your todo
      </h2>
      <form>
        <input type="text" placeholder="Enter login"/>
        <input type="password" placeholder="Enter password"/>
        <div className="button__wrapper">
          <AuthBtn text='Log in'/>
          <AuthBtn text='Forgot password'/>
        </div>
      </form>
    </div>
  )
}


export default Auth;