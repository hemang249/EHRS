import React, {useContext, useState} from 'react'
import PatientContext from '../../../context/patient/patient.context'

const AddDiagnosis = (props) => {
    
    const patientContext = useContext(PatientContext)
    
    return (
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid">
                    <h1 class="mt-4 my-3">Diagnose {patientContext.patient.name}</h1>

                    <form action="http://localhost:8080/api/patient-data" method="POST">
                        <input name="diagnosis" type="text" placeholder="Enter Disease" className="br-2" style={{margin: "5% 0"}}/>
                        <input name="medicines" type="text" placeholder="Enter Medicines" className="br-2" style={{margin: "5% 0"}}/>

                        <input type="submit" className="my-3 br-2 no-border input-4 bg-success" style={{width:"25%"}}/>
                        

                    </form>                    
                    
                 
                    
                    
                </div>
                
            </main>

            
            


        </div>
    )
}

export default AddDiagnosis