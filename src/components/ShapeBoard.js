import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Square, Circle, Rectangle, Triangle} from './Shape';
import {SquareDescription, CircleDescription, RectangleDescription, TriangleDescription} from './ShapeDescription'; 

function ShapeBoard() {
    const shape = useSelector(state => state.app.shape);

    const getSquareParams = () => {
        const perimeter = 4 * Number(shape.params['square-length-value']);
        const area = shape.params['square-length-value'] * shape.params['square-length-value'];

        return {
            length: shape.params['square-length-value'],
            perimeter: perimeter,
            area: area
        };
    }

    const getRectangleParams = () => {
        const perimeter = 2 * (Number(shape.params['rectangle-length-value']) + Number(shape.params['rectangle-width-value']));
        const area = shape.params['rectangle-length-value'] * shape.params['rectangle-width-value'];

        return {
            length: shape.params['rectangle-length-value'],
            width: shape.params['rectangle-width-value'],
            perimeter: perimeter,
            area: area
        };
    }

    const getTriangleParams = () => {
        const firstSide = 6;
        const secondSide = 12;
        const thirdSide = Math.round(Math.sqrt(Math.pow(secondSide, 2) - Math.pow(firstSide, 2)));
        const firstAngle = 30;
        const secondAngle = 60;
        const thirdAngle = 90;

        const perimeter = Number(firstSide) + Number(secondSide) + Number(thirdSide);
        
        const area = Math.round(0.5 * firstSide * thirdSide);

        return {
            firstLength: firstSide,
            secondLength: secondSide,
            thirdLength: thirdSide,
            firstAngle: firstAngle,
            secondAngle: secondAngle,
            thirdAngle: thirdAngle, 
            perimeter: perimeter,
            area: Math.round(area)
        };
    }

    const getCircleParams = () => {
        const radius = shape.params['circle-radius-value'];

        const length = Math.round(2 * Math.PI * radius);
        const area = Math.round(Math.PI * Math.pow(radius, 2));

        return {
            radius: radius,
            length: length,
            area: area
        };
    }

    const handleShape = () => {
        switch(shape.name) {
            case 'square': 
                return (
                    <div className='square-shape-board'>
                        <Square length={getSquareParams().length} />
                        <SquareDescription perimeter={getSquareParams().perimeter} area={getSquareParams().area} />
                    </div>
                );  
            case 'rectangle': 
                return (
                    <div className='rectangle-shape-board'>
                        <Rectangle length={getRectangleParams().length} width={getRectangleParams().width} />
                        <RectangleDescription perimeter={getRectangleParams().perimeter} area={getRectangleParams().area} />
                    </div>
                );
            case 'triangle':
                return (
                    <div className='triangle-shape-board'>
                        <Triangle firstLength={getTriangleParams().firstLength} secondLength={getTriangleParams().secondLength}
                            thirdLength={getTriangleParams().thirdLength} firstAngle={getTriangleParams().firstAngle} 
                            secondAngle={getTriangleParams().secondAngle} thirdAngle={getTriangleParams().thirdAngle} />
                        <TriangleDescription perimeter={getTriangleParams().perimeter} area={getTriangleParams().area} />
                    </div>
                );
            case 'circle': 
                return (
                    <div className='circle-shape-board'>
                        <Circle radius={getCircleParams().radius} />
                        <CircleDescription length={getCircleParams().length} area={getCircleParams().area} />
                    </div>
                );
        }
    }

    return (
        <div className='shape-board'>
            {handleShape()}
        </div>
    );
}

export default ShapeBoard;