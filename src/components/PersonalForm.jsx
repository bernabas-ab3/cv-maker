function PersonalForm({personal, onChange}){
    return (
        <form>
            <label>Name<input type = "text" name ="name" 
            value={personal.name}
            onChange={onChange}/>
            </label>
<br></br>
            <label>Email<input type = "email" name ="email" 
            value={personal.email}
            onChange={onChange}/>
            </label>
<br></br>
            <label>Phone<input type ="tel" name ="phone" 
            value={personal.phone}
            onChange={onChange}/>
            </label>
<br></br>
          <label>Location<input type ="text" name ="location" 
            value={personal.location}
            onChange={onChange}/>
            </label>
<br></br>
          <label>Linkedin<input type ="url" name ="linkedin" 
            value={personal.linkedin}
            onChange={onChange}/>
            </label>
<br></br>
          <label>Github<input type ="url" name ="github" 
            value={personal.github}
            onChange={onChange}/>
            </label>
        </form>

    )
}
export default PersonalForm