import React, { Component, createContext } from 'react';

//CONTEXT API REACT 16.3

const AppContext = createContext()
class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {
    return (
    <AppContext.Provider value={this.state.value}>
      <div>--------------------------------------- Children1  <b>Change value</b> :
        <input onChange={(e) => { this.setState({ value: e.target.value }) }} />
        <Children1 />
      </div>
    </AppContext.Provider>
    );

  }
}
class Children1 extends Component {
  render() {
    return (
      <div> -------------------------------- Children1 <Children2 /></div>
    );
  }
}
class Children2 extends Component {
  render() {
    return (
      <div> -------------------------- children 3 <Children3 /></div>
    );
  }
}
class Children3 extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {
          value => {
            return (<div> -------------- Value to component App : {value} </div>)
          }
        }
      </AppContext.Consumer>

    );
  }
}

export default Parent;



// UNSTATE


// import { Provider, Subscribe, Container } from 'unstated';
// class AppContainer extends Container {
//   state = { value: '', foo: ':foo still update' };
// }

// class Parent extends Component {
//   render() {
//     return (<Provider>
//       <div> -------------------------------------------------------- Children1 <Children1 /></div>
//     </Provider>
//     );
//   }
// }
// class Children1 extends Component {

//   render() {
//     return <Subscribe to={[AppContainer]} >
//       {
//         container => {
//           return (<div>-------------------------------------------- children2 <b>{container.state.foo}</b> <Children2 /></div>)
//         }
//       }
//     </Subscribe>
//   }
// }
// class Children2 extends Component {
//   render() {
//     return (
//       <div>-----------------------------------------children 3<Children3 /></div>

//     );
//   }
// }
// class Children3 extends Component {
//   render() {
//     return (
//       <Subscribe to={[AppContainer]} >
//         {
//           container => {
//             return (<div> ------------------------- Value to component App : <input onChange={(e) => {
//               container.setState({ value: e.target.value })
//             }} />
//               <Children4 /></div>)
//           }
//         }
//       </Subscribe>

//     );
//   }
// }
// class Children4 extends Component {
//   render() {
//     return <Subscribe to={[AppContainer]} >
//       {
//         container => {
//           return (<div> -----------------Children 4 {container.state.value} </div>)
//         }
//       }
//     </Subscribe>



//   }
// }
// export default Parent;


//  UNSTATE-X


// import { Provider, Container ,SubscribeOne } from 'unstated-x';
// class AppContainer extends Container {
//   state = { value: '' , foo  :  ':foo not update' };
// }

// class Parent extends Component {
//   render() {
//     return (<Provider>
//                 <div> ------------------------------------------- Children1 <Children1 /></div>
//     </Provider>
//     );
//   }
// }
// class Children1 extends Component {

//   render() {
//     return <SubscribeOne to ={AppContainer} bind ={['foo']}>
//       {
//         container => {
//           return (<div>------------------------------------ children2 <b>{container.state.foo}</b>  <Children2 /></div>)
//         }
//       }
//     </SubscribeOne>
//   }
// }
// class Children2 extends Component {
//   render() {
//     return (
//       <div>--------------------------------children 3<Children3 /></div>

//     );
//   }
// }
// class Children3 extends Component {
//   render() {
//     return (
//       <SubscribeOne to={AppContainer} bind ={['value']}>
//         {
//           container => {
//             return (<div> -------------- Value to component App : <input onChange={(e) => {
//               container.setState({ value: e.target.value })
//             }} />  
//             <Children4 /></div>)
//           }
//         }
//       </SubscribeOne>
//     );
//   }
// }
// class Children4 extends Component {
//   render() {
//   return   <SubscribeOne to={AppContainer} bind ={['value']}>
//      {
//        container => {
//         return (<div> -----------------Children 4 {container.state.value} </div>)
//        }
//      }
//    </SubscribeOne>
//       //     }
//       //   }
//       // </SubscribeOne>



//   }
// }
// export default Parent;



//COMBINE UNSTATE AND CONTEXT-API




// import { Provider, Subscribe, Container } from 'unstated';

// const CombineContext = createContext()
// class CombineContainer1 extends Container {
//   state = { value: 'CANSJKJNASKJNKJASNCKNAKSNCNASKNCJKNASKJNCCNASNC' };
// }
// class CombineContainer2 extends Container {
//   state = { value: 'CombineContainer2' };
// }
// class Parent extends Component {
//   render() {
//     return <Provider>
//       <CombineContext.Provider value={CombineContainer1}>
//      ----------------------------------------- Children1 <Children1 />
//     </CombineContext.Provider>
//     </Provider>

//   }
// }
// class Children1 extends Component {
//   render() {
//     return (
//      <div>
//        -------------------------------------Children2<Children2 />
//      </div>
//     )
//   }
// }
// class Children2 extends Component {
//   render() {
//     return (<div>---------------------Children3<Children3 /></div>

//     )
//   }
// }

// class Children3 extends Component {
//   render() {
//     return (<CombineContext.Consumer>
//       {
//         containerContext => {
//           return <Subscribe to={[containerContext]}>
//             {
//               container => {
//                 return <div> --------------- <b>Value to container:</b> {container.state.value}</div>
//               }
//             }
//           </Subscribe>
//         }
//       }
//     </CombineContext.Consumer>
//     )
//   }
// }

// export default Parent;