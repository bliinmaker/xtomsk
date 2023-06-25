import './Select.scss'

export const Select = ({title, name, refEl, placeholder, key, value, ...rest}) => {

	return (
		<div className='selectBox'>
			<span>{title}</span>
			<select
				name={name}
				ref={refEl}
				placeholder={placeholder}
			>{themes.map((theme, id) => (
                <option key={id} value={theme}>
                    {theme}
                </option>
            ))}</select>
		</div>
	)
}
