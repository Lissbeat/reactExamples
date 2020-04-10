import React from 'react'
import { Label } from 'semantic-ui-react'


const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue'
  ]

 export const ColorLabel = () => (
    <div>
      {colors.map((color) => (
          // @ts-ignore 
        <Label circular color={color} key={color}>
        </Label>
      ))}
    </div>
  )
  
