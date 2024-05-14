// CSS
import styles from './Cadastro.module.css'

// React
import { useState, useEffect } from 'react'

function Cadastro() {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name='displayName' required placeholder='Nome do usuário'/>
        </label>

        <label>
          <span>E-mail:</span>
          <input type="email" name='email' required placeholder='example@example.com'/>
        </label>

        <label>
          <span>Senha:</span>
          <input type="password" name='password' required placeholder='*******'/>
        </label>

        <label>
          <span>Confirme sua senha:</span>
          <input type="password" name='confirmPassword' required placeholder='Confirme a sua senha'/>
        </label>

        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Cadastro
