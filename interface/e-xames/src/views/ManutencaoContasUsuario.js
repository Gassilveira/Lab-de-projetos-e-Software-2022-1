import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks6 from '../components/navigation-links6'
import projectStyles from '../style.module.css'
import styles from './manutencaoContasUsuario.module.css'

const ManutencaoContasUsuario = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Manutenção de contas usuário - Shadowy Hilarious Trout</title>
        <meta
          property="og:title"
          content="Manutenção de contas usuário - Shadowy Hilarious Trout"
        />
      </Helmet>
      <header data-role="Header" className={styles['Header']}>
        <img
          alt="logo"
          src="f7f8ae12-3111-4143-8be1-ec4737789739"
          className={styles['image']}
        />
        <div className={styles['IconGroup']}>
          <div data-type="BurgerMenu" className={styles['BurgerMenu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className={styles['icon02']}
          >
            <path d="M656.571 641.143c0-9.714-4-18.857-10.857-25.714l-103.429-103.429 103.429-103.429c6.857-6.857 10.857-16 10.857-25.714s-4-19.429-10.857-26.286l-51.429-51.429c-6.857-6.857-16.571-10.857-26.286-10.857s-18.857 4-25.714 10.857l-103.429 103.429-103.429-103.429c-6.857-6.857-16-10.857-25.714-10.857s-19.429 4-26.286 10.857l-51.429 51.429c-6.857 6.857-10.857 16.571-10.857 26.286s4 18.857 10.857 25.714l103.429 103.429-103.429 103.429c-6.857 6.857-10.857 16-10.857 25.714s4 19.429 10.857 26.286l51.429 51.429c6.857 6.857 16.571 10.857 26.286 10.857s18.857-4 25.714-10.857l103.429-103.429 103.429 103.429c6.857 6.857 16 10.857 25.714 10.857s19.429-4 26.286-10.857l51.429-51.429c6.857-6.857 10.857-16.571 10.857-26.286zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className={styles['MobileMenu']}>
          <nav className={styles['Nav']}>
            <div className={styles['Container1']}>
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className={styles['image1']}
              />
              <div
                data-type="CloseMobileMenu"
                className={styles['CloseMobileMenu']}
              >
                <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks6 rootClassName="rootClassName9"></NavigationLinks6>
          </nav>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon06']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon08']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className={styles['icon10']}
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className={styles['container2']}>
        <h1 className={` ${styles['text']} ${projectStyles['heading']} `}>
          <span>Manutenção de contas</span>
        </h1>
      </div>
      <div className={styles['container3']}>
        <h1 className={styles['text02']}>
          <span>Informações gerais</span>
        </h1>
        <div className={styles['container4']}>
          <div className={styles['container5']}>
            <div className={styles['container6']}>
              <div className={styles['container7']}>
                <label className={styles['text04']}>
                  <span>CPF</span>
                </label>
              </div>
            </div>
            <label className={styles['text06']}>
              <span className={styles['text07']}>NOME COMPLETO</span>
            </label>
            <label className={styles['text08']}>DATA DE NASCIMENTO</label>
            <label className={styles['text09']}>
              <span>E-mAIL</span>
            </label>
            <label className={styles['text11']}>
              <span>SENHA</span>
            </label>
          </div>
          <div className={styles['container8']}>
            <input
              type="text"
              id="usuariocpf"
              name="cpfusuario"
              required="true"
              placeholder="CPF"
              className={` ${styles['Input']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              id="usuarionome"
              name="nomeusuario"
              required="true"
              placeholder="Nome Completo"
              className={` ${projectStyles['input']} ${projectStyles['lg']} `}
            />
            <input
              type="date"
              id="usuarionascimento"
              name="nascimentousuario"
              required="true"
              placeholder="Descrição do Exame"
              className={` ${projectStyles['input']} ${projectStyles['lg']} `}
            />
            <input
              type="email"
              id="usuarioemail"
              name="emailusuario"
              required="true"
              placeholder="E-Mail"
              className={` ${projectStyles['input']} ${projectStyles['lg']} `}
            />
            <input
              type="password"
              id="usuariosenha"
              name="senhausuario"
              required="true"
              placeholder="Senha"
              className={` ${projectStyles['input']} ${projectStyles['lg']} `}
            />
          </div>
        </div>
      </div>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        <span>
          <span>Salvar</span>
          <span></span>
        </span>
      </button>
      <button className={` ${styles['button1']} ${projectStyles['button']} `}>
        <span>
          <span>Nova senha</span>
        </span>
      </button>
    </div>
  )
}

export default ManutencaoContasUsuario
