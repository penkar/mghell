import React from 'react'
export function Line ({line, action}){
  return <span style={action ? {fontStyle:'oblique'} : {}}>{line}</span>;
}
