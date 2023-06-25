import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Service.scss'

export const Service = ({dataAos, dataAosDelay, icon, title, text}) => {
	return (
		<div className='service' data-aos={dataAos} data-aos-delay={dataAosDelay}>
			<i>
				<FontAwesomeIcon icon={icon} />
			</i>
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	)
}
