document.addEventListener('DOMContentLoaded', function (event){

    console.log('connected')

    //variable definitions

    let cardStock = document.getElementById('ui-cards-showings')
    

    //event listeners

    cardStock.addEventListener("click", function(event){
        
        if (event.target.id){
            ticketsAdapter.postTicket(parseInt(event.target.id)).then(renderMovieCards)
        }
    })



    // functional logic    

    function renderMovieCards(){
        theatreAdapter.index().then(res => createCardsHTML(res.showings))
    }
    
    function createCardsHTML(array){
        let cardsHTML = array.map(function(element){
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
                            <div id = "${element.id}"class="ui blue button">Buy Ticket</div>
                        </div>
                        </div>`
        })
        cardStock.innerHTML = cardsHTML
    }
  
    







    renderMovieCards()





})