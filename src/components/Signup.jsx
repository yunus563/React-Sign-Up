import React from 'react'
import '../App'

function Signup({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input type="email" placeholder="Email..." value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
      <input type="password" placeholder="Password..." value={formData.password} onChange={(event)=>setFormData({...formData, password: event.target.value})}/>
      <input type="password" placeholder="Confirm password..." value={formData.confirmPassword} onChange={(event)=>setFormData({...formData, confirmPassword: event.target.value})}/>
    </div>
  )
}

export default Signup
