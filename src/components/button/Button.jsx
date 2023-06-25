import './Button.scss'

export const Button = ({typeText, valueText}) => {
 return (
    <input type={typeText} value={valueText} className='btn'/>
 )
}

export default Button