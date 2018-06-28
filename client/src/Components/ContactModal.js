//===========//
// Header.js //
//===========//
import React from 'react'
import axios from 'axios'

class ContactModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          emailDetails: {
            name: '',
            email: '',
            subject: '',
            message: ''
          },
          name: true,
          email: true, 
          subject: true,
          message: true,
          validEmail: false,
          emailSending: false,
          emailSent: false,
        }
    }

  updateEmailDetails = (propertyName) => (event) => {
      const { emailDetails } = this.state;
      const newEmailDetails = {
        ...emailDetails,
        [propertyName]: event.target.value
      };

      this.setState({ emailDetails : newEmailDetails})
  }

  sendEmail = () => {
      axios.post('/sendmail', this.state.emailDetails)
      .then(res => {
        this.setState(prevState => ({emailSent: true}));
        this.closeModal();
      })
  }

  closeModal = () =>{
    this.setState({emailDetails: {name: '', email: '', subject: '', message: ''}})
    this.props.toggleModal();
  }

  submitEmailForm = () => {
      this.state.emailDetails.name ? this.setState({name : true}) : this.setState({name: false})
      this.state.emailDetails.email ? this.setState({email : true}) : this.setState({email: false})
      this.state.emailDetails.subject ? this.setState({subject : true}) : this.setState({subject: false})
      this.state.emailDetails.message ? this.setState({message : true}) : this.setState({message: false})

      if(this.state.emailDetails.name && this.state.emailDetails.email && this.state.emailDetails.subject && this.state.emailDetails.message){
        this.sendEmail();
      }
  }


  render() {
    return (
        <div className={this.props.showModal ? 'modal is-active is-radiusless' : 'modal is-radiusless'}>
            <div class="modal-background"></div>
              <div class="modal-content">
              <div class="box">
                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left">
                      <input onChange={this.updateEmailDetails('email')} className={!this.state.email ? 'input is-danger' : "input is-primary"} value={this.state.emailDetails.email} type="text" placeholder="E-Mail"/>
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                    </div>
                    {!this.state.email ? <p class="help is-danger">Email is required</p> : null}
                  </div>
                  <div class="field">
                  <label class="label">Name</label>
                    <div class="control has-icons-left">
                      <input onChange={this.updateEmailDetails('name')} className={!this.state.email ? 'input is-danger' : "input is-primary"} value={this.state.emailDetails.name} type="text" placeholder="Name"/>
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                    </div>
                    {!this.state.name ? <p class="help is-danger">Name is required</p> : null}
                  </div>
                  <div class="field">
                  <label class="label">Subject</label>
                    <div class="control has-icons-left">
                      <input onChange={this.updateEmailDetails('subject')} className={!this.state.subject ? 'input is-danger' : "input is-primary"} value={this.state.emailDetails.subject} type="text" placeholder="Subject"/>
                      <span class="icon is-small is-left">
                        <i class="fas fa-info-circle"></i>
                      </span>
                    </div>
                    {!this.state.subject ? <p class="help is-danger">Subject is required</p> : null}
                  </div>
                  <div class="field">
                  <label class="label">Message</label>
                    <div class="control has-icons-left">
                      <input onChange={this.updateEmailDetails('message')} className={!this.state.message ? 'input is-danger' : "input is-primary"} value={this.state.emailDetails.message} type="text" placeholder="Message"/>
                      <span class="icon is-small is-left">
                        <i class="fas fa-edit"></i>
                      </span>
                    </div>
                    {!this.state.message ? <p class="help is-danger">Message is required</p> : null}
                  </div>
                  <div class="field is-grouped is-grouped-right">
                    <p class="control">
                      <button onClick={this.closeModal} class="button is-small is-radiusless is-light">
                        CANCEL
                      </button>
                    </p>
                    <p class="control">
                      <button onClick={this.submitEmailForm} class="button is-small is-radiusless is-dark">
                        SUBMIT
                      </button>
                    </p>
                  </div>
                </div>
            </div>
            <button onClick={this.props.toggleModal} class="modal-close is-large" aria-label="close"></button>
        </div>

    )
  }
}

export default ContactModal