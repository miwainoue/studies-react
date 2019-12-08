import React from 'react'
import ReactDom from 'react-dom'

// import FirstComponent from './components/FirstComponent'
// import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponenteComFuncao from './components/ComponenteComFuncao'
// import Pai from './components/Pai'
// import ComponenteClasse from './components/ComponenteClasse'
// import Contador from './components/Contador'
import Hook from './components/Hook'

const element = document.getElementById('root')

ReactDom.render(
    <div>
        <Hook />

        {/* <Contador /> */}

        {/* <ComponenteClasse valor="valor" /> */}

        {/* <Pai /> */}

        {/* <ComponenteComFuncao /> */}

        {/* <Familia sobrenome="Pereira">
            <Membro nome="Andre" />
            <Membro nome="Pedro" />
        </Familia> */}

        {/* <FamiliaSilva /> */}

        {/* <FirstComponent valor="teste" /> */}
    </div>,
    element
)

// const jsx = <h1>Hello React</h1>
// ReactDom.render(jsx, element)