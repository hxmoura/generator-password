/* eslint-disable */
import React, { useState, useEffect } from 'react'
const generatePassword = require('generate-password')
import Logo from './assets/imgs/logo.png'

import './app.css'
import Toggle from './components/toggle'

export default function Home() {
    
    const [password, setPassword] = useState('')
    const [lenght, setLenght] = useState(12)
    const [number, setNumber] = useState(true)
    const [symbol, setSymbol] = useState(true)
    const [upperCase, setUppercase] = useState(true)
    const [similarCharacters, setSimilarCharacters] = useState(false)

    const options = {
        length: lenght,
        numbers: number,
        symbols: symbol,
        uppercase: upperCase,
        excludeSimilarCharacters: similarCharacters
    }

    function Password() {
        setPassword(generatePassword.generate(options))
    }

    useEffect(() => {
        return Password()
    }, [lenght, number, symbol, upperCase, similarCharacters])

    function copyText() {
        const copiedText = document.getElementById('copyPassword')
        copiedText.select()
        copiedText.setSelectionRange(0, 99999)
        document.execCommand('copy')
    }

    return (
        <div>
            <header className="header">
                <img src={Logo} alt="logo" />
            </header>
            <main>
                <div className="titleBox">
                    <h1 className="title">Gerador de Senhas</h1>
                    <h2 className="subtitle">Gere senhas seguras com poucos cliques! Esqueça minhasenha123!</h2>
                </div>
                <div className="inputBox">
                    <input id="copyPassword" className="inputPassword" type="text" value={password} onChange={e => setPassword(e.target.value)} readOnly />
                </div>
                <div className="toggleBox">
                    <div>
                        <Toggle onClick={e => setNumber(e.target.checked)} label="Incluir números" checked/>
                        <Toggle onClick={e => setSymbol(e.target.checked)} label="Incluir símbolos" checked/>
                        <Toggle onClick={e => setUppercase(e.target.checked)} label="Incluir letras maiusculas" checked/>
                        <Toggle onClick={e => setSimilarCharacters(e.target.checked)} label="Excluir caracteres semelhantes" />
                    </div>
                    <div className="lenghtBox">
                        <label className="description">Tamanho da senha: <strong className="lenghtView">{lenght}</strong></label>
                        <div className="lenghtBox2">
                            <input className="lenghtInput" min="4" max="99" type="range" value={lenght} onChange={e => setLenght(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="btnBox">
                    <button className="btn btnBlue" onClick={copyText}>Copiar Senha</button>
                    <button className="btn btnRed" onClick={Password}>Gerar Senha</button>
                </div>
            </main>
        </div>
    )
}