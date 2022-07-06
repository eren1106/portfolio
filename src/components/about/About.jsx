import React from 'react'
import './about.css'
import Award from '../../img/award.png';

const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img className='a-img' src="https://w0.peakpx.com/wallpaper/451/391/HD-wallpaper-eren-yeager-attack-on-titan-eren-yeager-fanart.jpg" alt="" />
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque molestias atque eligendi, aliquam similique!
            </p>
            <p className='a-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quis, illo eveniet accusamus quas est voluptatum accusantium expedita aperiam beatae ut saepe deserunt, doloribus eos sapiente. Iure omnis autem placeat, quibusdam, optio laborum possimus minima illo, dolore deleniti harum nihil?
            </p>
            <div className='a-award'>
                <img src={Award} alt="" className='a-award-img'/>
                <div className='a-award-texts'>
                    <h4 className='a-award-title'>International Design</h4>
                    <p className='a-award-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit earum, quam quae unde nam!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About