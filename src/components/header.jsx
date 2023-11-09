import '../styles/Header.css'
import logo from '..//assets/site-logo.png'

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header__Tittle'> 
        { logo ? <img className="Header_Logo" src={logo} style={{ width: '70px', height: '70px' }} /> : <FontAwesomeIcon icon={icons.user} />}
        <h3> SLIM: Sanggunian Legislative Information Management</h3>
      </div>
    </div>
  )
}

export default Header