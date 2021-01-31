import { useState, useEffect } from 'react'
import axios from 'axios'
import RenderQuestions from './components/RenderQuestions'
import SelectCategory from './components/SelectCategory'
// import './App.css'

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
      <div className='body'>
        {selectedCategory
          ? <RenderQuestions category={selectedCategory} handleGoBack={() => setSelectedCategory(null)} />
          : <SelectCategory categories={categories} setSelectedCategory={setSelectedCategory} />}
      </div>
    </div>
  )
}

export default App
