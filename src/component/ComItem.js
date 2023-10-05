const ComItem  = ({obj}) => {
    let {title,image,description} = obj

    return (
            <li className="concept">
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
            </li>
    )

}
export default ComItem;