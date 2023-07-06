import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Stars = () => {
	const [rating, setRating] = useState(0)

	const handleRating = rate => {
		setRating(rate)
	}

	return <Rating onClick={handleRating} initialValue={rating} />
}

export default Stars
