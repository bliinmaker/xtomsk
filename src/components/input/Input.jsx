import './Input.scss'

export const Input = ({title, errorText, onBlur, onChange, refEl, type, placeholder, ...rest}) => {

	return (
		<div className='inputBox'>
			<span>{title}</span>
			{errorText && <p>{errorText}</p>}
			<input
				onBlur={onBlur}
                onChange={onChange}
				ref={refEl}
				type={type}
				placeholder={placeholder}
                {...rest}
			></input>
		</div>
	)
}
