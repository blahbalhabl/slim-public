import '../styles/Header.css'
import logo from '..//assets/site-logo.png'

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header__Title'> 
        { logo ? <img className="Header_Logo" src={logo} style={{ width: '70px', height: '70px' }} /> : <FontAwesomeIcon icon={icons.user} />}
        <h3> SLIM: Sanggunian Legislative Information Management</h3>
      </div>
      <nav>
        <ul className='nav__links'>
            <li><a href='#' about us></a></li>
            <li><a href='#' Goverment></a></li>
            <li><a href='#' Legislative></a></li>
        </ul>
      </nav>
      {/* <div className='header_links'>
        <a href=''>about us</a>
        <a href=''>Goverment</a>
        <a href=''>Legislative</a>
        <a href=''>services</a>
        <a href=''>business</a>
        <a href=''>contact</a>
      </div> */}
    </div>
  )
}

export default Header