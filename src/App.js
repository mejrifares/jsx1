import logo from './logo.svg';
import './App.css';
import './style.css'
import myimage from './Images/logotaki.png'

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:100}}>

<h1 className="title red">Taki Sports</h1>

<br />

<img className="pic" src={myimage} alt="logo" />

<br />

<img className="pic" src="./img/ball.png" alt="ball" />

</div>

<video width="320" height="240" controls >

<source src="./video/takivid.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
