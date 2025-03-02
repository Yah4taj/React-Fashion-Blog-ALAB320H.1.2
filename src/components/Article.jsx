/* eslint-disable react/prop-types */

function Article(props) {
    console.log(props)

    return(
        <div>
            <article>
                <h2>{props.date}</h2>
                <h2>{props.title}</h2>

                <img src= {props.img} />
                         
                <p>{props.content}</p>
                
            </article>
        </div>
    )
}
export default Article