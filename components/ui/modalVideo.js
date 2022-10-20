import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

export default class modalVideo extends Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }

      render()
      {
          return(
                <div>
                    <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='x8oU3hgqkRM' 
                    onClose={() => this.setState({isOpen: false})} />
                
                <div className="banner-one__video" onClick={this.openModal}><FontAwesomeIcon icon={faPlay} /></div>
                </div>
          )
      }


}