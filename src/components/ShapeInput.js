import React, {useState} from 'react';

function SquareInput(props) {
    const [state, setState] = useState({
        length: props.length
    });

    return (
        <div className="square-length-container">
            <label htmlFor="square-length-value">Enter side length</label>
            <input id="square-length-value" name="square-length-value"
            type="number" min="5" max="50" value={state.length} 
            onChange={(event) => setState({...state, length: event.currentTarget.value})} />
        </div>
    );
}

function RectangleInput(props) {
    const [state, setState] = useState({
        width: props.width,
        length: props.length
    });

    return (
        <div className='rectangle-params'>
            <div className="rectangle-width-container">
                <label htmlFor="rectangle-width-value">Enter width</label>
                <input id="rectangle-width-value" name="rectangle-width-value"
                type="number" min="5" max="50" value={state.width}
                onChange={(event) => setState({...state, width: event.currentTarget.value})} />
            </div>
            <div className="rectangle-length-container">
                <label htmlFor="rectangle-length-value">Enter length</label>
                <input id="rectangle-length-value" name="rectangle-length-value"
                type="number" min="5" max="50" value={state.length}
                onChange={(event) => setState({...state, length: event.currentTarget.value})} />
            </div>
        </div>
    );
}

function TriangleInput(props) {
    const [state, setState] = useState({
        firstLength: props.firstLength,
        secondLength: props.secondLength,
        thirdLength: props.thirdLength,
        firstAngle: props.firstAngle,
        secondAngle: props.secondAngle
    });

    return (
        <div className='triangle-params'>
            {/* <div className="triangle-length-container">
                <label htmlFor="triangle-first-length-value">Enter first side length</label>
                <input id="triangle-first-length-value" name="triangle-first-length-value"
                type="number" min="5" max="50" value={state.firstLength}
                onChange={(event) => setState({...state, firstLength: event.currentTarget.value})}/>
            </div>
            <div className="triangle-length-container">
                <label htmlFor="triangle-second-length-value">Enter second side length</label>
                <input id="triangle-second-length-value" name="triangle-second-length-value"
                type="number" min="5" max="50" value={state.secondLength}
                onChange={(event) => setState({...state, secondLength: event.currentTarget.value})} />
            </div>
            <div className="triangle-length-container">
                <label htmlFor="triangle-third-length-value">Enter second side length</label>
                <input id="triangle-third-length-value" name="triangle-third-length-value"
                type="number" min="5" max="50" value={state.thirdLength}
                onChange={(event) => setState({...state, thirdLength: event.currentTarget.value})} />
            </div>
            <div className="triangle-angle-container">
                <label htmlFor="triangle-first-angle-value">Enter angle value</label>
                <input id="triangle-first-angle-value" name="triangle-first-angle-value"
                type="number" min="20" max="170" value={state.firstAngle}
                onChange={(event) => setState({...state, firstAngle: event.currentTarget.value})}/>
            </div>
            <div className="triangle-angle-container">
                <label htmlFor="triangle-second-angle-value">Enter angle value</label>
                <input id="triangle-second-angle-value" name="triangle-second-angle-value"
                type="number" min="20" max="170" value={state.secondAngle}
                onChange={(event) => setState({...state, secondAngle: event.currentTarget.value})}/>
            </div> */}
            {/* Universal build triangle in progress */}
        </div>
    );
}

function CircleInput(props) {
    const [state, setState] = useState({
        radius: props.radius
    });

    return (
        <div className='circle-params'>
            <div>
                <label htmlFor="circle-radius-value">Enter circle radius</label>
                <input id="circle-radius-value" name="circle-radius-value"
                type="number" min="5" max="50" value={state.radius}
                onChange={(event) => setState({...state, radius: event.currentTarget.value})} />
            </div>
        </div>
    );
}

export {
    SquareInput,
    RectangleInput,
    TriangleInput,
    CircleInput
}