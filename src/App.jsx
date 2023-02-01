import { useState } from 'react'
import { Configuration, OpenAIApi}from 'openai'
import './App.css'

function App() {
  const [prompt, setPrompt]=useState('');
  const [resultado,setResultado]=useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const generateImage=async()=>{
    const res =await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setResultado(res.data.data[0].url);
  }
  return (
    <div className='app-main'>
      <h3>Genera una imagen utilizando Open AI API</h3>
      <input className='app-input'
       onChange={(e)=>setPrompt(e.target.value)}
       placeholder="Escribe algo que deseas generar"
       />
      <button className='btn-generar' onClick={generateImage}>Genera una imagen</button>
      {resultado.length>0 ? <img className='imagen-resultado' src={resultado} alt="resultado" /> : <></> }
      <footer className='footer'>
      <p>Creador con ♥ por Gustavo Silva</p>
      </footer>
    </div>
  )
}

export default App
