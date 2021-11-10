import React, { useState } from 'react'
import '../App'

import SignUp from './Signup'
import PersonalInfo from './Personal'
import Others from './Other'

const Form = () => {

  const [form, setForm] = useState(0)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    username: "",
    natianality: "",
    others: "",
  })

  const formTitle = ['Sign up', 'Personal info', 'Others']

  const formDisplay = () => {
    switch (form) {
      case 0:
        return <SignUp formData={formData} setFormData={setFormData} />
      case 1:
        return <PersonalInfo formData={formData} setFormData={setFormData} />
      case 2:
        return <Others formData={formData} setFormData={setFormData} />
      default:
        return <span>Error Sign In</span>
    }
  }
  return (
    <div className="form">
      <div className="progres-bar">
        <div className="progress" style={{ width: form === 0 ? "33.5%" : form === 1 ? "66.6%" : "100%" }}></div>
      </div>
      <div className="form-container">
        <div className="form-header"> <h2>{formTitle[form]}</h2></div>
        <div className="form-body">{formDisplay()}</div>
        <div className="form-footer">
          <button disabled={form === 0} onClick={() =>
            setForm((num) => num - 1)}>Prev</button>
          <button onClick={() => {
            if (form === formTitle.length - 1) {
              alert("Form Completed")
            } else {
              setForm((num) => num + 1)
            }
          }}>
            {form === formTitle.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form
