export default function Nav(props) {
	return(
		<li>
			<a href={props.href}>{props.navItem}</a>
		</li>
	)
}