import React from 'react'

import classes from './ContactPage.css'
import CustomHeading from '../../UI/CustomHeading/CustomHeading'

const contactPage = props => (
	<main className={classes.ContactPage}>
		<CustomHeading
			mainHeading='Contact '
			secondaryHeading='Me'
			caption='This is how you can reach me...'
		/>
		<div className={classes.Box}>
			<div>
				<span className={classes.Text}>Email: </span> ia.uoistud@gmail.com
			</div>
			<div>
				<span className={classes.Text}>Phone: </span> (+30) 6941524452
			</div>
			<div>
				<span className={classes.Text}>Address: </span> Vitsi 12, Orestiada, Greece
			</div>
		</div>
	</main>
)

export default contactPage
