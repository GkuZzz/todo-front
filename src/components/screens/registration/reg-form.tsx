import AuthBtn from "../auth/authBtn"
import '../auth/auth-form.css'

const Reg: React.FC = () => {
  return (
    <div className="auth">
      <h2 className="subtitle">
        Registration 
      </h2>
      <form>
        <input type="text" placeholder="Create login" />
        <input type="password" placeholder="Create password" />
        <input type="pssword" placeholder="Confirm password" />
        <div className="button__wrapper">
          <AuthBtn text='Create account'/>
        </div>
      </form>

    </div>
  )
  
}

export default Reg