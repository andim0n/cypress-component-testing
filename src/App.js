import Header from './components/Header'
import Menu from './components/Menu'
import Login from './components/Login'
import Calendar from './components/Calendar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div class='app'>
      <div class='container'>
        <Header />
        <Menu />
        <div class='content'>
          <Login />
          <Calendar />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
