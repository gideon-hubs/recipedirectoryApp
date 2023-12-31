import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Recipe.css'
import {projectFirestore} from '../../firebase/config'
// import useFetch from '../../hooks/useFetch'

function Recipe() {
    const { id } = useParams()
    // const url = 'http://localhost:3500/recipes/' + id
    // const { error, isPending, data: recipe } = useFetch(url)

    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        setIsPending(true)

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc)=>{
            if (doc.exists) {
                setIsPending(false)
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError('Could not find the recipe')
            }
        })

        return () => unsub()

    }, [id])

    const handleClick = () => {
        projectFirestore.collection('recipes').doc(id).update({
            title: 'Something different'
        })
    }
  return (
    <div className='recipe'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading</p>}
        {recipe && (
            <>
            <h2 className='page-title'>{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook.</p>
            <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>

            <p className='method'>{recipe.method}</p>
        {/*<button onClick={handleClick}>Update</button>*/}
            </>
        )}
    </div>
  )
}

export default Recipe