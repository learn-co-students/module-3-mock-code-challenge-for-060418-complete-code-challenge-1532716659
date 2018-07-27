
const theatreId = 7;

let theatreAPI = `https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`

let ticketsAPI = 'https://evening-plateau-54365.herokuapp.com/tickets'

console.log("Addapter linked")

let theatreAdapter = generateAdapter(theatreAPI)

function generateAdapter(api){
    return{
        index: function index(){
            return fetch(theatreAPI).then(res => res.json())
        }
    }
}