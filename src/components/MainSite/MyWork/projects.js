import p1 from '../../../assets/images/projects/discord_bot.jpg'
import p2 from '../../../assets/images/projects/rgbgame.png'
import p3 from '../../../assets/images/projects/refactoring.png'

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
	}
]
