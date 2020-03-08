import React from 'react'
import {Route} from 'react-router-dom'
import '../../../styles.css'

import Sidebar from '../../layout/Sidebar.component'
import Diagnose from './Diagnose.page'
import Analysis from './Analysis.page'
import SendMail from './SendMail.page'
import Prescription from './Prescription.page'
import AddDiagnosis from './AddDiagnosis.page'
import ViewMore from './ViewMore.page'

const DoctorDashboard = (props) => {
    console.log(window.location.href)
    return (
        <div className="sb-nav-fixed">
            <Sidebar />
            <Route path="/doctor/diagnose">
                <div style={{marginLeft: "20%", marginRight: "3%"}}>
                <Diagnose />
                </div>
            </Route>
            <Route path="/doctor/analyse">
                <div style={{marginLeft: "20%", marginRight: "3%"}}>
                <Analysis />
                </div>
            </Route>

            <Route path="/doctor/prescription">
            <div style={{marginLeft: "20%", marginRight: "3%"}}>
                <Prescription />
                </div>
            </Route>

            <Route path="/doctor/add">
                <div style={{marginLeft: "20%", marginRight: "3%"}}>
                    <AddDiagnosis />
                </div>
            </Route>

            <Route path="/doctor/view-more">
            <div style={{marginLeft: "20%", marginRight: "3%"}}>
                    <ViewMore />
                </div>
            </Route>

            <Route path="/doctor/email">
                <div style={{marginLeft: "20%", marginRight: "3%"}}>
                    <SendMail/>
                </div>
            </Route>
        </div>
    )
}

export default DoctorDashboard