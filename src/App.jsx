import { useState } from 'react';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import phrases from './phrases.json';
import { bg1, bg2, bg3, bg4 } from './assets/images';
import './App.css';

function getRandomIndex(arr) {
	return Math.floor(Math.random() * arr.length);
}

const images = [bg1, bg2, bg3, bg4];

function App() {
	const [phrase, setPhrase] = useState(phrases[getRandomIndex(phrases)].phrase);
	const [bgRandom, setBgRandom] = useState(images[getRandomIndex(images)]);

	const handleClick = () => {
		setPhrase(phrases[getRandomIndex(phrases)].phrase);
		setBgRandom(images[getRandomIndex(images)]);
	};

	const bgStyle = `url('${bgRandom}')`;

	return (
		<>
			<div className="wrapper" style={{ backgroundImage: bgStyle }}>
				<div className="container">
					<h1 className="title">GALLETAS DE LA FORTUNA</h1>
					<blockquote className="card">
						<div className="card__body">
							<p className="card__text">
								<BiSolidQuoteAltLeft className="card__quote" /> {phrase}{' '}
								<BiSolidQuoteAltRight className="card__quote" />
							</p>
						</div>
					</blockquote>
					<button className="btn" onClick={handleClick}>
						Ver otro
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
