const Patient = require('../../models/patient.model')

const fetchAll = async () => {
    try {
        const patients = await Patient.find({})
        return patients
    } catch (err) {
        throw new Error(err)
    }

}

const fetchByDisease = async (disease) => {
    try {
        // Fetch all patients
        const patients = await Patient.find({ })
        
        // Sorted array
        // logic to filter by disease
        let sortedPatients = [ ]
        patients.forEach(p1 => {                  
           
            if (p1.history[p1.history.length - 1].diagnosis == disease){
                console.log(p1.history[p1.history.length - 1].diagnosis)
                sortedPatients.push(p1)
            }
        })

        return sortedPatients
    
    } catch (err) {
        throw new Error(err)
    }
}

const fetchByArea = async (area) => {
    try {
        // Fetch all patients
        const patients = await Patient.find({ })
        
        // Sorted array
        let sortedPatients = [ ]

        // logic to filter by area
        patients.forEach(p => {
            if (p.address.city === area){
                sortedPatients.push(p)
            }
        })

        return sortedPatients
    
    } catch (err) {
        throw new Error(err)
    }
}

const fetchByTime = async (time) =>{
    try{
        // Fetch all patients
        const patients = await Patient.find({ })
        
        // Sorted Array
        let sortedPatients = [ ]

        var d= new Date() 
        month= d.getMonth()
        year = String(d.getFullYear() )
        
        patients.forEach(p => {
            p.history.forEach( visit => {

               month_2 = visit.visitTime.slice(3,5).parseInt();
               year_2 = String(visit.visitTime.slice(6,10));

               if (year === year_2 && ( month - month_2) < time){
                    sortedPatients.push(p)
               }

            });

        })
    } catch (err) {
        throw new Error(err)
    }
}

const fetchDiseaseStat = async (patients) => {
    try{
        let disease = { }

        patients.forEach((p, i) => {
            let d = p.history[p.history.length - 1 ].diagnosis
            if(!disease[d]) {
                disease[d] = [i]
            } else {
                disease[d].push(i)
            }
        })

        return disease 
    } catch (err){
        throw new Error(err)
    }
}
module.exports = {fetchAll, fetchByArea, fetchByDisease, fetchDiseaseStat}
