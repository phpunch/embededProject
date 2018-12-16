import React from 'react'
import { Label, List } from 'semantic-ui-react'
import CheckBox from './CheckBox'
const LabelExampleHorizontal = (props) => (
  <List divided selection>
    <List.Item style={{color: "black"}}>
      <Label color='blue' horizontal size="big">
        Humidity
      </Label>
      {props.humidity}
    </List.Item>
    <List.Item style={{color: "black"}}>
      <Label color='brown' horizontal size="big">
        Dust Density
      </Label>
      {props.dust}
    </List.Item>
    <List.Item style={{color: "black"}}>
      <Label color='black' horizontal size="big">
        Air Condition
      </Label>
      <CheckBox checked={props.airConditionChecked} onFunction={props.airConditionOnFunction} offFunction={props.airConditionOffFunction}/>
    </List.Item>
    <List.Item style={{color: "black"}}>
      <Label color='grey' horizontal size="big">
        Air Purifier
      </Label>
      <CheckBox checked={props.airPurifierChecked} onFunction={props.airPurifierOnFunction} offFunction={props.airPurifierOffFunction}/>
    </List.Item>
  </List>
)

export default LabelExampleHorizontal