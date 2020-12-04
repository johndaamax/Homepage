import p1 from '../../../assets/images/projects/discord_bot.jpg';
import p2 from '../../../assets/images/projects/rgbgame.png';
import p3 from '../../../assets/images/projects/refactoring.png';
import p4 from '../../../assets/images/projects/ipTracker.png';
import p5 from '../../../assets/images/projects/pokedex.png';

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
		link: 'https://github.com/johndaamax/ip-address-tracker'
	},
	{
		id: 5,
		title: 'Pokedex App',
		description:
			'An app that contains pokedex data for pokemon from all generations. Able to click on pokemon and display information about them, such as types, abilities, weight, height, stats etc. The user can also search for specific pokemon, either by name or by national pokedex number. All data used are fetched from PokeAPI. Pokemon assets courtesy of pokemon.com',
		image: p5,
		link: 'https://github.com/johndaamax/pokedex-app'
	},
]
