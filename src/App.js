import { useState, useEffect } from 'react'
import axios from 'axios'
import RenderQuestions from './components/RenderQuestions'
import SelectCategory from './components/SelectCategory'
import './App.css'

function App () {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
      .then(response => {
        const newCategories = response.data.trivia_categories
        setCategories(newCategories)
      })
  }, [])

  return (
    <div className='App'>
      <h1 className='header'>Category:</h1>
      {selectedCategory
        ? <RenderQuestions category={selectedCategory} handleGoBack={() => setSelectedCategory(null)} />
        : <SelectCategory categories={categories} setSelectedCategory={setSelectedCategory} />}
      
      {/* <h1>Categories</h1>
      <div>
        {categories.map(category => (
          <div key={category.id}>
            <button 
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </button>
          </div>
        ))} */}
      {/* </div> */}
      
      {/* <select>
      <option selected value="Category-select">--Select a Category--</option>
        {categories.map(category => (
          <option value="category-list" key={category.id}>{category.name}</option>
        ))}
      </select> */}
    </div>
  )
}

export default App
