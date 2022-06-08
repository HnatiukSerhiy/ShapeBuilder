import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {resetState, addShape} from '../redux/appSlice';
import {SquareInput, RectangleInput, CircleInput, TriangleInput} from './ShapeInput';

function DrawForm() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        let shape = {
            name: event.target[0].value,
            params: {}
        };

        for (let i = 1; i < event.target.length - 1; i++) {
            shape.params[`${event.target[i].name}`] = event.target[i].value;
        }

        dispatch(resetState());
        dispatch(
            addShape({
                shape: shape
            })
        );
    }

    const handleShape = () => {
        switch(value) {
            case 'square': 
                return <SquareInput length="5" />;
            case 'rectangle': 
                return <RectangleInput length="10" width="5" />;
            case 'triangle':
                return <TriangleInput firstLength="5" secondLength="5" thirdLength="5" firstAngle="20" secondAngle="20" />;
            case 'circle':
                return <CircleInput radius="5" />;
        }
    }

    return (
        <div className='form-container'>
            <form onSubmit={onSubmit}>
                <div className='shape-name'>
                    <label htmlFor="shape">Choose Shape</label>
                    <select required id="shape" name="shape" value={value}
                    onChange={(event) => setValue(event.target.value)}>
                        <option value="">none</option>
                        <option value="square">Square</option>
                        <option value="rectangle">Rectangle</option>
                        <option value="triangle">Right triangle</option>
                        <option value="circle">Circle</option>
                    </select>
                </div>
                <div className='shape-params'>
                    {handleShape()}
                </div>
                <button type="submit" className='draw-btn'>
                    Draw Shape
                </button>
            </form>
        </div>
    );
}

export default DrawForm;