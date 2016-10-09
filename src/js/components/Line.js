import React from 'react'
const Line = (line, action) => (<span style={action ? {fontStyle:'oblique'} : {}}>{line}</span>)
export default Line
