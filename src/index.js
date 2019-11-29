import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <div>
    <App/>
  </div>,
  document.getElementById('root')
)



// class Users extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       users: []
//     }
//   }
//   componentDidMount() {
//     fetch(this.props['data-url'])
//       .then((response)=>response.json())
//       .then((users)=>this.setState({users: users}))
//   }
//   render() {
//     return <div className="container">
//       <h1>List of Users</h1>
//       <table className="table-striped table-condensed table table-bordered table-hover">
//         <tbody>{this.state.users.map((user)=>
//           <tr key={user.id}>
//             <td>{user.first_name} {user.last_name}</td>
//             <td> {user.email}</td>
//             <td> {user.ip_address}</td>
//           </tr>)}
//         </tbody>
//       </table>
//     </div>
//   }
// }


// let dataUrl = '/real-user-data.json'
// ReactDOM.render(
//   <div>
//     <Users data-url={dataUrl}/>
//   </div>,
//   document.getElementById('root')
// )


// class Note extends React.Component {
//   confirmLeave(e) {
//     let confirmationMessage = 'Do you really want to close?'
//     e.returnValue = confirmationMessage     // Gecko, Trident, Chrome 34+
//     return confirmationMessage              // Gecko, WebKit, Chrome <34
//   }
//   componentDidMount() {
//     console.log('Attaching confirmLeave event listener for beforeunload')
//     window.addEventListener('beforeunload', this.confirmLeave)
//   }
//   componentWillUnmount() {
//     console.log('Removing confirmLeave event listener for beforeunload')
//     window.removeEventListener('beforeunload', this.confirmLeave)
//   }
//   render() {
//     console.log('Render')
//     return <div>Here will be our input field for notes (parent will remove in {this.props.secondsLeft} seconds)</div>
//   }
// }

// let secondsLeft = 5

// let interval = setInterval(()=>{
//   if (secondsLeft == 0) {
//     ReactDOM.render(
//       <div>
//         Note was removed after {secondsLeft} seconds.
//       </div>,
//       document.getElementById('root')
//     )
//     clearInterval(interval)
//   } else {
//     ReactDOM.render(
//       <div>
//         <Note secondsLeft={secondsLeft}/>
//       </div>,
//       document.getElementById('root')
//     )
//   }
//   secondsLeft--
// }, 1000)


// ReactDOM.render(<Note />, document.getElementById('root'));



// class Content extends React.Component {
//   constructor(props) {
//     super(props)
//     this.launchClock()
//     this.state = {
//       counter: 0,
//       currentTime: (new Date()).toLocaleString()
//     }
//   }
//   launchClock() {
//     setInterval(()=>{
//       this.setState({
//         counter: ++this.state.counter,
//         currentTime: (new Date()).toLocaleString()
//       })
//     }, 1000)
//   }
//   render() {
//     if (this.state.counter > 10) return <div/>
//     return <Logger time={this.state.currentTime}></Logger>
//   }
// }

// class Logger extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log('constructor')
//   }
//   componentWillMount() {
//     console.log('componentWillMount is triggered')
//   }
//   componentDidMount(e) {
//     console.log('componentDidMount is triggered')
//     console.log('DOM node: ', ReactDOM.findDOMNode(this))
//   }
//   componentWillReceiveProps(newProps) {
//     console.log('componentWillReceiveProps is triggered')
//     console.log('new props: ', newProps)
//   }
//   shouldComponentUpdate(newProps, newState) {
//     console.log('shouldComponentUpdate is triggered')
//     console.log('new props: ', newProps)
//     console.log('new state: ', newState)
//     return true
//   }
//   componentWillUpdate(newProps, newState) {
//     console.log('componentWillUpdate is triggered')
//     console.log('new props: ', newProps)
//     console.log('new state: ', newState)
//   }
//   componentDidUpdate(oldProps, oldState) {
//     console.log('componentDidUpdate is triggered')
//     console.log('old props: ', oldProps)
//     console.log('old state: ', oldState)
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount')
//   }
//   render() {
//     console.log('rendering... Display')
//     return (
//       <div>{this.props.time}</div>
//     )
//   }
// }


//ReactDOM.render(<Content />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
