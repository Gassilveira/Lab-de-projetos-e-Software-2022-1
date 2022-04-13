import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './login.module.css'

const Login = (props) => {
  return (
    <h1 className={projectStyles['text-xl', 'font-bold']}>
      Hello world!
    </h1>
  )
}

export default Login
