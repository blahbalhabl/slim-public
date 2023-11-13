import '../styles/footer.css'
import logo from '..//assets/site-logo.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <div className='footer__title'>
            <h2>Sanggunian Legislative Information Management</h2>
            { logo ? <img className="Header_Logo" src={logo} style={{ width: '100px', height: '100px' }} /> : <FontAwesomeIcon icon={icons.user} />}
          </div>
          <div className='sb__footer-links-div'>
               <h4>DILG</h4>
               <a href='/employer'>
                  <p>Employer</p>
               </a>
               <a href='/employer'>
                  <p>Employer</p>
               </a>
               <a href='/employer'>
                  <p>Employer</p>
               </a>
               <a href='/employer'>
                  <p>Employer</p>
               </a>
          </div>
          <div className='footer-links__div'>
              <h4>Resources</h4>
              <a href='/resource'>
                <p>Resource center</p>
              </a>
              <a href='/resource'>
                <p>Resource center</p>
              </a>
              <a href='/resource'>
                <p>Resource center</p>
              </a>
          </div>
          <div className='footer__links__div'>
              <h4>Company</h4>
              <a href='About'>
                <p>employer</p>
              </a>
              <h4>Company</h4>
              <a href='About'>
                <p>employer</p>
              </a>
              <h4>Company</h4>
              <a href='About'>
                <p>employer</p>
              </a>
              <h4>Company</h4>
              <a href='About'>
                <p>employer</p>
              </a>
          </div>
          <div className='footer_links_div'>
            <h4>message us</h4>
            <div className='social media'>
                <p></p>
            </div>
          </div>
        </div>

      <hr></hr>
      <div className='footer-below'>
        <div className='footer-copyright'>
          <p>
            @{new Date().getFullYear()} DHVTSU. All right reserved.
          </p>
        </div>
        <div className='footer__below__links'>
              <a href='/terms'><div><p>Terms & Conditions</p></div></a>
              <a href='/Privacy'><div><p>Privacy</p></div></a>
              <a href='/Security'><div><p>Security</p></div></a>
              <a href='/Cookie'><div><p>Cookies Decleration</p></div></a>
        </div>
      </div>
      </div>
    </div>
    
  )
}
export default Footer