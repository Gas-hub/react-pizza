import React from 'react';

// class Categories extends React.Component {

//     state = {
//         activeItem : 1,
//     }
//     onSelectItem(index){
//         this.setState({
//             activeItem : index
//         })

//     }
//     render() {
//     const { items, onCategories } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {items.map((name, index) => (
//             <li onClick={()=>{this.onSelectItem(index)}}
//                 className = {this.state.activeItem === index?'active':''}
//                 key={name + '_' + index}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Categories({ items }) {
  const [activeItem, setActiveItem] = React.useState(null);

  function onSelectItem(index){
    setActiveItem(index);
  }
  return (
    <div className="categories">
      <ul>
        <li onClick = {() => onSelectItem(null)}
            className= {activeItem === null?'active':''} >Все</li>
        {items && items.map((name, index) => (
          <li className= {activeItem === index?'active':''} 
              onClick= {() => onSelectItem(index)} 
              key={name + '_' + index}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
