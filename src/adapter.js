
const theatreId = 7;

let theatreAPI = `https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`

let ticketsAPI = 'https://evening-plateau-54365.herokuapp.com/tickets'

console.log("Addapter linked")

let theatreAdapter = generateAdapter(theatreAPI)
let ticketsAdapter = generateAdapter(ticketsAPI)

function generateAdapter(apiLink){
    return{
        index: function index(){
            return fetch(apiLink).then(res => res.json())
        },

        indexLog: function(){
            return fetch(apiLink).then(res => res.json()).then(res => console.log(res.showings))
        },

        postTicket: function postTicket(showingID){
            console.log('this shouldnt work for theaterAdapter')
            let postConfig = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accepts: 'application/json'
                },
                body: JSON.stringify({
                    showing_id: `${showingID}`
                })
            }
           

            return fetch(apiLink, postConfig).then(res => {return res.json()}).then(console.log)

            // something is wrong with this fetch post request - it 'Failed to execute 'fetch' on 'Window': parameter 2 ('init') is not an object.' It's executing fetch on the wrong object? Why is it trying 'Window' and not the apiLink? - what is 'this' in this context?
            // Is there something wrong with my config?
        }




    }
}