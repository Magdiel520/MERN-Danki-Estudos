const Content = () => {
    const handleNameChange = () => {
        const names = ['Don Sandro', 'Esqueleto', 'Nessahan Alita'];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }

    const handleClick= () => {
        console.log('You clicked it')
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello, {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={()=> {handleClick2('Snoop')}}>Click it 2</button>
        <button onClick={(e)=> handleClick3(e)}>Click it 3</button>
    </main>
    )
}

export default Content;