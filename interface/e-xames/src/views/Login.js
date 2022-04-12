import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './login.module.css'

const Login = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Shadowy Hilarious Trout</title>
        <meta property="og:title" content="Shadowy Hilarious Trout" />
      </Helmet>
      <div className={` ${styles['container1']} ${projectStyles['row']} `}>
        <img
          alt="image"
          src="/playground_assets/logo3_29_2118-300h.png"
          className={styles['image']}
        />
        <div className={styles['container2']}>
          <input
            type="text"
            placeholder="Login"
            className={` ${styles['txtLogin']} ${projectStyles['input']} `}
          />
          <input
            type="password"
            placeholder="Senha"
            className={` ${styles['txtSenha']} ${projectStyles['input']} `}
          />
          <button
            type="submit"
            className={` ${styles['button']} ${projectStyles['button']} `}
          >
            <span className={styles['text']}>
              <span>Login</span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
