import { useRef, useState } from 'react'
import './style.scss'
import Spotlight from './assets/images/image-web-3-desktop.jpg'
import Hamburger from './assets/images/Hamburger_icon.svg.png'
import XIcon from './assets/images/icon-menu-close.svg'
import Img1 from './assets/images/image-retro-pcs.jpg'
import Img2 from './assets/images/image-top-laptops.jpg'
import Img3 from './assets/images/image-gaming-growth.jpg'


function App() {
  const [hasClickedHamburger, setHasClickedHamburger] = useState(false)

  function toggleMenu() {
    setHasClickedHamburger((curr)=>(!curr))
  }

  return (
    <>
      <div className={hasClickedHamburger ? `sidebar clicked` : `sidebar`}>
        <img src={XIcon} alt="X" onClick={toggleMenu}/>
        <ul className='links'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>New</a></li>
          <li><a href='#'>Popular</a></li>
          <li><a href='#'>Trending</a></li>
          <li><a href='#'>Categories</a></li>
        </ul>
      </div>      <div className='container'>
        <header>
          <nav className='navbar'>
            <h1 className='logo'>W.</h1>
            <ul className='links'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>New</a></li>
              <li><a href='#'>Popular</a></li>
              <li><a href='#'>Trending</a></li>
              <li><a href='#'>Categories</a></li>
            </ul>
            <img src={Hamburger} alt="Hamburger icon" onClick={toggleMenu}/>
          </nav>
        </header>
        <main>
          <section className='spotlight'>
            <img src={Spotlight} alt='Web 3 video game console' />
            <div className='text'>
              <h2>The Bright Future of Web 3.0?</h2>
              <p>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
                <a href='#'>
                  Read more
                </a>
              </p>
            </div>
          </section>
          <section className='new-articles'>
            <h2>New</h2>
            <a href='#'>Hydrogen VS Electric Cars</a>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr />
            <a href='#'>The Downsides of AI Artistry</a>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
            <hr />
            <a href='#'>Is VC Funding Drying Up?</a>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </section>
          <section className='recommend'>
            <div>
              <img src={Img1} alt="Reviving Retro PCs" />
              <div className='text'>
                <h2>01</h2>
                <a href='#'>Reviving Retro PCs</a>
                <p>What happens when old PCs are given modern upgrades?</p>
              </div>
            </div>

            <div>
              <img src={Img2} alt="Top 10 Laptops of 2022"/>
              <div className='text'>
                <h2>02</h2>
                <a href='#'>Top 10 Laptops of 2022</a>
                <p>Our best picks for various needs and budgets.</p>
              </div>
            </div>

            <div>
              <img src={Img3} alt="The Growth of Gaming"/>
              <div className='text'>
                <h2>03</h2>
                <a href='#'>The Growth of Gaming</a>
                <p>How the pandemic has sparked fresh opportunities.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
 



export default App
