import React from 'react'

const DrumPad = (props) => {
    return (
        <div className="drum-pad" id={props.clipName} onClick={() => {props.playSoundClip(props.button, props.clipName)} } >
            {props.button}
            <audio src={props.clipSrc} className="clip" id={props.button} ></audio>
        </div>
    )
}

export default DrumPad