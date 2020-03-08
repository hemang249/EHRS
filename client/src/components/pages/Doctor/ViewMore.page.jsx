import React, {useContext} from 'react'
import PatientContext from '../../../context/patient/patient.context'
import HistoryCard from '../../layout/HistoryCard.component'
import DoctorContext from '../../../context/doctor/doctor.context'

const ViewMore = (props) => {
    const patientContext = useContext(PatientContext)
    const doctorContext = useContext(DoctorContext)
    
    return (
        <div>
        <h1>Reports</h1>
            {
                patientContext.patient.history.forEach(h => (
                    <HistoryCard doctorName={doctorContext.doctor.name}
                        doctorId={doctorContext.doctor.doctorId}
                        contact={doctorContext.doctor.contact}
                        address={doctorContext.doctor.address}
                        diagnosis={h.diagnosis}
                        medicines={h.medicines}
                    />
                ))
        
             }
        </div>
    )
} 

export default ViewMore