import React from "react";
function Info(props){
    return (
        <div className="w-1/2 px-2 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-8">Info</div>
                <div className="mb-8">
                    <strong>Channel Title</strong>
                    <span className="text-gray-700 text-base"> {props.channelTitle}</span>
                </div>
                <div className="mb-8 mt-4">
                    <strong>Video Title</strong>
                    <span className="text-gray-700 text-base"> {props.videoTitle}</span>
                </div>
                <div className="mb-8 mt-4">
                    <strong>Video Views</strong>
                    <span className="text-gray-700 text-base"> {props.views}</span>
                </div>
            </div>
        </div>
    )
}

export default Info;