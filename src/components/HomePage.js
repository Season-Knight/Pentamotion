import React from 'react';
import './HomePage.css';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import aerobesque from './images/aerobesque.JPG'
import dancebow from './images/dancebow.JPG'
import danceleap from './images/danceleap.JPG'
import dancelight from './images/dancelight.JPG'
import dancelogo from './images/dancelogo.PNG'
import pentamotionlogo from './images/pentamotionlogo.png'
import dancelogo2 from './images/dancelogo2.png'

function HomePage(props) {
    return (
		<div>
        <div className="header">    		   
		  <div id="logo"><img src={dancelogo2} alt="dancelogo" height="300px" width="400px"/></div>
		  </div>
    <nav>
  			<ul>
				    <li className="nav-item"><a href="#" >Home</a></li>
				    <li className="nav-item"><a href="#" >Blog</a></li>
				    <li className="nav-item"><a href="#">About</a></li>
					<li className="nav-item"><a href="#">Gallery</a></li>
    				<li className="nav-item"><a href="#" >Contact</a></li>
			  </ul>
				  <div className="menu-bar">Menu
					    <span className="hamburger-icon"><i className="fa fa-bars"></i></span>
			  </div>
		</nav>
		<div className="container">
		<div className="section">
			<div className="col span_2_of_3">
		<Carousel
			centered
			padding={20}
			slidesPerPage={1}
			autoPlay={6000}
            animationSpeed={3000}
            infinite>
				<img src={aerobesque} alt="aerobesque" height='400'  />
				<img src={dancebow} alt="dancebow" height='400'/>
				<img src={danceleap} alt="danceleap" height='400'/>
				<img src={dancelight} alt="dancelight" height='400'/>
		</Carousel>
		</div>
		</div>
		</div>
		<aside className="col span_1_of_3">
		<div
			className="side-post">
				
					<h1>Why Pentamotion?</h1>
					<p className="side-content">5 sences, 5 fingers and five toes on each hand and foot, five dancers, five elements, etc etc etc some inspirational text here</p>
					</div>
				<div className="side-post"><h2>Follow Us!</h2></div>
				
				</aside>
			</div>
       
    );
}

export default HomePage;