// CSS
import { useAuthentication } from '../../hooks/useAuthentication'
import styles from './Cadastro.module.css'

// React
import { useState, useEffect } from 'react'

function Cadastro() {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error: authError, loading} = useAuthentication();

  useEffect(() => {
    if(authError){
        setError(authError)
    }
  }, [authError])

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError(null)

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return
    }

    const res = await createUser(user);

    console.log(res)
  }

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" name='displayName' required placeholder='Nome do usuário' value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
        </label>

        <label>
          <span>E-mail:</span>
          <input type="email" name='email' required placeholder='example@example.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>

        <label>
          <span>Senha:</span>
          <input type="password" name='password' required placeholder='*******' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>

        <label>
          <span>Confirme sua senha:</span>
          <input type="password" name='confirmPassword' required placeholder='Confirme a sua senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        </label>

        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && (<button className='btn' disabled>Aguarde...</button>)}

        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Cadastro
