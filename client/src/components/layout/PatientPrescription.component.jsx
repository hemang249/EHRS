import React from 'react'
import '../../styles.css'

const PatientCard = (props) => {
    console.log(props.medicines)
    return (
        <div class="wrapper">
            <div class="left">
                {/* <img src="assets/img/Trushant.JPG" width="100" height="100" /> */}
                <br/>
                <table class="table">
                    <tr>
                        <th>Name :</th>
                        <td>{props.name}</td>
                    </tr>
                    <tr>
                    <th>Aadhar Id :</th>
                    <td>{props.aadharId}</td>
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
                    <h4>Medical Information</h4>
                    <div class="info_data">
                        <div class="data">
                            <h6>Medications</h6>
                            <h6>{props.medicines[0]}</h6>
                            <h6>{props.medicines[1]}</h6>

                        </div>
                        <div class="data">
                            <h6>Age</h6>
                            <p>{props.age}</p>
                         </div>
                     </div>
                </div>
                <div class="project">
                    <h4>Allergies</h4>
                    <div class="projects_data">
                        <div class="data">
                            <h6>{props.allergies[0]}</h6>
                            <h6>Penicillin</h6>
                            </div>
                        
                    </div>
                </div>
                 <div class="project">
                    <h4>Diagnosis</h4>
                        <div class="projects_data">
                             <div class="data">
                                <h6>Disease</h6>
                                <h6>{props.diagnosis}</h6>
                            </div>
                            
                        </div>
                 </div>
                
            </div>
        </div>    
    )
}

export default PatientCard