function Search(props){

    function searchInput(e){
        e.preventDefault();
        let currentValue = document.querySelector('input[name=searchInput]')
        .value;
        /*

            Fazer requisição API depois.

        */
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=3a4ffed38ad2745a18b108939f58850c
        &units=metric`;
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
            const {main, name, sys, weather} = data;
            if(sys != undefined)
                console.log(sys);
            if(weather != undefined)
                console.log(weather[0]['description']);
        })
    }
    return(
        <div className="search">
            <h2>Digite abaixo sua cidade:</h2>
            <form onSubmit={(e)=>searchInput(e)}>
            <input className="search" placeholder={props.placeholder}  type="text" name="searchInput" />
            <input className="search" type="submit" value="Buscar" />
            </form>
        </div>
    )
}

export default Search;