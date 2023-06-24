import React, {Component} from "react";
import extractYouTubeVideoId from "../includes/youtubeParser";
class Form extends Component{
    state = {
        url : ''
    }


    handleUrlChange = event =>{
        this.setState(
            {
                url : event.target.value
            }
        )
    }

    handleFormSubmit = event=>{
        event.preventDefault();
        var parserdUrl = extractYouTubeVideoId(this.state.url);
        this.props.makeApiCall(parserdUrl);
    }
    render(){
        return(
            <div>
                <h3 className="text-4xl text-center my-16">Video Statistics</h3>
                <form class="w-full max-w-xl mx-auto" onSubmit={this.handleFormSubmit}>
                    <div class="flex items-center border-b border-red-700 py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="https://www.youtube.com/watch?v=Rgx8dpiPwpA&ab_channel=JomaTech" aria-label="Youtube Video Url Or Id"
                        value = {this.state.url} onChange={this.handleUrlChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;