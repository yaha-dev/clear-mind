import React from 'react';
import { ProgressContainer } from './styled';

export default class Progress extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();
    }

    drawing = (context, arc, isGradient = false, lineWidth = '10') => {
        context.beginPath();
        context.arc(...arc);
        context.lineWidth = lineWidth;

        if (isGradient) {
            const gradient = context.createLinearGradient(0, 180, 100, 0);
            gradient.addColorStop(0, '#f0ae57');
            gradient.addColorStop(1, '#c04da8');
            context.strokeStyle = gradient;
        } else {
            context.strokeStyle = '#dcebf8';
        }
        context.stroke();
    };

    init = () => {
        const { totalValue, fillValue, cooldown } = this.props;
        const FPS = 5;
        const RESULT = Math.round((360 / totalValue) * fillValue);
        const FILL_PERCENTAGE =
            totalValue / Math.round((totalValue / 360) * 100);
        const ONE_RADIANT = Math.PI / 180;
        const RADIANTS = (Math.PI / 180) * 270;

        const canvasNode = this.canvasRef.current;
        const { width, height } = canvasNode;
        const context = canvasNode.getContext('2d');
        const [posX, posY] = [width / 2, height / 2];
        let degrees = 0;

        const acrInterval = setInterval(() => {
            const fillNextStep = ~~(degrees * 10 + FILL_PERCENTAGE * 10) / 10;
            degrees =
                !cooldown && fillNextStep < RESULT ? fillNextStep : RESULT;

            context.clearRect(0, 0, width, height);
            const [smRadius, smIndent] = [width / 1.74, width / 2.4 - 1];
            const [mdRadius, mdIndent] = [width / 1.86, width / 2.18 - 2];
            const lgRadius = width / 2 - 3;

            // small
            this.drawing(
                context,
                [smRadius, posY, smIndent, RADIANTS, ONE_RADIANT * (270 + 360)],
                false,
                1
            );
            this.drawing(
                context,
                [
                    smRadius,
                    posY,
                    smIndent,
                    RADIANTS,
                    ONE_RADIANT * (270 + degrees),
                ],
                true,
                1
            );

            // medium
            this.drawing(
                context,
                [mdRadius, posY, mdIndent, RADIANTS, ONE_RADIANT * (270 + 360)],
                false,
                2
            );
            this.drawing(
                context,
                [
                    mdRadius,
                    posY,
                    mdIndent,
                    RADIANTS,
                    ONE_RADIANT * (270 + degrees),
                ],
                true,
                2
            );

            // large
            this.drawing(
                context,
                [posX, posY, lgRadius, RADIANTS, ONE_RADIANT * (270 + 360)],
                false,
                3
            );
            this.drawing(
                context,
                [posX, posY, lgRadius, RADIANTS, ONE_RADIANT * (270 + degrees)],
                true,
                3
            );

            if (degrees >= RESULT) {
                clearInterval(acrInterval);
            }
        }, FPS);
    };

    componentDidMount() {
        this.init();
    }

    shouldComponentUpdate() {
        if (this.props.cooldown) {
            this.init();
        }
        return true;
    }

    render() {
        const { width, height, children } = this.props;

        return (
            <ProgressContainer>
                <canvas
                    ref={this.canvasRef}
                    width={width}
                    height={height}
                    children="Sorry but your browser don't support Canvas ;("
                />

                {children && children}
            </ProgressContainer>
        );
    }
}

Progress.defaultProps = {
    width: '245px',
    height: '245px',
    children: null,
    totalValue: 100,
    fillValue: 0,
    cooldown: false,
};
