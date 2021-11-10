import React from 'react'
import '../App'

function Personal({ formData, setFormData }) {
  return (
    <div>
      <div className="personal-container">
        <input type="text" placeholder="Firstname..." value={formData.firstname} onChange={(event) => setFormData({ ...formData, firstname: event.target.value })}/>
        <input type="text" placeholder="Lastname..." value={formData.lastname} onChange={(event) => setFormData({ ...formData, lastname: event.target.value })}/>
        <input type="text" placeholder="Username..." value={formData.username} onChange={(event) => setFormData({ ...formData, username: event.target.value })}/>
    </div>
    </div>
  )
}

export default Personal
