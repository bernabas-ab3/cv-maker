import {useState} from "react"
import CVPreview from "./components/CVPreview.jsx"
import FormPanel from "./components/FormPanel.jsx"
import './App.css'
function App() {
  const [cvData, setCvData] = useState({
   personal:{
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
   },
   education: [{
    id: 1,
    school: "",
    degree: "",
    field: "",
    from: "",
    to: ""
   }],
    experience: [{
    id: 1,
    company: "",
    role: "",
    from: "",
    to: "",
    description: ""
   }],
   skills: [],
  })
  function handlePersonalChange(e){
    const {name,value}= e.target;
    setCvData((prev)=> ({
      ...prev,
      personal: {...prev.personal, [name]:value},
    }))
  }
  return (
    <>
 <div className = "cv-builder">
    <FormPanel
      personal={cvData.personal}
      onPersonalChange ={handlePersonalChange}
    />
    <CVPreview personal ={cvData.personal}/>
  </div>
    </>
  )
}

export default App
