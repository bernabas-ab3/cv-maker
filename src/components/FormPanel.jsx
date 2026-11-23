import PersonalForm from "./PersonalForm.jsx"
function FormPanel({personal, onPersonalChange}){
return(
    <>
    <PersonalForm personal={personal.name} onChange={onPersonalChange}/>
    </>
)
}
export default FormPanel