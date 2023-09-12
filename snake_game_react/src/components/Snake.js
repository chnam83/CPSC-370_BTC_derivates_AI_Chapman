import React, { Component } from 'react';

class Snake extends Component {
    constructor() {
        super();
        this.state = {
            snakeBody: [
                {x: 0, y: 0}
            ]
        };
    }

    render() {
        return (
            <div>
                {this.state.snakeBody.map((dot, i) => {
                    const style = {
                        left: `${dot.x}%`,
                        top: `${dot.y}%`
                    }
                    return (
                        <div className="snake-dot" key={i} style={style}></div>
                    )
                })}
            </div>
        );
    }
}

export default Snake;
