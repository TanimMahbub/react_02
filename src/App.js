import Title from './components/Title';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

import navData from './data/navData';
import heroData from './data/heroData';
import cardData from './data/cardData';

export default function App() {
	const navEl = navData.map(navLi => {return(<Nav key={navLi.key} {...navLi} />)});
	const heroEl = heroData.map(heroItems => {return(<Hero key={heroItems.id} {...heroItems} />)});
	const cardEl = cardData.map(cardLi => {return(<Card key={cardLi.id} {...cardLi} />)});
	return(
		<div className="page-wrapper">
			<div className="page-content">
				<nav className='d-flex ai-c jc-sb'>
					<Title 
						href="#"
						logo='./img/logo.png'
						title="Tanim Mahbub"
					/>
					<ul className="d-flex ai-c">{navEl}</ul>
				</nav>

				<main>
					{heroEl}
					<div className="card--list">{cardEl}</div>
				</main>
			</div>
			<Footer />
		</div>
	);
}