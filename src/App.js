import Devendra,{ComponentB as Sudheer,ComponentC} from "../src/components/funtional/exports-imports/export"
import ConditionalRender from "./components/funtional/conditional-render";
import TodoList from "./components/funtional/styles";
import "./App.css"
import ContentPage from "./components/funtional/styles/bootstrap/content";
import AccordionComponent from "./components/funtional/styles/reactBootstrap/accordion";
import Corousel from "./components/funtional/styles/reactBootstrap/corousel";
import Profile from "./components/funtional/props/profile";
import UnorderedList from "./components/funtional/list/un-ordered/un-ordered-list";
import Counter from "./components/funtional/state/counter";

function App() {
  return (
   

 <Counter message="Hello world" />


      


  );
}

export default App;




function Wrapper(props){
  const{bgColor,children}=props
  return(
    <div style={{flex:1,backgroundColor:bgColor}} >
      {
        children
      }


    </div>

  )
}

// Props : additional info for components which share the data from parent to child , props is a object , which is immutable 
// 2 ways:
// 1. general prop 
// 2. children prop --> data will be wrapped between the components 

// react is used for single page applications , it contains only one html file 
// with in html file only content will change , without creating of another html file 

// DRY : Dont repeat yourself



// Component : A component in a reusable bit of code which is responsible for creating 
// part of user interface 

// A component can be as smaller like a button and as larger like a page 

// Every component will return a mark up 

//We will nest the components to create the complete ui 

// Types of components 
// 1. Functional components 
// 2. Class components 


// Functional components --> its a simple js functions 

// Components 
// 1. Button 
// 2. List 
// 3. Image component 

// pages :
// 1. header 
// 2. footer 
// 3. main content 


// Card :
// 1. image 
// 2. button 
// 3. text 

// 3 ghosts  3 persons 

// boat , island crossing 
// boat 2  





// react/feb-16 







// React fragments :

// 1. To obey the jsx rule we generally add the container as a parent 
// 2. but here when our app grows , components will keep on increasing , which makes creation of extra nodes 
// such as div,section to obey the jsx first rule 
// 3. react fragments is a empty containers which acts as a shared parent or container , it obeys jsx first rule
// 4. it is suggestable to use react fragments instead of div, sections 
// 5. react fragments is represented using <></> (empty containers ) or React.Fragments 
// 6. React fragments is one of the optimization technique in react 

