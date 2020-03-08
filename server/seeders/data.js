const Patient = require('../models/patient.model')


// rajkot baroda pune mumbai
// malaria flu jaundice cholera 

const seedPatients = async () => {
    const p1 = new Patient({
        name: "Rahul Sen",
        aadharId: "521",
        gender: "male",
        password: "123",
        dob: "01/01/2000",
        contact: "754651238",
        address: {
            addressLine: "A1 101",
            locality: "sama",
            city: "baroda",
            state: "gujarat"
        },
        age: 20,
        allergies: ["Penicillin"],
        currentMedication: ["cofix", "Amoxicillin"],
        history: [
            
            {
                hospitalName: "xyz hospital",
                visitTime: "03:26:00",
                doctorId: "12345",
                diagnosis: "jaundice",
                medicines: ["crocin", "amoxicillin"]
            },
            {
            hospitalName: "xyz hospital",
            visitTime: "03:26:00",
            doctorId: "12345",
            diagnosis: "malaria",
            medicines: ["cofix", "amoxicillin"]
        }]
    })
   
   await p1.save()



}

module.exports = seedPatients