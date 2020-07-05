import React, { Component } from 'react';
import Progress from 'components/Progress';

export default class Timer extends Component {
    render() {
        return (
            <>
                <Progress totalValue={200} fillValue={20} cooldown={false} />
            </>
        );
    }
}
