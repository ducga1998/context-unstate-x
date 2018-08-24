import React, { Component, createContext } from 'react';

// const AppContext = createContext()
// class App extends Component {
//   render() {
//     return (
//     <div> ------------------------------------ Children1 <Children1 /></div>

//     );
//   }
// }
// class Children1 extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//      value : ''
//     }
//   }

//   render() {
//     return (<AppContext.Provider value ={this.state.value}>
//     <b>Change value</b> :  <input onChange= {(e)  => {
//       this.setState({value : e.target.value})
//     }} />
//         <div>------------------------------ children2 <Children2 /></div>
//     </AppContext.Provider>

//     );
//   }
// }
// class Children2 extends Component {
//   render() {
//     return (
//       <div>-------------------------- children 3<Children3 /></div>

//     );
//   }
// }
// class Children3 extends Component {
//   render() {
//     return (
//      <AppContext.Consumer>
//        {
//          a => {
//            return ( <div> -------------- Value to component App : {a} </div>)
//          }
//        }
//      </AppContext.Consumer>

//     );
//   }
// }
import { Provider, Subscribe, Container } from 'unstated';
class AppContainer extends Container {
  state = { value: '' };
}

class App extends Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[AppContainer]}>
          {container => {
            return (
              <div>
                {' '}
                ------------------------------------------- Children1{' '}
                {container.state.value} <Children1 />
              </div>
            );
          }}
        </Subscribe>
      </Provider>
    );
  }
}
class Children1 extends Component {
  render() {
    return (
      <div>
        ------------------------------------ children2 <Children2 />
      </div>
    );
  }
}
class Children2 extends Component {
  render() {
    return (
      <div>
        --------------------------------children 3<Children3 />
      </div>
    );
  }
}
class Children3 extends Component {
  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {container => {
          return (
            <div>
              {' '}
              -------------- Value to component App :{' '}
              <input
                onChange={e => {
                  container.setState({ value: e.target.value });
                }}
              />
              <Children4 />
            </div>
          );
        }}
      </Subscribe>
    );
  }
}
class Children4 extends Component {
  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {container => {
          return (
            <div> -----------------Children 4 : {container.state.value} </div>
          );
        }}
      </Subscribe>
    );
  }
}
export default App;
