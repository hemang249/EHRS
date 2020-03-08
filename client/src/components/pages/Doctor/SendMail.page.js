import React from 'react'
import axios from 'axios'

const SendMail =  (props) => {
    const send = async () => {
        const disease = document.getElementById('disease').value
        const city = document.getElementById('city').value
        await axios.get('http://localhost:8080/api/email?disease=' + disease + "&city="+city , {}) 
    }

    return(
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid">
                    <h1 class="mt-4 my-3">Send Alert Email</h1>

                    <form method="" action="">
                        <input name="city" id="disease" type="text" placeholder="Enter Area" className="br-2" style={{marginTop: "5%"}}/>
                        <input name="disease" id="city" type="text" placeholder="Enter Disease" className="br-2" style={{marginTop: "2%"}}/>
                        <input type="submit" onClick={send} className="my-3 br-2 no-border input-4 bg-danger" />
                    </form>
                                           
                </div>
                
            </main>

            
    

        </div>
    )
}

export default SendMail