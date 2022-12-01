import React from 'react'

export default function Form() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    joinedNewsLetter: '',
  })

  function handleChange(event){
    const {name,type,checked,value}=event.target
    setFormData(prevForm => {
      return{
      ...prevForm,
        [name]:type === "checkbox" ? checked :value
    }
    })
  }
  return (
    <div class="form-container">
      <form class="form">
        <input
          type="email"
          name="email"
          className="form--input"
          placeholder="Enter EmailId"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          className="form--input"
          placeholder="Enter Password"
          onChange={handleChange}
          value={formData.password}
        />

        <input
          type="password"
          name="confirmPassword"
          className="form--input"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <div class="form--marketing">
        <input
          type="checkbox"
          name="joinedNewsLetter"
          id="oktoemail"
          checked={formData.joinedNewsLetter}
          onChange={handleChange}
        />
        <label htmlFor="oktoemail">I want to join the Newsletter</label>
        </div>
        <button className="form--submit">Submit</button>
      </form>
    </div>
  );
}
