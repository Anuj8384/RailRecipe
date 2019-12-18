import React, { Component } from "react";
import _ from 'lodash/collection';
import { Accordion, Toggle } from "./Accordian/Accordion";


class Ninja extends Component {
   
   
  render() {
    const { data } = this.props;
   let items;
    let groupData = [];
    console.log(data)
    if(data.loading){
       let list = data.resData.menuItems;
     groupData = _.groupBy(list,(item)=>{
        
        return item.foodType;
    })
    console.log(groupData);

       items = <div>
           
      {Object.keys(groupData).map((key,item) => (
      <Accordion key={key}>
      <Toggle title={key}>
     {groupData[key].map((x,i)=>(
         
         <div style={{borderBlock:true}} key={x.itemId}>{x.itemName} </div>
     ) )}

      </Toggle>
    </Accordion>
      ))}
   </div> 

   
    }

    return (
        <div>
{data.loading ? 
<div>
{items}
</div>
: null}
      </div>
       )
  }
  
}
export default Ninja;
