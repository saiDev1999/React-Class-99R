

const TextComponent=(props)=>{
    const {title,children}=props
    console.log(props,"props")
    return(
   <>

    {children}
   </>
    )
}
export default TextComponent