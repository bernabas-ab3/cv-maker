function CVHeader({personal}){
    return(
        <header>
            <h2>{personal.name}</h2>
            <h3>{personal.email}</h3>
            <h3>{personal.phone}</h3>
            <h3>{personal.location}</h3>
            <h3>{personal.linkedin}</h3>
            <h3>{personal.github}</h3>

        </header>
    )
}
export default CVHeader