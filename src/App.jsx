import './App.css'
import ButtonFatec from './components/ButtonFatec'
import CustomInput from './components/CustomInput';

function App() {
  const msg = 'Entre em contato' 

  return (
    <>
      <h1>
        {msg} <hr />
      </h1>

      <p>
      <CustomInput type = "Text"  placeholder = "Nome"/> <br />
      <CustomInput type = "Text"  placeholder = "Email"/> <br /> 
      <CustomInput type = "Text"  placeholder = "Telefone"/> <br /> <hr />
      <ButtonFatec type = "button" label = "Enviar"/> <br />
      </p>
    </>
  )
}

export default App
