<script src="./MaintenanceUser.ts" lang="ts"></script>
<style src="./MaintenanceUser.css"></style>

<template>
  <div class="manutenodecontasusurio-container">
    <div class="manutenodecontasusurio-container2">
      <h1 class="manutenodecontasusurio-text heading">
        <span>Manutenção de contas</span>
      </h1>
    </div>
    <div class="manutenodecontasusurio-container3">
      <h1 class="manutenodecontasusurio-text02">
        <span>Informações gerais</span>
      </h1>
      <div class="manutenodecontasusurio-container4">
        <div class="manutenodecontasusurio-container5">
          <div class="manutenodecontasusurio-container6">
            <div class="manutenodecontasusurio-container7">
              <label class="manutenodecontasusurio-text04">
                <span>CPF</span>
              </label>
            </div>
          </div>
          <label class="manutenodecontasusurio-text06">
            <span class="manutenodecontasusurio-text07">NOME COMPLETO</span>
          </label>
          <label class="manutenodecontasusurio-text08">
            DATA DE NASCIMENTO
          </label>
          <label class="manutenodecontasusurio-text09">
            <span>E-mAIL</span>
          </label>
          <label class="manutenodecontasusurio-text11">
            <span>SENHA</span>
          </label>
        </div>
        <div class="manutenodecontasusurio-container8">
          <input
            type="text"
            id="usuariocpf"
            name="cpfusuario"
            required="true"
            placeholder="CPF"
            class="manutenodecontasusurio-input input"
          />
          <input
            type="text"
            id="usuarionome"
            name="nomeusuario"
            required="true"
            placeholder="Nome Completo"
            class="input lg"
          />
          <input
            type="date"
            id="usuarionascimento"
            name="nascimentousuario"
            required="true"
            placeholder="Descrição do Exame"
            class="input lg"
          />
          <input
            type="email"
            id="usuarioemail"
            name="emailusuario"
            required="true"
            placeholder="E-Mail"
            class="input lg"
          />
          <input
            type="password"
            id="usuariosenha"
            name="senhausuario"
            required="true"
            placeholder="Senha"
            class="input lg"
          />
        </div>
      </div>
    </div>
    <button class="manutenodecontasusurio-button button">
      <span>
        <span>Salvar</span>
        <span></span>
      </span>
    </button>
    <button class="manutenodecontasusurio-button1 button">
      <span><span>Nova senha</span></span>
    </button>
  </div>
</template>
