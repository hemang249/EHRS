import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles.css'

const HistoryCard = (props) => {
    return (
        <div class="wrapper">
            <div class="left">
               
                <br/>
                <table class="table">
                    <tr>
                        <th>Doctor Name :</th>
                        <td>{props.doctorName}</td>
                    </tr>
                    <tr>
                    <th>Doctor Id:</th>
                    <td>{props.dcotorId}</td>
                    </tr>
                    <tr>
                    <th>Phone</th>
                    <td>{props.contact}</td>
                    </tr>
                    <tr>
                    <th>Address</th>
                    <td>{props.address}</td>
                    </tr>
                </table>
              
            </div>
                
            <div class="right">
                <div class="info">
                    <h4>Medical Diagnosis</h4>
                    <div class="info_data">
                        <div class="data">
                            <h6>Date</h6>
                            <p>01/02/2000</p>
                        </div>
                        
                     </div>
                </div>
                <div class="project">
                    <h4>Diagnosis</h4>
                    <div class="projects_data">
                        <div class="data">
                            <h6>{props.diagnosis}</h6>
                            </div>
                        
                    </div>
                </div>
                 <div class="project">
                    <h4>Medications Prescribed</h4>
                        <div class="projects_data">
                             <div class="data">
                                <h6>{props.medicines[0]}</h6>
                                <h6>{props.medicines[1]}</h6>
                            </div>
                            
                        </div>
                 </div>
                
            </div>
        </div>    
    )
}

export default HistoryCard