
import ImageComponent from "../../image/image-component"

const Card=(prop)=>{
  const {title,category,image,dimensions}=prop.item
    return(
        <div className="card" style={{ width: "100%" }}>
            <ImageComponent imageURL={image}  dimensions={dimensions} />
            
  <div className="card-body">
  <h3 className="card-text">{category}</h3>
    <h4 className="card-title">{title}</h4>

    <a href="#" className="btn btn-primary">
      See Profile
    </a>
  </div>
</div>

    )
}
export default Card