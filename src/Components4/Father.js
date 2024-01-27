import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function Father() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(25000)

    const incrementAge = useCallback(
        () => {
            setAge(age + 1)
        },
        [age],
        //On every render, UseCallback compares the current values of the dependencies with the ones from the previous render.
        //If dependencies haven't changed, it returns the previously stored function (no need to re-render it)
        //If dependencies have changed, it creates a new version of the function with the updated dependencies and returns that
    )
    const incrementSalary = useCallback(() => {
        setSalary(salary + 500)
    },
        [salary]
    )

    return (
        <div className='Father'>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge} />Increment Age
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary} />Increment Salary
        </div>
    )
}

export default Father