import React from 'react'

import styles from './JobCard.module.css'

const JobCard = ({ title, company, fromTo, type, description }) => {
    return (
        <div className={styles.CardWrapper}>
            <h3>{company}</h3>
            <span>{fromTo}</span>
            <h4>{title}</h4>
            <h5>{type}</h5>
            <hr />
            <p>{description}</p>
        </div>
    )
}

export default JobCard
