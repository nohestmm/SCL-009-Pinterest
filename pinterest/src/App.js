import React from 'react';
import Modal from './Modal'

import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

const clientId = "092762aa2384f8aef21f266b06fd40cc4018c6c36fb4493858d3330ab9988e8a";
const mainUrl = "https://api.unsplash.com/search/photos";
const randomUrl = "https://api.unsplash.com/photos"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      show: false,
      active: false,
      pic: ''
    }
    this.query = '';
    this.getQueryValue = this.getQueryValue.bind(this);
    this.searchImg = this.searchImg.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    

  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
}
showModal = (pic) => {
  console.log(pic)
  this.setState({ show: true,});
  this.setState({pic: pic})
};

hideModal = () => {
  this.setState({ show: false });
};

//  // Toggle Modal visibility
//  toggleModal(pic) {
//    console.log(pic)
//   const state = this.state.modalOpen;
//   // Update state: modal visibility and its content
//   this.setState({ modalOpen: !state, pic });
// }



  getQueryValue(e) {
    this.query = e.target.value;

    this.searchImg(this.query)
  }

  searchImg(query) {
    fetch(`${mainUrl}?per_page=1000&query=${query}&client_id=${clientId}`)
      .then(res => {
        return res.json()
      }).then(resJson => {
        console.log(resJson);
        this.setState({ images: resJson.results })
      })
  }
  showImages() {

    return (
      this.state.images.map(el => {
      return (
      <div 
      className="content-img" 
      key={el.id} >
      <img className="imagesList" 
      src={el.urls.thumb} alt="" 
      key={el.id} onClick={()=>this.showModal(el.urls.small)} /></div>)
    })
      
   
    ) 
    
    
  }
  componentDidMount() {

    fetch(`${randomUrl}?per_page=1000&client_id=${clientId}`)
      .then(res => {
        return res.json()
      }).then(resJson => {
        console.log(resJson);
        this.setState({
          images: resJson
        })
      })
  }

  render() {
    const { modalOpen, pic } = this.state;
    return (
      <>
        <nav className="navbar">
          <div className="content-icon"><i className="fab fa-pinterest" onClick={this.getQueryValue}></i></div>
        
            <div className= {this.state.active ? "border-search": "content-input"} onClick={this.toggleClass}>
            <div><i className="fas fa-search"></i></div>
            <input className="input-search color-text" placeholder="Buscar" type="text" onKeyPress={this.getQueryValue} />
          </div>
          <div className="second-content">
            <div className="color-text navtext" style={{ color: "#262626" }}>Inicio</div>
            <div className="color-text navtext">Siguiendo</div>
            <div className="content-profile navtext color-text">
              <div><i className="fas fa-user-circle"></i></div>
              <div>Nohemi</div>
            </div>
            <div className="border-separator padding-navtext"></div>
            <div className="content-iconright"><i className="fas fa-comment-dots"></i></div>
            <div className="content-iconright"><i className="fas fa-bell"></i></div>
            <div className="content-iconright"><i className="fas fa-ellipsis-h"></i></div>
          </div>
        </nav> 
       {/* <Modal  show={ modalOpen } 
           onClose={ this.toggleModal.bind(this) }>
          <img src={ pic } alt=""/>
        </Modal>  */}

        
 <div className="content-images">{this.showImages()}</div>
       
         <Modal show={this.state.show} pic={this.state.pic} handleClose={this.hideModal}/>
          
       
      
 

       





      </>
    )
  }
}


export default App;
