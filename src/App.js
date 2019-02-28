import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import LandingPage from './components/MainSite/LandingPage/LandingPage'
import AboutMe from './components/MainSite/About/About'
import MyWork from './components/MainSite/MyWork/MyWork'
import ContactPage from './components/MainSite/ContactPage/ContactPage'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class App extends React.Component {
	state = {
		showMenu: false
	}

	sidebarToggleHandler = () => {
		this.setState(prevState => {
			return { showMenu: !prevState.showMenu }
		})
	}

	closeMenuHandler = () => {
		this.setState({ showMenu: false })
	}

	render() {
		return (
			<div>
				<Header
					toggleSidebar={this.sidebarToggleHandler}
					sideVisible={this.state.showMenu}
					close={this.closeMenuHandler}
				/>
				<Switch>
					<Route path='/' exact component={LandingPage} />
					<Route path='/about' exact component={AboutMe} />
					<Route path='/work' exact component={MyWork} />
					<Route path='/contact' exact component={ContactPage} />
				</Switch>
			</div>
		)
	}
}

export default App
