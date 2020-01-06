import React, { Component } from "react";
import _ from "lodash/collection";
// import { Accordion, Toggle } from "./Accordian/Accordion";
import { Tab,Menu } from 'semantic-ui-react'
// import { Menu } from "react-bootstrap/lib/Dropdown";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircle,faRupeeSign } from '@fortawesome/free-solid-svg-icons'

// const vegIcon = <FontAwesomeIcon icon={faCircle} />;
// const rsIcon =  <FontAwesomeIcon icon={faRupeeSign} />;

class FoodList extends Component {
  // constructor(addItems){
  //   super();
  // }

  render() {
    const { data ,addToCards } = this.props;
    

    let items;
    let groupData = [];
    let listData = [];
    if (data.loading) {
       listData = data.resData.menuItems;
      groupData = _.groupBy(listData, item => {
        return item.foodType;
      });  

      const panes = 
      Object.keys(groupData).map((key, item) =>  ({ 
          menuItem:
           (
            <Menu.Item key={key} style={{ width:'100%' }}  >
              {key}
            </Menu.Item>
         
          )
          , 
          render: () => <Tab.Pane> {groupData[key].map((x, i) => (
            <div className="panel-body menu-item-body" key={x.itemId}>
              <div className="card">
                <div className="card-body">
                  <table style={{ width: "100%" }} key={x.itemId}>
                    <tbody>
                      <tr>
                        <td style={{ width: "70%" }}>
          <i style={{color:'green'}} className="fa fa-circle text"></i>{" "}
                          {x.itemName}
                          <br />
                          <small>
                            <span
                              className="fa fa-inr"
                              style={{ padding: "8px", fontSize: "16px" }}
                            >
                              &nbsp;{x.sellingPrice}
                            </span>
                          </small>
                          <br />
                          <small>
                            <span className="fa fa-clock-o text-red"></span>
                            &nbsp;{x.openingTime}-{x.closingTime}
                          </small>
                        </td>

                        <td style={{ width: "10%" }} align="right">
                          <button
                            type="button"
                            name="add_to_cart"
                            id={x.itemId}
                            style={{ marginTop: "5px", cursor: 'pointer' }}
                            className="btn btn-info form-control add_to_cart"
                            value="Add"
                            onClick={ () => {addToCards(x)}}
                          >Add</button>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="3">
                          <p style={{ fontSize: "13px", padding: "5px" }}>
                            <small className="text-muted">
                              {x.description}
                            </small>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
          </Tab.Pane> 
        }))
      
        
        return <Tab style={{}} menu={{ vertical:true, secondary: true, pointing: true,  style: {  } }} panes={panes} />;

      // items = (
        
      // );
    }

    return <div>{data.loading ? <div>Loadding</div> : <div>Loadding</div>}</div>;
  }
}
export default FoodList;

/* <div style={{border:'solid .1em',fontSize:'14px',height:'50px'}} key={x.itemId}>{x.itemName} 
         <button key={x.itemId} onClick={ () => {addItems(x)}}>Add</button>
         </div> */

// <div className="panel-body menu-item-body">
// <div className="card">
//      <div className="card-body" >

//      <table style={{width:'100%'}}>
//                         <tr>
//      <td style={{width:'70%'}}>
//      <i className="fa fa-circle text-success"></i>  VEG MINI THALI<br/>
//      <small><span className="fa fa-inr" style={{padding:'8px',fontSize:'16px'}}>&nbsp;128</span></small><br/>
//      <small><span className="fa fa-clock-o text-red"></span>&nbsp;10:00-23:00</small></td>
//      <input type="hidden" name="quantity" id="quantity308916"  value="1" style={{width:'100%'}} />
//      <input type="hidden" name="hidden_name" id="name308916" value="VEG MINI THALI" />
//      <input type="hidden" name="hidden_price" id="price308916" value="128" />
//      <input type="hidden" name="hidden_tax" id="tax308916" value="6" />
//      <td style={{width:'10%'}} align="right"><input type="button" name="add_to_cart" id="308916" style={{marginTop:'5px'}} class="btn btn-info form-control add_to_cart" value="Add" /></td>
//      </tr>
//      <tr>
//      <td colspan="3"><p style={{fontSize:'13px',padding:'5px'}}><small className="text-muted">CHAPATI (3 PCS), SEASONAL VEG (100G), DAL FRY/DAL TADKA (100 G), PLAIN RICE (200 G), SALAD & PICKLE</small></p></td>
//      </tr>
//      </table>
//      </div>
//      </div>
//      </div>



