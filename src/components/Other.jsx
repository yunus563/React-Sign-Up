import React from 'react'
import '../App'

function Other({ formData, setFormData }) {
  return (
    <div className="other-container">
      <input type="text" placeholder="Natianality..." value={formData.natianality} onChange={(event) => setFormData({ ...formData, natianality: event.target.value })}/>
      <input type="text" placeholder="Others..." value={formData.others} onChange={(event) => setFormData({ ...formData, others: event.target.value })}/>
    </div>
  )
}

export default Other
