import React from 'react';
import '../css/square.css';
import '../css/rectangle.css';
import '../css/triangle.css';
import '../css/circle.css';

function Square(props) {
    return (
        <div className='square-container'>
            <div className='square-length'>{props.length}</div>
            <div className='square'>
                <div className='square-angle'>
                    {90}&deg;
                </div> 
            </div>
        </div>
    );
}

function Rectangle(props) {
    return ( 
        <div className='rectangle-container'>
            <div className='rectangle-length'>{props.length}</div>
            <div className='rectangle'>
                <div className='rectangle-width'>{props.width}</div>
                <div className='rectangle-angle'>
                    {90}&deg;
                </div> 
            </div>    
        </div>
    );
}

function Triangle(props) {
    return ( 
        <div className='triangle-container'>
            <div className='triangle'>
                <div className='first-side' ></div>
                <div className='first-side-value'>
                        {props.firstLength}
                    </div>

                <div className='second-side' ></div>
                <div className='second-side-value'>
                    {props.secondLength}
                </div>

                <div className='third-side'></div>
                <div className='third-side-value'>
                    {props.thirdLength}
                </div>

                <div className='first-angle'>{90}&deg;</div>
                <div className='second-angle'>{30}&deg;</div>
                <div className='third-angle'>{60}&deg;</div>
            </div>
        </div>
    );
}

function Circle(props) {
    return (
        <div className='circle-container'>
            <div className='circle'>
                <div className='radius-value'>
                    {props.radius}
                </div>
                <div className='radius'></div>
            </div>
        </div> 
    );
}

export {
    Square,
    Rectangle,
    Triangle,
    Circle
}