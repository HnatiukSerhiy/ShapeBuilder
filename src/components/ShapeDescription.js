import React, {useState} from "react";

function SquareDescription(props) {
    return (
        <div className="description square-description">
            <p>
                Square is a regular quadrilateral, which means that it has four equal sides and four equal angles
                (90-degree angles, π/2 radian angles, or right angles).
            </p>
            P = 4 * length = <span className="red">{props.perimeter}</span>
            <br></br>
            S = 2 * length = <span className="red">{props.area}</span>
        </div>
    );
}

function RectangleDescription(props) {
    return (
        <div className="description rectangle-decription">
            <p>
                Rectangle is a quadrilateral with four right angles. It can also be defined as: 
                an equiangular quadrilateral, since equiangular means that all of its angles
                are equal (360°/4 = 90°); or a parallelogram containing a right angle. 
                A rectangle with four sides of equal length is a square.
            </p>
            P = 2 * (length + width) = <span className="red">{props.perimeter}</span>
            <br></br>
            S = length * width = <span className="red">{props.area}</span>
        </div>
    )
}

function TriangleDescription(props) {
    return (
        <div className="description triangle-description">
            <p>
                A triangle is a polygon with three edges and three vertices. It is one of the basic shapes in geometry.
                In Euclidean geometry, any three points, when non-collinear, determine a unique triangle and simultaneously,
                a unique plane (i.e. a two-dimensional Euclidean space). In other words, there is only one plane that contains
                that triangle, and every triangle is contained in some plane.
            </p>
            P = first side + second side + third side = <span className="red">{props.perimeter}</span>
            <br></br>
            S = 1/2 * first leg * second leg = <span className="red">{props.area}</span>
        </div>
    )
}

function CircleDescription(props) {
    return (
        <div className="description circle-description">
            <p>
                A circle is a shape consisting of all points in a plane that are at a given distance from a given point, 
                the centre. Equivalently, it is the curve traced out by a point that moves in a plane so that its distance
                from a given point is constant. The distance between any point of the circle and the centre is called the radius. 
                Usually, the radius is required to be a positive number.
            </p>
            C = 2 * PI * R = <span className="red">{props.length}</span>
            <br></br>
            S = PI * R^2 = <span className="red">{props.area}</span>
        </div>
    );
}

export {
    SquareDescription,
    RectangleDescription,
    TriangleDescription,
    CircleDescription
};