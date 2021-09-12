import React from 'react'

export default function PictureCard(props) {

let {id,imageUrl}=props;
    return (
        <div className="my-3 mx-5">
                <div className="card" style={{width: "18rem"}} >
                    <img className="card-img-top" key={id} src={imageUrl} alt=".." />
                    {/* <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-primary">Go somewhere</a>
                    </div> */}
                </div>
            </div>
    )
}
