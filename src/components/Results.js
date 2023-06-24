import React,{Component} from "react";
import Tags from "../metrics/Tags";
import Info from "../metrics/Info";

class Result extends Component{
    render(){
        return(
            <div className="w-full container mx-auto m-24">
                <div id="tags">
                    <div class="px-2">
                        <div class="flex -mx-2">
                            <Tags tags={this.props.tags} />
                            <Info 
                            videoTitle = {this.props.videoTitle}
                            channelTitle = {this.props.channelTitle}
                            views = {this.props.views}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;