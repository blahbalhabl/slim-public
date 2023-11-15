import '../styles/Header.css'
import logo from '../assets/site-logo.svg'

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header__Title'> 
        { logo ? <img className="Header_Logo" src={logo} style={{ width: '70px', height: '70px' }} /> : <FontAwesomeIcon icon={icons.user} />}
        <h3> SLIM: Sanggunian Legislative Information Management</h3>
      </div>
      <div className='header_links'>
               <h4>ABOUT US</h4>
               <a href='/aboutus'>
               </a>
          </div>
        <div className='header__links'>
               <h4>LEGISLATIVE</h4>
               <a href='/legislative'>
               </a>
          </div>
          <div className='header-links'>
               <h4>SERVICES</h4>
               <a href='/services'>
               </a>
          </div>
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