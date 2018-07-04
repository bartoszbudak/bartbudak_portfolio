//===========//
// Header.js //
//===========//
import React from 'react'

class About extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {

    // let title;
    // let subtitle;

    // switch(this.props.lang){
    //   case 'eng':
    //     title = 'Bart Budak'
    //     subtitle = 'Web Developer with a Passion for Human-Computer Interaction'
    //     break;
    //   case 'jp':
    //     title = 'ブダック・バート'
    //     subtitle = 'マンマシンインタフェースに興味があるHTMLコーダー'
    //     break;
    //   case 'pl':
    //     title = 'Bartek Budak'
    //     subtitle = 'Programista stron WWW z pasją do UI/UX'
    //     break;
    //   default:
    //     title = 'Bart Budak'
    //     subtitle = 'Web Developer with a Passion for Human-Computer Interaction'
    // }

    return (
      <section>
        <section className="hero about-cont" id='about'>
          <div className="hero-body">
            <div className="container">
            
            <div className="columns is-centered">
                <div className="column is-one-third">
                    <div>
                        <figure className="image me-circle-cont">
                            <img className="me-circle" src="img/me.jpeg" alt=""/>
                        </figure>
                    </div>
                </div>
                <div className="column is-two-thirds" style={{textAlign: 'justify'}}>
                    <div>
                        <ul>
                            <br />
                            <li>
                                Bart Budak is a web and application developer based out of Central NJ. He is currently working at Optum Technology division of UnitedHealth Group.
                                <br />
                                <br />
                                He developed a passion for UI/UX after enter UHG's Technology Development Program where he quickly rose through the ranks and accquired a senior and tech lead position. During his time at UHG, Bart formed a Web Development and UI/UX focused interest group, Design &amp; Develop, where he regularly holds lessons and open forums on the newest and greatest in modern web development and design.
                            </li>
                            <br />
                            <li>
                                <span className="icon is-large">
                                    <i className="fab fa-angular"></i>
                                </span>
                                <span className="icon is-large">
                                    <i className="fab fa-react"></i>
                                </span>
                                <span className="icon is-large">
                                    <i className="fab fa-html5"></i>
                                </span>
                                <span className="icon is-large">
                                    <i className="fab fa-css3"></i>
                                </span>
                                <span className="icon is-large">
                                    <i className="fab fa-sass"></i>
                                </span>
                                <span className="icon is-large">
                                    <i className="fab fa-node-js"></i>
                                </span>
                                <span className="icon is-large">
                                    <i className="fab fa-gulp"></i>
                                </span>
                                <span className="icon is-large">
                                    <i className="fab fa-npm"></i>
                                </span>
                                <span className="icon is-large">
                                    <i className="fab fa-github-square"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </section>
 
      </section>
        
    )
  }
}

export default About