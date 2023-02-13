import { useState } from 'react'
import './style.scss'
import Spotlight from './assets/images/image-web-3-desktop.jpg'
import Img1 from './assets/images/image-retro-pcs.jpg'
import Img2 from './assets/images/image-top-laptops.jpg'
import Img3 from './assets/images/image-gaming-growth.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
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
          <img src={Img1} />
          01
          Reviving Retro PCs
          What happens when old PCs are given modern upgrades?
          <img src={Img2} />

          02
          Top 10 Laptops of 2022
          Our best picks for various needs and budgets.
          <img src={Img3} />

          03
          The Growth of Gaming
          How the pandemic has sparked fresh opportunities.
        </section>

        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </main>
    </div>
  )
}

export default App
