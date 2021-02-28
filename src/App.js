
// import HelloWorld from "./components/HelloWorld";
// import ByeWorld from "./components/ByeWorld";
// import Chunga from "./components/Chunga";
// import Hochu from "./components/Hochu";
// import Book from "./components/Book";
// import Sing from "./components/Sing";
// import Length from "./components/Length";
// import Upercase from "./components/Upercase";
// import Lowecase from "./components/Lowecase";
// import Age from "./components/Age";
// import Year from "./components/Year";
// import Sum from "./components/Sum";
// import Random from "./components/Random";
// import BiggerNumber from "./components/BiggerNumber";
// import Switch from "./components/Switch";
// import Round from "./components/Round";
// import Water from "./components/Water";

import List from "./components/List";
import Ol from "./components/OL";
import Square from "./components/Square";
import Ul from "./components/Ul";
import Table from "./components/Table";
import Roood from "./components/Roood";
import UpperCaseList from "./components/UpperCaseList";

function App() {
  let richPeople =["Elon Mask","Jeff Besos"]
  let peopleWealth = [
    {name:"Jeff Musk", wealth:87451268},
    {name:"Elon Musk", wealth:84512021},
    {name:"Bill Gates", wealth:87894312},
  ];
  let number = [4,6,1, 9, 2]

  return (
    <div className="App">
      <List items={richPeople}/>
      <Ol items={richPeople}/>
      <Square items={richPeople}/>
      <Ul items={peopleWealth}/>
      <Table items={peopleWealth}/>
      <Roood items={number}/>
      <UpperCaseList/>

     </div>
  )
}
   
export default App;


     {/* <ByeWorld/>
     <HelloWorld/>
     <Chunga/>
     <Hochu v="more"/>
     <Hochu v="kosmos"/>   
     <Book name="Rich dad Poor dad" author="Pobert Kyosaki"/>
     <Sing title="Keremetim" singer="Kadyraliev"/>
     <Length  string="Example string" />
     <Length string="Hello world"/>
     {/* <Upercase>helloworld</Upercase>
     <Lowecase>HelloWorld</Lowecase> */}
     {/* <Age year={1989}/>
     <Age year={1875}/>
     <Year age={21}/> */}
     {/* <Round number={80.598}/>
     <Switch on={false}/>
     <Switch on={true}/> */}
     {/* <Water frozen={false}/>
     <Water frozen={true}/> */}
     {/* <Sum a="5" b="15"/>
     <Random min = "0" max = "10"/>
    //  <BiggerNumber /> */} 
