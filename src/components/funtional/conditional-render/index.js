


const ConditionalRender = () => {
    let arryOfObjects = [
        {
            name: "Kiran",
            marks: 37,
            id:1
        },
        {
            name: "Antony",
            marks: 90,
            id:2
        }, {
            name: "Praveen",
            marks: 85,
            id:3
        },
        {
            name: "Divya",
            marks: 98,
            id:4
        }, {
            name: "Akhila",
            marks: 85,
            id:5
        }
    ]

    return (
        <div>
            {
                arryOfObjects.map((eachObject) => {
                    const { marks, name , id} = eachObject
                    return (
                        <div key={id}  >
                            <h4>{name}</h4>
                            <h4>Marks obtained {marks}</h4>
                            {

                                marks > 90 ? <h5>Secured A+ grade</h5> : marks > 80 ? <h5>Secured A grade</h5> : marks > 60 ? <h5>Secured B+</h5> : marks > 40 ? <h5>Pass</h5> : <h5>Better luck next time, Your near to goal</h5>
                            }
                            <div style={{ width: "30%", height: 2, backgroundColor: "red" }} />

                        </div>
                    )
                })
            }







        </div>

    )
}
export default ConditionalRender


// there are 2 ways to render the ui conditionally 
// 1. Ternary operator 
// condition ? statement1 : condition 2 ? statement 2: condition3 ?statement 3: statement 4
// 2. logical and operator or short circuit operator 


// list rendering 
// to render the list we use map method 
// here map is used to iterate and return the jsx (which is responsible for ui)
// while using map we will get warning 
// react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
// This is optimization techni



// Tasks :
// 1. Repeat the class 
// 2. Read the import and export documentation with practice
// 3. Importing and Exporting Components documentation with practice
// 4. Rendering Lists documentation with practice
// 5. Conditional Rendering documentation with practice