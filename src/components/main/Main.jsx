import ImageMobile from 'src/assests/images/image-intro-mobile.jpg'
import ImageDesktop from 'src/assests/images/image-intro-desktop.jpg'

import IconSnappyProcess from 'src/assests/images/icon-snappy-process.svg'
import IconPrice from 'src/assests/images/icon-affordable-prices.svg'
import IconPeopleFirst from 'src/assests/images/icon-people-first.svg'

import BgPatternMobile from 'src/assests/images/bg-pattern-intro-right-mobile.svg'
import BgPatternDesgtop from 'src/assests/images/bg-pattern-intro-left-desktop.svg'

function Plans({ imgUrl, title, content }) {
  return (
    <>
      <div className="plan">
        <img src={imgUrl} alt="" className="plan__img" />
        <h2 className="plan__title">{title}</h2>
        <p className="plan__content">{content}</p>
      </div>
    </>
  )
}

export default function Main() {
  return (
    <>
    <main>
      <picture>
        <source media="(min-width: 720px)" srcset={ImageDesktop} />
        <img src={ImageMobile} alt="" className='image-intro'/>
      </picture>
      <section className="content-top">
        <div className="content-top__line"></div>
        <h1 className="content-top__title">Humanizing your insurance.</h1>
        <p className="content-top__info">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
        <button className="content-top__btn">VIEW PLANS</button>
      </section>

      <section className="content-bottom">
        <picture>
          <source media="(min-width: 1024px)" srcset={BgPatternDesgtop} />
          <img src={BgPatternMobile} alt="" className='bg-pattern'/>
        </picture>
        <div className="content-bottom__line"></div>
        <h1 className="content-bottom__title">We're different</h1>
        <div className="content-bottom__plans">
          <Plans 
            imgUrl={IconSnappyProcess}
            title='Snappy Process'
            content='Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.'
          />
          <Plans 
            imgUrl={IconPrice}
            title='Affordable Prices'
            content='We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.'
          />
          <Plans 
            imgUrl={IconPeopleFirst}
            title='People First'
            content='Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.'
          />
        </div>
        <div className="content-bottom__card">
          <h1 className="card-title">Find out more about how we work</h1>
          <button className="card-btn">HOW WE WORK</button>
        </div>
      </section>
    </main>
    </>
  )
}