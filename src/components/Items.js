import React,{Component} from 'react'
import PictureCard from './PictureCard'

export class Items extends Component {



constructor(){
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
        images: [],
        loading: false,
        
    }
}
    async componentDidMount() {
   
    const url="https://api.unsplash.com/search/photos/?client_id=HxtClWTy8gGp5ursIaYlNRl_6jgIfAc9RLHQ4ZJml3M&query=car"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
       images: parsedData.results
    })
    }
    render() {
    return (
        <div className="container">
                         
                    <div className="row">
                        {this.state.images.map((element) => {
                            // console.log(element.urls.regular);
                            return <div className="col-md-4" key={element.url}>                               
                                <PictureCard key={element.id} imageUrl={!element.urls.regular?"https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80":element.urls.raw} />
                            </div>
                        })}
                    </div>
                    </div> 
    )
}
}
export default Items