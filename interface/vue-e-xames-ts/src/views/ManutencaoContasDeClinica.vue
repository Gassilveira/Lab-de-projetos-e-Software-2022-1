<template>
  <div class="manutenodecontasclnica-container">
    <div class="manutenodecontasclnica-container2">
      <h1 class="manutenodecontasclnica-text heading">
        <span>Manutenção de contas</span>
      </h1>
    </div>
    <div class="manutenodecontasclnica-container3">
      <h1 class="manutenodecontasclnica-text02">
        <span>Informações gerais</span>
      </h1>
      <div class="manutenodecontasclnica-container4">
        <div class="manutenodecontasclnica-container5">
          <div class="manutenodecontasclnica-container6">
            <div class="manutenodecontasclnica-container7">
              <label class="manutenodecontasclnica-text04">
                <span>CNPJ</span>
              </label>
            </div>
          </div>
          <label class="manutenodecontasclnica-text06">
            <span class="manutenodecontasclnica-text07">RAZÃO SOCIAL</span>
          </label>
          <label class="manutenodecontasclnica-text08">NOME FANTASIA</label>
          <label class="manutenodecontasclnica-text09"><span>E-mAIL</span></label>
          <label class="manutenodecontasclnica-text11"><span>SENHA</span></label>
          <label class="manutenodecontasclnica-text13">
            <span>CHAVE API</span>
          </label>
        </div>
        <div class="manutenodecontasclnica-container8">
          <input
            type="text"
            id="clinicacnpj"
            name="cnpjclinica"
            required="true"
            placeholder="CNPJ"
            class="manutenodecontasclnica-input input"
          />
          <input
            type="text"
            id="clinicarazaosocial"
            name="razaosocialclinica"
            required="true"
            placeholder="Razão Social"
            class="input lg"
          />
          <input
            type="text"
            id="clinicafantasia"
            name="fantasiaclinica"
            required="true"
            placeholder="Descrição do Exame"
            class="input lg"
          />
          <input
            type="email"
            id="clinicaemail"
            name="emailclinica"
            required="true"
            placeholder="E-Mail"
            class="input lg"
          />
          <div>
            <input
            type="password"
            id="clinicasenha"
            name="senhaclinica"
            required="true"
            placeholder="Senha"
            class="input lg"
          />
          <button class="manutenodecontasclnica-button1 button">
            <span><span>Nova senha</span></span>
          </button>
          </div>
    
          <div>
            <input
            type="text"
            id="clinicachave"
            name="chaveclinica"
            disabled="true"
            placeholder="Chave"
            class="input lg"
          />
            <button class="manutenodecontasclnica-button2 button">
              <span><span>Nova chave</span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="manutenodecontasclnica-button button">
      <span>
        <span>Salvar</span>
        <span></span>
      </span>
    </button>
    
  </div>
</template>

<script>
import NavigationLinks6 from '../components/teleport/navigation-links6.vue'

export default {
  name: 'Manutenodecontasclnica',
  components: {
    NavigationLinks6,
  },
  metaInfo: {
    title: 'Manutenção de contas clínica - Shadowy Hilarious Trout',
    meta: [
      {
        property: 'og:title',
        content: 'Manutenção de contas clínica - Shadowy Hilarious Trout',
      },
    ],
  },
}
</script>

