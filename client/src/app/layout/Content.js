//===========//
// Header.js //
//===========//
import React from 'react'
import ContactModal from '../../Components/ContactModal'

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
        <section class="hero is-dark is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                {title}
              </h1>
              <h2 class="subtitle">
                {subtitle}
              </h2>
            </div>
          </div>
        </section>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h2 class="subtitle">
              Bart is putting the finishing touches on the content of his website. <br/>
              If you'd like to contact him, click below!
              </h2>
              <button onClick={this.toggleModal} class="button is-radiusless is-dark">
              Send Message
          </button>
            </div>
          </div>
        </section>
        <ContactModal toggleModal={this.toggleModal} showModal={this.state.showModal} lang={this.props.lang} />
      </section>
        
    )
  }
}

export default Content