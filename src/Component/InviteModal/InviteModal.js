import React, { Component } from 'react'
import {bool, string, func, node} from 'prop-types'

class InviteModal extends Component {

    static propTypes = {
        open: bool,
        header: string,
        onClose: func,
        children: node,
    }
    render() {
        return this.props.open ? (
            <div className='modalContainer'>
                <div className='modalBackground' />
                <div role="dialog" className='modalDialog'>
                    <header className='header'>
                        <span className='headerSpan'>{this.props.header}</span>
                        <a
                            onClick={() => this.props.onClose()}
                            type="button"
                            className='closebtn'
                        >
                            X
                        </a>
                    </header>
                    <div className='modalContent'>{this.props.children}</div>
                </div>
            </div>
        ) : null
    }
}

export default InviteModal
