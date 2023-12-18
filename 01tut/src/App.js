import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = ()=>{
    const names = ['Bom', 'Kevin', 'Mag'];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }

  const name = "Maguid";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
      <p>{name}</p>      
      </header>
    </div>
  );
}

// function App() {
//   const handleNameChange = ()=>{
//     const names = ['Bom', 'Kevin', 'Mag'];
//     const int = Math.floor(Math.random()*3);
//     return names[int];
//   }

//   const name = "Maguid";

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello {handleNameChange()}!
//         </p>
//       <p>{name}</p>      
//       </header>
//     </div>
//   );
// }
export default App;
