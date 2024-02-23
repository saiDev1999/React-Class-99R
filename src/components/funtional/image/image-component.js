


const ImageComponent =(props)=>{
    const {imageURL,dimensions}=props

    console.log(imageURL,"imageURL FROM image component")

    return(
        <img  src={imageURL} width={dimensions.width} height={dimensions.height} />

    )
}
export default ImageComponent