export default function Card(card) {
	return(
		<div className="item-card d-flex ai-c jc-sb">
			<figure>
				<img src={card.cardThumb} alt="card thumb" />
			</figure>
			<div className="card--body">
				<h3>{card.cardTitle}</h3>
				<p>{card.cardXrt}</p>
				<a href={card.cardBtn.cardLink}>
					<i className={card.cardBtn.btnIcon}></i>
					<span>{card.cardBtn.btnTxt}</span>
				</a>
				<span className={card.cardReact}></span>
			</div>
		</div>
	)
}