import React from 'react'

export default function Header({sortBy, setSortBy}) {
  
  return (
    <header className="header">
      <h1>Logo</h1>
      <select name="price" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value=""></option>
        <option value="cheap">Cheap</option>
        <option value="expensive">Expensive</option>
      </select>
    </header>
  )
}
