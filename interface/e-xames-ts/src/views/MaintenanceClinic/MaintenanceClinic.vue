<script src="./MaintenanceClinic.ts" lang="ts"></script>
<style src="./MaintenanceClinic.css"></style>

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
          <label class="manutenodecontasclnica-text09"
            ><span>E-mAIL</span></label
          >
          <label class="manutenodecontasclnica-text11"
            ><span>SENHA</span></label
          >
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
