import { Component } from "react";

class Grabber extends Component {
    render() {
        return (
            <div className='grabber-image'>
                <div className='grabber-image-overlay'>
                    <div className='grabber-image-content'>
                        <p className='grabber-text'>Hi, I'm <s>Tim</s> Tylar!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Grabber;
