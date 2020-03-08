import React, {useContext, useState} from 'react'
import PatientContext from '../../../context/patient/patient.context'
import MyChart from '../../layout/charts/PieChart.component'
import {PieChart, Pie} from 'recharts'


const Analysis = (props) => {
    const patientContext = useContext(PatientContext)
    const [chartType, setChartType] = useState("by-disease")
    const [disease, setDisease] = useState("")
    const [showDisease, setShowDisease] = useState(false)
    const [showSpecificDisease, setShowSpecificDisease] = useState(false)
    const [showCity, setShowCity] = useState(false)
    const [city, setCity] = useState("")

    const onChartOptionChange = (e) => {
        setChartType(e.target.value)
    }

    const onDiseaseChange = (e) => {
        
        setDisease(e.target.value)
    }

    const onDiseaseClick = async (e) => {
        setShowDisease(true)
        setShowSpecificDisease(false)
    
        await patientContext.filterPatientsByDisease(disease)
        
    }

    const onSpecificClick = async (e) => {
        await patientContext.filterPatientsByDisease(disease)
        setShowSpecificDisease(true)
    }

    const onCityClick = async (e) => {
        await patientContext.filterPatientsByArea(city)
        setShowCity(true)
        setShowDisease(false)
        setShowSpecificDisease(false)
    }

    const onCityChange = (e) => {
        setCity(e.target.value)
    }

    return (
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid">
                    <h1 class="mt-4 my-3">Health Data Analytics</h1>
                    <select onChange={onChartOptionChange} style={{margin: "2% 0"}}>
                        <option value="by-specific-disease">By Specific Disease</option>
                        <option value="by-disease">By Disease</option>
                        <option value="by-area">By Area</option>
                    </select>
                    
                    {
                        chartType === 'by-disease' 
                        ?
                        <>     
                        <select  style={{margin: "2% 0"}}>
                        <option value="by-specific-disease">Last 1 Month</option>
                        <option value="by-disease">Last 1 Year</option>
                        <option value="by-area">Last 5 Years</option>
                    </select>
                            {/* <input onChange={onDiseaseChange} type="text" placeholder="Enter Disease" className="br-2"/> */}
                            <button onClick={onDiseaseClick}  className="my-3 br-2 no-border button-4 bg-success">Show</button>
                        </>
                        :
                        chartType === 'by-area' 
                        ?

                        <>
                         <input onChange={onCityChange} type="text" placeholder="Enter Area" className="br-2"/>
                         <button onClick={onCityClick}  className="my-3 br-2 no-border button-4 bg-success">Search</button>


                        </>
                        : 
                        chartType === 'by-specific-disease'
                        ?
                        <>
                            <input onChange={onDiseaseChange} type="text" placeholder="Enter Disease" className="br-2"/>
                            <button onClick={onSpecificClick}  className="my-3 br-2 no-border button-4 bg-success">Search</button>
                            
                        </>
                        :
                        chartType === 'by-area'
                        ?
                        <>
                            <input onChange={onCityChange} type="text" placeholder="Enter Area" className="br-2"/>
                            <button onClick={onCityClick}  className="my-3 br-2 no-border button-4 bg-success">Search</button>
                        </>
                        :
                        null

                    }

                    {
                        showDisease 
                        ? 
                        <MyChart 
                            data={[
  { name: 'Cholera', value: 100 },
  { name: 'Malaria', value: 150 },
  { name: 'Flu', value: 500 },
  { name: 'Diarrhoea', value: 200 },
]}  

                        /> : null
                    }

                    {
                       showSpecificDisease
                        ?
                        <>
                        
                        <h4>For {disease}, Reported Cases: {patientContext.patient.length} </h4>
                        </>
                        :
                        null
                    }

                    {
                        showCity
                        ?
                        < >
                        
                            <MyChart data={patientContext.metrics}/>

                        </>
                        :
                        null
                    }
                                         
                   
                   
                   
                    
                    
                </div>
                
            </main>

            
            
        

        </div>
    )
}

export default Analysis