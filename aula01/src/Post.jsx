export function Post(props){
    // console.log(props);
    return (
        <div>
            <h3>{props.content}</h3>
            <h3>{props.author}</h3>
        </div>
    )
}
