import React, {Component} from "react";
import Form from "./Form";
import Results from "./Results";
import youtubeApi from "../includes/youtubeApi";

class Body extends Component{

    state ={
        tags : [],
        videoTitle : '',
        channelTitle : '',
        views : '',
        errorStatus : false

    }
    MakeApiCall = async (url) =>{
        try{
            const response = await youtubeApi.get("/videos",{
            params:{
                id : url

            }})
            this.setState({
                everything : response.data.items,
                tags : response.data.items[0].snippet.tags,
                videoTitle : response.data.items[0].snippet.title,
                channelTitle : response.data.items[0].snippet.channelTitle,
                views : response.data.items[0].statistics.viewCount
            })
        }
        catch(error){
            this.setState({
            tags : ["No Tags Found","Inavlid Url Link","Try pastring Url again"],
            videoTitle : 'Invalid Url',
            channelTitle : '',
            views : '0'
        })

        }
    }
    

    render()
    {
        return(
            <div className="w-full container mx-auto my-12">
                <Form makeApiCall = {this.MakeApiCall}/>
                <Results 
                tags={this.state.tags} 
                videoTitle={this.state.videoTitle}
                channelTitle = {this.state.channelTitle}
                views = {this.state.views}
                />
            </div>
        )
    }
}


export default Body;