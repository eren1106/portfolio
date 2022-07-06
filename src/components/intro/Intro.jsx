import React from 'react'
import './intro.css';
import Me from '../../img/eren.png';

const Intro = () => {
  return (
    <div className = "i">
        <div className = "i-left">
            <div className = "i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Eren Kuek</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">App Developer</div>
                        <div className="i-title-item">Game Developer</div>
                        <div className="i-title-item">Content Creator</div>
                        <div className="i-title-item">Freelancer</div>
                    </div>
                </div>
                <div className="i-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eaque, nemo nulla magnam cupiditate quam quibusdam facere! Dolorum, labore veniam.
                </div>
            </div>
        </div>
        <div className = "i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img"/>
        </div>
    </div>
  )
}

export default Intro