import React from 'react'

const Drumset = (props) => {
    return (
        <div id="drum-set" className="container">
            <div className="row" id="row-1">
                <div className="col drum-pad" id="Heater-1" onClick={() => props.play('Q', 'Heater 1')}>
                    <button className="pad">Q</button>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
                </div>
                <div className="col drum-pad" id="Heater-2" onClick={() => props.play('W', 'Heater 2')}>
                    <button className="pad">W</button>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
                </div>
                <div className="col drum-pad" id="Heater-3" onClick={() => props.play('E', 'Heater 3')}>
                    <button className="pad">E</button>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
                </div>
                <div className="col drum-pad" id="Heater-4" onClick={() => props.play('A', 'Heater 4')}>
                    <button className="pad">A</button>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
                </div>
            </div>
            <div className="row" id="row-2">
                <div className="col drum-pad" id="Clap" onClick={() => props.play('S', 'Clap')}>
                    <button className="pad">S</button>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
                </div>
                <div className="col drum-pad" id="Open-HH" onClick={() => props.play('D', 'Open HH')}>
                    <button className="pad">D</button>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
                </div>
                <div className="col drum-pad" id="Kick-n-Hat" onClick={() => props.play('Z', "Kick 'n' Hat")}>
                    <button className="pad">Z</button>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
                </div>
            </div>
            <div className="row" id="row-3">
                <div className="col drum-pad" id="Kick" onClick={() => props.play('X', 'Kick')}>
                    <button className="pad">X</button>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
                </div>
                <div className="col drum-pad" id="Closed-HH" onClick={() => props.play('C', 'Closed HH')}>
                    <button className="pad">C</button>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
                </div>
            </div>
        </div>
    )
}

export default Drumset

/*
<div className="drum-pad" id={props.clipName} onClick={() => {props.playSoundClip(props.button, props.clipName)} } >
    <div>
        {props.button}
    </div>
    <audio src={props.clipSrc} className="clip" id={props.button} ></audio>
</div>
*/