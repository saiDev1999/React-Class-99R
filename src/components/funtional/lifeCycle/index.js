

// Earth 
// Human life cycle :
// 1. Birth 
// 2. Survival 
// 3. Expiry 


// Dom
// Component life cycle : class based components
// 1. Mounting phase : whenerver component inserted in the dom , we can call it as mounting 
// : once page loaded 

// 1. Constructor --> to create and initialize the state 
// 2. render --> to insert the jsx we must required this method 
// 3. componentdidmount  --> this method is mainly used for causing side effects in the application 

// side effects :
// 1. Http request 
// 2. dom manipulations 
// 3. event listeners 
// 4. timers and subscribtions 

// 4. getDerivedStateFromProps ---> this method is mainly used to initialize the state based on the initial props 



// 2. Updating phase : whenever component updated in the dom , we can call it as updating phase 

// 5 methods :

// 1. getDerivedStateFromProps
// 2. render 
// 3. shouldComponentUpdate 
// 4. component did update ----> it is used to perform side effects in updating 
// 5. getSnapShotBeforeUpdate ->  to check the prop and state value before update 



// 3. Unmounting phase : whenver component removed from dom , we call it as unmounting phase 
// 1. componentWillUnmount

