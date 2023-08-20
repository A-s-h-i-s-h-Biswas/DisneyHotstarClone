
import React from 'react'
import Container from '../UI/Container'
import styles from "./search.module.css"

const PopularSearches = (props) => {
  return (
    <div className={styles.popularSearch}>
        <h3>Popular Searches</h3>
        <Container data={props.data}/>
    </div>
  )
}
export default PopularSearches;