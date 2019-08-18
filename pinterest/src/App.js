import React from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

const clientId = "092762aa2384f8aef21f266b06fd40cc4018c6c36fb4493858d3330ab9988e8a";
const mainUrl = "https://api.unsplash.com/search/photos";
const randomUrl = "https://api.unsplash.com/photos" 

class App extends React.Component{
  constructor(props){
    super(props)
  this.state={
    images:[],
    show: false
  }
    this.query = '';
    this.getQueryValue = this.getQueryValue.bind(this);
    this.searchImg = this.searchImg.bind(this);
   
  }

  showModal = () => {
    
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
 

  getQueryValue(e){
    this.query= e.target.value;

   this.searchImg(this.query)
  } 
  
  searchImg(query){
   fetch(`${mainUrl}?per_page=1000&query=${query}&client_id=${clientId}`)
   .then(res=> {
     return res.json()
   }).then(resJson=> {
     console.log(resJson);
     this.setState({images:resJson.results})
   })
  }
  showImages(){
    
        return this.state.images.map(el => {
      return <div className="content-img" key={el.id} ><img src={el.urls.thumb} alt="" key={el.id} onClick= {this.showModal} /></div>
    })
  }
  componentDidMount() {
    
    fetch(`${randomUrl}?per_page=1000&client_id=${clientId}`)
    .then(res=>{
      return res.json()
  }).then(resJson=>{
      console.log(resJson);
      this.setState({
        images: resJson
      })
  })
}

  render(){
    return(
<>
<nav className="navbar">
  <div className="content-icon"><i className="fab fa-pinterest" onClick={this.showModal}></i></div>
    <div className="content-input">
      <div><i className="fas fa-search"></i></div>
      <input className="input-search" placeholder="Buscar" type="text" onKeyPress={this.getQueryValue}/>
    </div>
  {/* <div><button onClick = {this.searchImg} className= "button-search">Buscar</button></div> */}
  <div>Inicio</div>
  <div>Siguiendo</div>
  <div><img src="" alt=""/></div>
  <div>Nohemi</div>
  </nav>
<div className="show-img">{this.showImages()}</div>
    
    
    


</>
      )
  }
}
  
export default App;
