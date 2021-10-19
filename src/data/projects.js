import p1 from '../assets/images/projects/discord_bot.jpg';
import p2 from '../assets/images/projects/rgbgame.png';
import p3 from '../assets/images/projects/refactoring.png';
import p4 from '../assets/images/projects/ipTracker.png';
import p5 from '../assets/images/projects/pokedex.png';
import p6 from '../assets/images/projects/world-countries.png';
import p7 from '../assets/images/projects/shortify-demo.png';
import p8 from '../assets/images/projects/amazon-demo.png';

export const projects = [
	{
		id: 1,
		title: 'Discord Bot',
		description:
			'A simple discord bot, built with JavaScript, used for streaming music and other simple commands. The available commands are displayed on the image below.',
		image: p1,
		link: 'https://github.com/johndaamax/SimpleDiscordBot'
	},
	{
		id: 2,
		title: 'Color Game',
		description:
			'A simple color guessing game made with pure HTML, CSS and JS. Original idea is from the Web Developer Bootcamp course by Colt Steele, enhanced to be more dynamic. Now includes max attempts and score.',
		image: p2,
		link: 'https://github.com/johndaamax/Simple-Color-Game'
	},
	{
		id: 3,
		title: 'Refactoring Trip Advisor',
		description:
			'An Eclipse plugin built with Java that aims to aid software developers refactor their code in a structured way and resolve code smells based on an optimal resolution sequence.',
		image: p3,
		link: 'https://github.com/johndaamax/RefactoringTripAdvisor'
	},
	{
		id: 4,
		title: 'IP Tracking App',
		description:
			'An app which lets the user search any IPv4 or IPv6 address, or any domain and mark it on the map. Data taken from IPIFY Geo API. Built with React, map by Leaflet.',
		image: p4,
		link: 'https://github.com/johndaamax/ip-address-tracker',
		isDeployed: {
			link: 'https://ip-address-tracker-five-fawn.vercel.app/'
		}
	},
	{
		id: 5,
		title: 'Pokedex App',
		description:
			'An app that contains pokedex data for pokemon from all generations. Able to click on pokemon and display information about them, such as types, abilities, weight, height, stats etc. The user can also search for specific pokemon, either by name or by national pokedex number. All data used are fetched from PokeAPI. Pokemon assets courtesy of pokemon.com',
		image: p5,
		link: 'https://github.com/johndaamax/pokedex-app'
	},
	{
		id: 6,
		title: 'World Countries App',
		description:
			'A mini project that pulls country data from the REST Countries API (https://restcountries.com). The user can view a grid of all the countries of the world, click on each of them and display further information about them and also search by name and filter by region. Made to be responsive for all screen sizes, desktop and mobile.\nTechnologies used: React with TypeScript, SCSS.',
		image: p6,
		link: 'https://github.com/johndaamax/world-countries',
		isDeployed: {
			link: 'https://world-rest-countries-kruh5y1j3.vercel.app/'
		}
	},
	{
		id: 7,
		title: 'URL Shortener App',
		description:
			'A simple app to help you shorten long URL\'s. Template project from Frontend Mentor (https://www.frontendmentor.io/).\nUsing shrtco.de\'s (https://shrtco.de/) API. The shortened links are also saved to the browser\'s local storage for usage across sessions .\nTechnologies used: React with TypeScript, TailwindCSS.',
		image: p7,
		link: 'https://github.com/johndaamax/shortify-with-tailwind',
		isDeployed: {
			link: 'https://shortify-with-tailwind-ia0abig7o-johndaamax.vercel.app/'
		}
	},
	{
		id: 8,
		title: 'Amazon Clone App',
		description:
			'A small clone of the Amazon web store with sample products. Using Firebase backend for authentication/signin/signup and a databese to pull the products from.\nTechnologies used: React, TailwindCSS.',
		image: p8,
		link: 'https://github.com/johndaamax/amazon-clone',
		isDeployed: {
			link: 'https://amazon-clone-hjikuh4ew-johndaamax.vercel.app/'
		}
	},
]
