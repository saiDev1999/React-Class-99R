import styles from "./index.module.css"
// Ways to style a react component 
// There are total 4 ways to style 
// 1. Inline styles or object styling 
// 2. External styling or stylesheet styling 
// 3. External module styling 
// 4. Sass styling (Bootstarp,material ui , ant design)


export default function TodoList() {
    const style={
        color:"red",
        fontSize:20
    }
    return (
      <div>
        <h1 className={styles.newText}  >Hedy Lamarr's Todos</h1>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <ul>  <li className="highLightText" >Invent new traffic lights</li>
          <li style={style} >Rehearse a movie scene</li>
          <li style={style} >Improve spectrum technology</li>
        </ul>
      </div>
    );
  }





  