<style scoped>
.manutenodecontasclnica-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.manutenodecontasclnica-header {
  width: 100%;
  height: 147px;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-left: 4px;
  border-radius: var(--dl-radius-radius-round);
  padding-right: var(--dl-space-space-halfunit);
  padding-bottom: 5px;
  justify-content: space-between;
  background-color: rgba(167, 39, 173, 0);
}
.manutenodecontasclnica-image {
  width: 152px;
  height: 158px;
}
.manutenodecontasclnica-icon-group {
  display: flex;
}
.manutenodecontasclnica-burger-menu {
  display: none;
}
.manutenodecontasclnica-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  display: flex;
}
.manutenodecontasclnica-icon02 {
  fill: #cb0000;
  width: 24px;
  height: 24px;
  align-self: stretch;
}
.manutenodecontasclnica-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.manutenodecontasclnica-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.manutenodecontasclnica-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.manutenodecontasclnica-image1 {
  height: 2rem;
}
.manutenodecontasclnica-close-mobile-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.manutenodecontasclnica-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.manutenodecontasclnica-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.manutenodecontasclnica-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.manutenodecontasclnica-icon10 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.manutenodecontasclnica-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(13, 138, 249, 0.77);
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.manutenodecontasclnica-text {
  color: #fbfbfb;
  text-align: justify;
}
.manutenodecontasclnica-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 279px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.manutenodecontasclnica-text02 {
  align-self: center;
  margin-top: var(--dl-space-space-unit);
}
.manutenodecontasclnica-container4 {
  width: 100%;
  height: 175px;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
}
.manutenodecontasclnica-container5 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.manutenodecontasclnica-container6 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.manutenodecontasclnica-container7 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.manutenodecontasclnica-text04 {
  color: #040404;
  font-size: 20px;
  align-self: flex-start;
  text-align: justify;
  line-height: 1.5;
  margin-left: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-black);
  border-style: hidden;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  text-transform: capitalize;
  text-decoration:   none;
}
.manutenodecontasclnica-text06 {
  color: #040404;
  font-size: 20px;
  align-self: flex-start;
  margin-top: var(--dl-space-space-twounits);
  text-align: justify;
  line-height: 1.5;
  margin-left: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-black);
  border-style: hidden;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  text-transform: capitalize;
  text-decoration:   none;
}
.manutenodecontasclnica-text07 {
  text-transform: capitalize;
  text-decoration:   none;
}
.manutenodecontasclnica-text08 {
  color: #040404;
  font-size: 20px;
  align-self: flex-start;
  margin-top: var(--dl-space-space-twounits);
  text-align: justify;
  line-height: 1.5;
  margin-left: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-black);
  border-style: hidden;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  text-transform: capitalize;
  text-decoration:   none;
}
.manutenodecontasclnica-text09 {
  color: #040404;
  font-size: 20px;
  align-self: flex-start;
  margin-top: var(--dl-space-space-twounits);
  text-align: justify;
  line-height: 1.5;
  margin-left: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-black);
  border-style: hidden;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  text-transform: capitalize;
  text-decoration:   none;
}
.manutenodecontasclnica-text11 {
  color: #040404;
  font-size: 20px;
  align-self: flex-start;
  margin-top: var(--dl-space-space-twounits);
  text-align: justify;
  line-height: 1.5;
  margin-left: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-black);
  border-style: hidden;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  text-transform: capitalize;
  text-decoration:   none;
}
.manutenodecontasclnica-text13 {
  color: #040404;
  font-size: 20px;
  align-self: flex-start;
  margin-top: var(--dl-space-space-twounits);
  text-align: justify;
  line-height: 1.5;
  margin-left: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-black);
  border-style: hidden;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  text-transform: capitalize;
  text-decoration:   none;
}
.manutenodecontasclnica-container8 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.manutenodecontasclnica-input {
  margin-left: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius8);
}
.manutenodecontasclnica-button {
  top: 784px;
  margin: auto;
  position: absolute;
}
.manutenodecontasclnica-button1 {
  top: 580px;
  left: 453px;
  position: absolute;
}
.manutenodecontasclnica-button2 {
  top: 638px;
  left: 455px;
  position: absolute;
}
@media(max-width: 767px) {
  .manutenodecontasclnica-header {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .manutenodecontasclnica-burger-menu {
    display: flex;
    align-items: center;
    margin-right: 16px;
    justify-content: center;
  }
}
@media(max-width: 479px) {
  .manutenodecontasclnica-header {
    padding: var(--dl-space-space-unit);
  }
  .manutenodecontasclnica-mobile-menu {
    padding: 16px;
  }
}
</style>
