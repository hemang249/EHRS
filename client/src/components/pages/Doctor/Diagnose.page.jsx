import React, {useState, useContext} from 'react'
import '../../../styles.css'
import Footer from '../../layout/Footer.component'
import PatientContext from '../../../context/patient/patient.context'
import PatientCard from '../../layout/PatientCard.component'


const Diagnose = (props) => {
    
    const [aadharId, setAadharId] = useState("")
    const patientContext = useContext(PatientContext)

    const onAadharIdChange = (e) => {
        setAadharId(e.target.value)
    }

    const onSearch = async (e) => {
        e.preventDefault()
        console.log(patientContext.patient)
        await patientContext.getPatient(aadharId) 
    }

    return (
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid">
                    <h1 class="mt-4 my-3">Diagnose</h1>
                    <input onChange={onAadharIdChange} type="text" placeholder="Patient ID" className="br-2"/>
                    <button onClick={onSearch} className="my-3 br-2 no-border button-4 bg-success">Search</button>                     
                   
                    {
                        patientContext.patient.name != null && <PatientCard
                            name={patientContext.patient.name}
                            aadharId={patientContext.patient.aadharId}
                            contact={patientContext.patient.contact}
                            address={patientContext.patient.address.city}
                            age={patientContext.patient.age}
                            allergies={patientContext.patient.allergies}
                            diagnosis={patientContext.patient.history[patientContext.patient.history.length - 1].diagnosis}
                        
                        />
                    }

                 
                    
                    
                </div>
                
            </main>

            
            
            <Footer/>

        </div>
    )
}

export default Diagnose