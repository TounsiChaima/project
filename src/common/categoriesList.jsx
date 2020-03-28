import React, { Component } from 'react';
import '../components/styling.css'

const CategoriesList = (props) => {
 const {items, textProperty, valueProperty,selectedItem , onItemSelect}=props;
    return (  
        
        <ul className="list-group-horizontal " style={{paddingTop:'10%'}}>
            <li 
             onClick={()=>onItemSelect()}
            className={selectedItem? "list-group-item":"list-group-item active thisONE"} >All Categories</li>
        {items.map(item=>
        <li 
         style={{cursor: 'pointer'}}
         key ={item[valueProperty]}
         className={item === selectedItem ? "list-group-item active " : "list-group-item"}
         onClick={()=>onItemSelect(item)}
         >
        {item[textProperty]}</li>)}    
        </ul>
       

    );
}
CategoriesList.defaultProps={
    textProperty:'name',
    valueProperty:'_id'
} ;
export default CategoriesList;