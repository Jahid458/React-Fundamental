import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const actors = ['sakib', 'Shoriful raj', 'jashim', 'rubel','salman shah']

  const books = [
    {id:1, name: 'physics', price:100},
    {id:2, name: 'Math', price:120},
    {id:3, name: 'Chemistry', price:130},
    {id:4, name: 'Biology', price:150},
  ]

  const singers = [
    {id:1,name: 'Dr. Mahfuzur Rahman', age: 68},
    {id:2,name: 'Eva Rahman', age: 38},
    {id:3,name: 'Shuvro Dey', age: 58},
    {id:4,name: 'pritom', age: 28},
  ]
  return (
    <div>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }



      <Actor name={'Bappa Raj'}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor> )
      }
      {/* <Todo task="Learn react" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try jsx" isDone={true}></Todo> */}
      {/* <Person></Person>
       <Device name="Laptop" price="50000"></Device>
       <Device name='mobile' price='17000'></Device>
       <Device name='watch' price='3000'></Device>
       <Person></Person>
       <Student grade='7' score= '99'></Student>
       <Student grade='9' score= '55'></Student>
       <Student></Student>
       <Developer></Developer> */}
    </div>
  );
}

function Device(props) {
  // console.log(props)
  return (
    <h2>
      This Device: {props.name} Price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 32;
  const money = 20;
  const person = { name: "sakib", age: 23 };
  return (
    <h3>
      I am a {person.name} with age: {age + money}
    </h3>
  );
}

//destrucing
const { grade, score } = { grade: "7", score: "99" };

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>class: {grade}</p>
      <p>Score: {score} </p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;
