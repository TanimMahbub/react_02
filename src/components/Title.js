export default function Title(props) {
	return(
		<a href={props.href} className="logo d-flex ai-c">
			<img src={props.logo} alt="site logo" />
			<span className='fw-9'>{props.title}</span>
		</a>
	)
}