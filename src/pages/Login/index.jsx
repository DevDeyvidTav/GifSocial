import svgGoogle from '../../Assets/google.svg'


import { Link } from 'react-router-dom'
import './styles.scss'
export function Login() {
  return (
    <div className='Login-container'>
      <div className='Login-area'>
        <div className="logo-area-login">
          <div className='login-logo'></div>
          <p className='login-title'>Uma nova experiência em rede social.</p>
        </div>
        <div className='login-area-container'>
        <form className='login-form'>
          <label htmlFor="email-input">Email</label>
          <input className='email-input' type="text" placeholder='digite o seu email' />
          <label htmlFor="password-input">Senha</label>
          <input className='password-input' type="text" placeholder='digite a sua senha' />
          <Link to="/"><button className='btn-form'>Entrar</button></Link>
        </form>
        <div className='divider'>
          <div className='line1'></div><p>ou</p><div className='line2'></div>
        </div>
        <button className='btn-google'><img className='img-google' src={svgGoogle} alt="" /> Entre com o google</button>
        <p className='register-text'>Não possui conta?</p>
        <button className="register-btn">inscreva-se</button>
        </div>

      </div>
    </div>
  )
}