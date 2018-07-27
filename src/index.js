document.addEventListener('DOMContentLoaded', function (event){

    console.log('connected')

    //variable definitions

    let cardStock = document.getElementById('ui-cards-showings')
    

    //event listeners

    cardStock.addEventListener("click", function(event){
        
        if (event.target.id){
            if (event.target.innerText !== "Sold Out"){
                ticketsAdapter.postTicket(parseInt(event.target.id)).then(renderMovieCards)
            }
        }        
    })



    // functional logic    

    function renderMovieCards(){
        theatreAdapter.index().then(res => createCardsHTML(res.showings))
    }
    
    function createCardsHTML(array){
        let blueClass = "ui blue button"
        let label = "ui label"
        let buyTicket = "Buy Ticket"
        let soldOut = "Sold Out"
        let status;
        let classType;
        
        let cardsHTML = array.map(function(element){
            if ((element.capacity - element.tickets_sold)>0){
                status = buyTicket
                classType = blueClass
            }else{
                status = soldOut
                classType = label
            }

            return `<div class="card">
                        <div class="content">
                            <div class="header">
                            ${element.film.title}
                            </div>
                            <div class="meta">
                            ${element.film.runtime} minutes
                            </div>
                            <div class="description">
                            <span class="ui label">
                                ${element.showtime}
                            </span>
                            ${element.capacity - element.tickets_sold} remaining tickets
                            </div>
                        </div>
                        <div class="extra content">
                            <div id = "${element.id}"class="${classType}">${status}</div>
                        </div>
                        </div>`
        })
        cardStock.innerHTML = cardsHTML
    }
  
    







    renderMovieCards()





})