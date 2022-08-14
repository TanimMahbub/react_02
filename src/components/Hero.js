export default function Hero(props) {
	return(
		<div className="hero-section">
			<p>{props.hello}</p>
			<h1>{props.devName}</h1>
			<h3>{props.devTitle}</h3>

			<a href={props.devGit}>
				{props.btnIcon && <i className={props.btnIcon}></i>}
				<span>{props.btnTxt}</span>
			</a>
		</div>
	)
}