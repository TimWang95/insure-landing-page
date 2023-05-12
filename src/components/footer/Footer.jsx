import { ReactComponent as Logo } from 'src/assests/images/logo.svg'

import { ReactComponent as IconFacebook } from 'src/assests/images/icon-facebook.svg'
import { ReactComponent as IconTwitter } from 'src/assests/images/icon-twitter.svg'
import {ReactComponent as IconPinterest } from 'src/assests/images/icon-pinterest.svg'
import {ReactComponent as IconInstagram } from 'src/assests/images/icon-instagram.svg'


export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__social-media">
          <div className="logo-container">
            <Logo />
          </div>
          <div className="social-media__icon">
            <a href=""><IconFacebook/></a>
            <a href=""><IconTwitter/></a>
            <a href=""><IconPinterest/></a>
            <a href=""><IconInstagram/></a>
          </div>
        </div>
        <div className='footer__line'></div>
        <div className="footer__section">
          <section className="footer__section__content">
            <h3 className="content-title">OUR COMPANY</h3>
            <a href="" className="page-link">HOW WE WORK</a>
            <a href="" className="page-link">WHY INSURE?</a>
            <a href="" className="page-link">CHECK PRICE</a>
            <a href="" className="page-link">REVIEWS</a>
          </section>
          <section className="footer__section__content">
            <h3 className="content-title">HELP ME</h3>
            <a href="" className="page-link">FAQ</a>
            <a href="" className="page-link">TERMS OF USE</a>
            <a href="" className="page-link">PRIVACY POLICY</a>
            <a href="" className="page-link">COOKIES</a>
          </section>
          <section className="footer__section__content">
            <h3 className="content-title">CONTACT</h3>
            <a href="" className="page-link">SALES</a>
            <a href="" className="page-link">SUPPORT</a>
            <a href="" className="page-link">LIVE CHAT</a>
          </section>
          <section className="footer__section__content">
            <h3 className="content-title">OTHERS</h3>
            <a href="" className="page-link">CAREERS</a>
            <a href="" className="page-link">PRESS</a>
            <a href="" className="page-link">LICENSES</a>
          </section>
        </div>

      </footer>
    </>
  )
}