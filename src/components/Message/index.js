import {Component} from 'react'
import './index.css'

const message = props => {
  const {messageContent} = props

  return <h1>{messageContent}</h1>
}

export default message
