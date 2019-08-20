import React from 'react';
import Modal from './Modal'
import InfiniteScroll from 'react-infinite-scroll-component'
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Footerbutton from './Footerbutton';

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
      pic: '',
      count: 100,
      start: 1
    }
    this.query = '';
    this.getQueryValue = this.getQueryValue.bind(this);
    this.searchImg = this.searchImg.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  showModal = (pic) => {
    this.setState({ show: true, });
    this.setState({ pic: pic })
  }
  hideModal = () => {
    this.setState({ show: false });
  };
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
      this.state.images.map((el, index) => {
        return (
          <div key={index}
            className="content-img">
            <img className="images-list"
              src={el.urls.thumb} alt="" key={index}
              onClick={() => this.showModal(el.urls.thumb)} /></div>)
      })
    )
  }
  componentDidMount() {
    const { count, start } = this.state;
    fetch(`${randomUrl}?per_page=${count}&client_id=${clientId}&start=${start}`)
      .then(res => {
        return res.json()
      }).then(resJson => {
        console.log(resJson);
        this.setState({
          images: resJson
        })
      })
  }
  fecthImages = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    fetch(`${randomUrl}?per_page=${start}&client_id=${clientId}&start=${count}`)
      .then(res => {
        return res.json()
      }).then(resJson => {
        console.log(resJson);
        this.setState({
          images: this.state.images.concat(resJson)
        })
      })
  }
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="content-icon"><i className="fab fa-pinterest" onClick={this.getQueryValue}></i></div>
          <div className={this.state.active ? "border-search" : "content-input"} onClick={this.toggleClass}>
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
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fecthImages}
          hasMore={true}
          loader={<h4>...</h4>}>
          <div className="content-images">{this.showImages()}</div>
        </InfiniteScroll>
        <Modal
          show={this.state.show}
          pic={this.state.pic}
          handleClose={this.hideModal} />
          <Footerbutton/>
      </>
    )
  }
}
export default App;
