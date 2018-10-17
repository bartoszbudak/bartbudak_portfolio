//===========//
// Header.js //
//===========//
import React from 'react'
import ContactModal from '../../Components/ContactModal'
import Projects from '../../Components/Projects';
import About from './About'

class Content extends React.Component {


  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  constructor(props){
    super(props);

    this.state = {
      isActive: false,
      showModal: false
    }
  }

  toggleModal = () =>{
    this.setState(prevState => ({
        showModal: !prevState.showModal
      }))
  }

  render() {

    let title;
    let subtitle;

    switch(this.props.lang){
      case 'eng':
        title = 'Bart Budak'
        subtitle = 'Web Developer with a Passion for Human-Computer Interaction'
        break;
      case 'jp':
        title = 'ブダック・バート'
        subtitle = 'マンマシンインタフェースに興味があるHTMLコーダー'
        break;
      case 'pl':
        title = 'Bartek Budak'
        subtitle = 'Programista stron WWW z pasją do UI/UX'
        break;
      default:
        title = 'Bart Budak'
        subtitle = 'Web Developer with a Passion for Human-Computer Interaction'
    }

    return (
      <section>
        <section className="hero is-bold header-cont">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <span style={{marginRight: 20 + 'px'}}>{title}</span>
                <div className="social-cont">
                <a className="icon" href="http://www.linkedin.com/in/bartbudak" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a className="icon" href="http://www.github.com/bartoszbudak" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                </div>
                
              </h1>
              <h2 className="subtitle">
                {subtitle}
              </h2>
            </div>
            
          </div>
        </section>
        <About />
        {/* <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h2 className="subtitle">
              Bart is putting the finishing touches on the content of his website. <br/>
              If you'd like to contact him, click below!
              </h2>
              <button onClick={this.toggleModal} className="button is-radiusless is-dark">
              Send Message
          </button>
            </div>
          </div>
        </section> */}
        <Projects />
        <ContactModal toggleModal={this.toggleModal} showModal={this.state.showModal} lang={this.props.lang} />
      </section>
        
    )
  }
}

export default Content