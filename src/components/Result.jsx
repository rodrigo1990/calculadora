import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value }) => (
    <div className='result'>
        <span>{ value }</span>
    </div>
) 


Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value:""
}

export default Result