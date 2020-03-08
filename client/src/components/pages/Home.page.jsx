import React from 'react'
import {Link} from 'react-router-dom'
import '../../landing1.css'
import '../../landing2.css'

const Home = (props) => {
	return (
		<div>
      <header id="header">
				<div class="inner">
					<h1><a href="Info.html" class="logo"><strong>EHRs</strong> for Everyone</a></h1>
					<nav id="nav">
						
						<Link to="/register">Registration</Link>
						<Link to="/login">Login</Link>
					</nav>
					<a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>
				</div>
			</header>

	
			<main id="banner">
				<div class="inner">
					<header>
						<h1>"It's Time To Digitize Indian Health"</h1>
					</header>

					<div class="flex ">

						<div>
							<span class="icon fa-database"></span>
							<h3>Centralized Database</h3>
							<p>All things at one place.</p>
						</div>

						<div>
							<span class="icon fa-signal"></span>
							<h3>Data Analytics</h3>
							<p>Find data like never before.</p>
						</div>

						<div>
							<span class="icon fa-hospital-o"></span>
							<h3>Hassle Free Treatment</h3>
							<p>Fast process, fast recovery.</p>
						</div>

					</div>
					<a href="register.html" class="button">Get Started</a>
				
				</div>
			
			
			
		</main>
		<div id="layoutError_footer">
                
				<footer class="red-col">
					
				    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted404">Copyright &copy; Your Website 2020</div>
                            <div class="text-muted4041">
                                <a href="privacypolicy.html">Privacy Policy</a> &middot;
                                <a href="TermsAndCon.html">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>       
    </div>
    )
}

export default Home