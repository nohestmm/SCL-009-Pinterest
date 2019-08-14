import React from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

const clientId = "092762aa2384f8aef21f266b06fd40cc4018c6c36fb4493858d3330ab9988e8a";
const mainUrl = "https://api.unsplash.com/search/photos"

class App extends React.Component{
  constructor(props){
    super(props)
  this.state={
    images:[]
  }
    this.query = '';
    this.getQueryValue = this.getQueryValue.bind(this);
    this.searchImg = this.searchImg.bind(this);
   
  }



  searchImg(){
   fetch(`${mainUrl}?query=${this.query}&client_id=${clientId}`)
   .then(res=> {
     return res.json()
   }).then(resJson=> {
     console.log(resJson);
     this.setState({images:resJson.results})
   })


  }

  getQueryValue(e){
    this.query= e.target.value;
  }
  showImages(){
    return this.state.images.map(img => {
      return <img src={img.urls.thumb} alt="" key={img.id}/>
    })
  }


  render(){
    return(
<div>
  <input type="text" onChange={this.getQueryValue}/>
  <button onClick = {this.searchImg}>Buscar</button>
  <div>{this.showImages()}</div>
</div>
      )
  }
}
  
export default App;
