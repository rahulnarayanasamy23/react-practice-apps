import { Component } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

//redux with functional components
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const increseHandler = () => {
    dispatch(counterActions.increase(10))
  }

  const decrementHanlder = () => {
    dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increse by 10</button>
        <button onClick={decrementHanlder}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// // redux with class based component
// class Counter extends Component {

//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHanlder(){
//     this.props.decrement();
//   }

//   toggleCounterHandler(){

//   }

//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHanlder.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: "increment"}),
//     decrement: () => dispatch({type: "decrement"})
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);