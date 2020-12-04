import { Route, Switch } from 'react-router-dom'

import Layout from './components/UI/Layout/Layout'
import LandingPage from './components/MainSite/LandingPage/LandingPage'
import AboutMe from './components/MainSite/About/About'
import MyWork from './components/MainSite/MyWork/MyWork'
import ContactPage from './components/MainSite/ContactPage/ContactPage'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const App = () => {

	return (
		<Layout>
			<Switch>
				<Route path='/' exact component={LandingPage} />
				<Route path='/about' exact component={AboutMe} />
				<Route path='/work' exact component={MyWork} />
				<Route path='/contact' exact component={ContactPage} />
			</Switch>
		</Layout>
	)
}

export default App
