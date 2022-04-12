import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './feature-card1.module.css'

const FeatureCard1 = (props) => {
  return (
    <div
      className={` ${styles['FeatureCard']} ${styles[props.rootClassName]} `}
    >
      <h2 className={styles['text']}>{props.title}</h2>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        {props.button}
      </button>
      <button className={` ${styles['button1']} ${projectStyles['button']} `}>
        {props.button1}
      </button>
    </div>
  )
}

FeatureCard1.defaultProps = {
  button: 'Visualizar',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
  title: 'Lorem ipsum',
  rootClassName: '',
  button1: 'Compartilhar',
}

FeatureCard1.propTypes = {
  button: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
}

export default FeatureCard1
