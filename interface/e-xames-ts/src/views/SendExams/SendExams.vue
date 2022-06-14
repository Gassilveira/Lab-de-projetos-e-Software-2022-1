<script src="./SendExams.ts" lang="ts"></script>
<style src="./SendExams.css"></style>

<template>
  <div class="uploadexames-container">
    <div class="uploadexames-container01 row">
      
      <div class="uploadexames-container03">
        <h1 class="uploadexames-text heading">CADASTRO DE EXAMES</h1>
      </div>
      <div class="uploadexames-container04"></div>
      <h1 class="uploadexames-text01">Dados do Paciente</h1>
      <div class="uploadexames-container05">
        <div class="uploadexames-container06">
          <div class="uploadexames-container07">
            <div class="uploadexames-container08">
              <label class="uploadexames-text02">CPF DO PACIENTE</label>
            </div>
          </div>
          <label class="uploadexames-text03">nOME COMPLETO</label>
          <label class="uploadexames-text04">DATA DE NASCIMENTO</label>
        </div>
        <div class="uploadexames-container09">
          <input
            type="number"
            id="pacientecpf"
            name="pacientecpf"
            required="true"
            placeholder="CPF do paciente"
            class="uploadexames-input input"
          />
          <input
            type="text"
            id="pacientenome"
            name="pacientenome"
            required="true"
            placeholder="Nome Completo"
            class="input lg"
          />
          <input
            type="date"
            id="pacientenasc"
            name="pacientenasc"
            required="true"
            placeholder="99/99/9999"
            class="input lg"
          />
        </div>
      </div>
      <div class="uploadexames-container10">
        <h1 class="uploadexames-text05">Dados do Exame</h1>
        <div class="uploadexames-container11">
          <div class="uploadexames-container12">
            <div class="uploadexames-container13">
              <div class="uploadexames-container14">
                <label class="uploadexames-text06">dATA/HORA</label>
              </div>
            </div>
            <label class="uploadexames-text07">
              <span class="uploadexames-text08">
                ESPECIALIDADE
                <span v-html="rawkchy"></span>
              </span>
            </label>
            <label class="uploadexames-text09">DESCRIÇÃO DO EXAME</label>
          </div>
          <div class="uploadexames-container15">
            <input
              type="datetime-local"
              id="examedatahora"
              name="datahoraexame"
              required="true"
              placeholder="Data do exame"
              class="uploadexames-input3 input"
            />
            <input
              type="text"
              id="exameespecialidade"
              name="especialidadeexame"
              required="true"
              placeholder="Especialidade do Exame"
              class="input lg"
            />
            <input
              type="text"
              id="examedescricao"
              name="descricaoexame"
              required="true"
              placeholder="Descrição do Exame"
              class="input lg"
            />
          </div>
        </div>
      </div>
      <div class="uploadexames-container16">
        <input
          type="text"
          id="camihoarquivo"
          name="arquivcaminho"
          disabled="true"
          placeholder="Caminho do arquivo"
          class="uploadexames-textinput input"
        />
        <button
          id="botaoupoload"
          name="botaouload"
          type="button"
          class="uploadexames-button button"
        >
          Upload
        </button>
      </div>
    </div>
  </div>
</template>
