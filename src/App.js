import { useState, useEffect } from 'react'
import axios from 'axios'

function App () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
      .then(response => {
        const newCategories = response.data.trivia_categories
        setCategories(newCategories)
      })
  }, [])

  return (
    <div className='App'>
      <h1>Categories</h1>
      {/* <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul> */}
      
      <select>
      <option selected value="coconut">--Select a Category--</option>
        {categories.map(category => (
          <option key={category.id}>{category.name}</option>
        ))}
      </select>
    </div>
  )
}

export default App
