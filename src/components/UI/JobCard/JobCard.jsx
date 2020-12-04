import React from 'react'

import styles from './JobCard.module.css'

const JobCard = ({ title, company, fromTo, type, description }) => {
    return (
        <div className={styles.CardWrapper}>
            <h3><strong>{company}</strong></h3>
            <span className={styles.Duration}>{fromTo}</span>
            <h4>{title}</h4>
            <h5>{type}</h5>
            <hr />
            <p>{description}</p>
        </div>
    )
}

export default JobCard
