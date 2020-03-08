import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../../styles.css'

const Sidebar = (props) => {
   return (

    
    <div id="layoutSidenav">
			<div id="layoutSidenav_nav">
					<nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
						<div class="sb-sidenav-menu">
							<div class="nav">
									<div class="sb-sidenav-menu-heading">Dashboard</div>
									
										<Link to="/doctor/prescription" class="nav-link" 
										><div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
										Prescriptions</Link>
										<Link to="/doctor/diagnose" class="nav-link" >
												<div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
										Diagnose </Link>
										<Link to="/doctor/analyse" class="nav-link" >
												<div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
										Analysis </Link>
										<Link to="/doctor/email" class="nav-link" >
												<div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
										Send Alert </Link>
										<Link to="/" class="nav-link" >
												<div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
										Logout </Link>

							</div>
						</div>
						<div class="sb-sidenav-footer">
							<div class="small"><b>Our Moto :</b>
							<br/>
							<i>Better Health for Better Tomorrow</i>
							</div>
							
						</div>
					</nav>
			</div>
       
    </div>
   
    ) 
}

export default Sidebar