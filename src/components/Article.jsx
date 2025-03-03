/* eslint-disable react/prop-types */

function Article(props) {
    console.log(props)

    return(
        <div>
            <article>
            <h2 style={{ color: "darkgrey" }}>{props.date}</h2>

                <h2>{props.title}</h2>

                <img src= {props.img} />
                         
                <p>{props.content}</p>

                <p style={{ color: "red", textAlign: "right" }}>
                <strong>Continues...</strong>
                </p>
            </article>
        </div>
    );
}
export default Article