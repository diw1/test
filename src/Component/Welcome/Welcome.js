import React, { Component } from 'react'
import InviteModal from '../InviteModal/InviteModal'
import { connect } from 'react-redux'
import {bool, func, string} from 'prop-types'
import {onModalChange, onSuccess, send} from '../../DataStore/Action'
import Spinner from '../Util/spinner'


const mapDispatchToProps = dispatch => ({
    onModalChange : newState => dispatch(onModalChange(newState)),
    onSuccess: newState => dispatch(onSuccess(newState)),
    send: (name, email) => send(dispatch, name, email)
})

const mapStateToProps = state => ({
    modal: state.reducer.modal,
    success: state.reducer.success,
    fail: state.reducer.fail,
    loading: state.reducer.loading,
})


class Welcome extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            emailConfirm: '',
            error: '',
            changed: false
        }
    }

    static propTypes = {
        loading: bool,
        fail: string,
        onSuccess: func,
        send: func,
        modal: bool,
        success: bool,
        onModalChange: func,

    }

    componentWillReceiveProps(nextProps){
        nextProps.success && this.clearForm()

    }

    clearForm = () => {
        this.setState({name:'', email:'', emailConfirm: '', changed: false, error:''})
    }

    onClose = () => {
        this.clearForm()
        this.props.onModalChange(true)
    }

    handleSend = () => {
        const emailError = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        this.state.email==='' || this.state.name==='' || this.state.emailConfirm==='' ? this.setState({error: 'All fields required'}) :
            this.state.name.length<3 ? this.setState({error: 'Full name needs to be at least 3 characters long'}) :
                !emailError.test(this.state.email) && this.state.email !== '' ? this.setState({error: 'Valid email address required'}):
                    this.state.email!==this.state.emailConfirm ? this.setState({error: 'Emails must match'}) :
                        this.props.send(this.state.name, this.state.email)
    }

    render() {
        const renderInvite =
            <div>
                <div className='inputContainer'>
                    <label>Full Name</label><br/>
                    <input
                        autoFocus
                        placeholder='Full Name'
                        type='text'
                        value={this.state.name}
                        onChange={(e)=>this.setState({name:e.target.value, changed: true})}
                    /><br/>
                </div>
                <div className='inputContainer'>
                    <label>Email</label><br/>
                    <input
                        placeholder='Email'
                        type='email'
                        value={this.state.email}
                        onChange={(e)=>this.setState({email:e.target.value, changed: true})}
                    /><br/>
                </div>
                <div className='inputContainer'>
                    <label>Email Confirmation</label><br/>
                    <input
                        placeholder='Email Confirmation'
                        type='email'
                        value={this.state.emailConfirm}
                        onChange={(e)=>this.setState({emailConfirm:e.target.value, changed: true})}
                    /><br/>
                </div>
                <span className='errorMessageSpan'>{this.state.error}</span><br/>
                <span className='errorMessageSpan'>{this.props.fail ? this.props.fail : ''}</span><br/>
                <button disabled={!this.state.changed} onClick={()=>this.handleSend()}>Send</button>
            </div>

        const renderSuccess =
            <div className='inputContainer'>
                <p>Please click button back to home page</p><br/>
                <button onClick={()=>this.props.onSuccess(false)}>BACK</button>
            </div>
        return (
            this.props.loading ?
                <div className='spinnerCon'>
                    <center><Spinner/></center>
                </div>
                :

            <div align="center" className='container'>
                <div>
                    <h1>
                        A better way to enjoy every day!
                    </h1>
                    <p className="App-intro">
                        Be the first to know when we launch.
                    </p>
                    <button onClick={()=> this.onClose()}>
                        Request an invite
                    </button >
                    <InviteModal
                        header="Request an invite"
                        open={this.props.modal}
                        onClose={() => this.props.onModalChange(false)}>
                        { renderInvite }
                    </InviteModal>

                    <InviteModal
                        header="All done"
                        open={this.props.success}
                        onClose={() => this.props.onSuccess(false)}>
                        { renderSuccess }
                    </InviteModal>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
