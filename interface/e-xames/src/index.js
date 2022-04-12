import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import ManutencaoContasUsuario from './views/ManutencaoContasUsuario'
import UploadExames from './views/UploadExames'
import ManutencaoContasClinica from './views/ManutencaoContasClinica'
import VisualizaoExames from './views/VisualizaoExames'
import Login from './views/Login'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          exact
          component={ManutencaoContasUsuario}
          path="/manutencao/contas/usuario"
        />
        <Route exact component={UploadExames} path="/upload/exames" />
        <Route
          exact
          component={ManutencaoContasClinica}
          path="/manutencao/contas/clinica"
        />
        <Route exact component={VisualizaoExames} path="/visualizao-exames" />
        <Route exact component={Login} path="/login" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
