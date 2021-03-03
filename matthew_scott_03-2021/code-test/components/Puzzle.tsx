import { useState } from 'react'

import styles from '../styles/Puzzle.module.scss'

const Puzzle = () => {
    const [mergedNames, setMergedNames] = useState([])
    const [isMerged, setIsMerged] = useState(false)
    const [repeatMerge, setRepeatMerge] = useState(false)

    const nameListOne: string[] = [
        'Matt Johnson',
        'Bart Paden',
        'Ryan Doss',
        'Jared Malcolm'
    ]

    const nameListTwo: string[] = [
        'Matt Johnson',
        'Bart Paden',
        'Jordan Heigle',
        'Tyler Viles'
    ]

    const filterDuplicates = (arrayOne: string[], arrayTwo: string[]) => e => {
        e.preventDefault()
        if (isMerged) {
            setRepeatMerge(true)
        } else {
            setMergedNames(Array.from(new Set([...nameListOne, ...nameListTwo])))
            setIsMerged(true)
        }

    }

    return (
        <div className={styles.puzzleWrapper}>
            <p>Remove the duplicates in 2 Javascript objects and output the list of distinct
            names in an ordered list when this <a href='#' onClick={filterDuplicates(nameListOne, nameListTwo)}>link is clicked</a>,
                if the operation has been completed already notify the user that this has already been done.
            </p>
            {isMerged && <ul>
                {mergedNames.map(name => (
                    <li>{name}</li>
                ))}
            </ul>}
            { repeatMerge && <p className={styles.mergeError}>The names have already been merged.</p>}
        </div>
    )
}

export default Puzzle