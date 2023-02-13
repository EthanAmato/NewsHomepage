import { useState } from 'react'
import './style.scss'
import Img1 from './assets/images/image-web-3-desktop.jpg'


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
        <section className='web-3'>
          {/* <img src={Img1} alt='Web 3 video game console' /> */}
          The Bright Future of Web 3.0?

          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
          But is it really fulfilling its promise?

          Read more
        </section>
        <section className='new-articles'>

          New

          Hydrogen VS Electric Cars
          Will hydrogen-fueled cars ever catch up to EVs?

          The Downsides of AI Artistry
          What are the possible adverse effects of on-demand AI image generation?

          Is VC Funding Drying Up?
          Private funding by VC firms is down 50% YOY. We take a look at what that means.
        </section>
        <section className='top-3'>
          01
          Reviving Retro PCs
          What happens when old PCs are given modern upgrades?

          02
          Top 10 Laptops of 2022
          Our best picks for various needs and budgets.

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
