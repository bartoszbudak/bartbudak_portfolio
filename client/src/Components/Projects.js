//===========//
// Header.js //
//===========//
import React from 'react'

class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive1: false,
            isActive2: false
        }
    }

  closeModal = () =>{
    this.props.toggleModal();
  }

  toggleProj1 = () =>{
    this.setState(prevState => ({
        isActive1: !prevState.isActive1
      }))
  }

  toggleProj2 = () =>{
    this.setState(prevState => ({
        isActive2: !prevState.isActive2
      }))
  }

  render() {

    return (
        <section>
        <section className="hero" id="proj">
          <div className="hero-body">
            <div className="container">
              <h2 className="subtitle">
              PROJECTS
              </h2>
              <div className="columns is-centered">
                <div className="column project-cont">
                    <div className="columns is-centered">
                    <div className="column is-two-fifths"> 
                        <div>
                            <figure className="image is-128x128 project-circle">
                                <img src="img/wk.png" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="column is-one-forth"> 
                        <ul>
                            <li>
                            WaniKani Viewer
                            </li>
                            <li>
                                <span className="icon is-large">
                                        <i className="fab fa-angular"></i>
                                    </span>
                                    <span className="icon is-large">
                                        <i className="fab fa-node-js"></i>
                                    </span>
                            </li>
                            <li>
                            Personalized dashboard for the Japanese learning application, WaniKani.
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="column project-cont">
                    <div className="columns is-centered">
                    <div className="column is-two-fifths"> 
                        <div>
                        <figure className="image is-128x128 project-circle">
                            <img src="img/stardrop.png" alt=""/>
                        </figure>
                        </div>
                    </div>
                    <div className="column is-one-forth"> 
                        <ul>
                            <li>
                            Star Drop
                            </li>
                            <li>
                                <span className="icon is-large">
                                        <i className="fab fa-react"></i>
                                    </span>
                                    <span className="icon is-large">
                                        <i className="fab fa-node-js"></i>
                                    </span>
                            </li>
                            <li>
                            Band website for the Central Jersey based J-Rock group, Star Drop.
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                
            </div>
          </div>
          </div>
        </section>
        {/* <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h2 className="subtitle">
              Professional Projects (Click/Tap to View)
              </h2>
              <div className="columns is-centered">
                <div className="column">
                    <div onClick={this.toggleProj1} className="project-pill">
                        UHG <br/> My Practice Profile
                    </div>
                </div>
                <div className="column">
                    <div onClick={this.toggleProj2} className="project-pill">
                        UHG <br/> Patient Dashboard Mobile App
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={this.state.isActive2 ? 'modal is-active is-radiusless' : 'modal is-radiusless'}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <p className="image">
                <img src="img/Mobile_MockUp.png" alt="" style={{width: 350 + "px"}}/>
                </p>
            </div>
        <button className="modal-close is-large" onClick={this.toggleProj2} aria-label="close"></button>
        </div>
        <div className={this.state.isActive1 ? 'modal is-active is-radiusless' : 'modal is-radiusless'}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <p className="image">
                <img src="img/Mobile_MockUp.png" alt=""/>
                </p>
            </div>
        <button className="modal-close is-large" onClick={this.toggleProj1} aria-label="close"></button>
        </div> */}
        {/* <ContactModal toggleModal={this.toggleModal} showModal={this.state.showModal} lang={this.props.lang} /> */}
      </section>


    )
  }
}

export default Projects