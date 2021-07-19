import '../styles.css'

const Login = () => {
  return (
    <div class='login'>
      <form>
        <label for='username'>Username:</label>
        <br />
        <input type='text' id='username'></input> <br />
        <label for='password'>Password:</label>
        <br />
        <input type='password' id='password'></input> <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
