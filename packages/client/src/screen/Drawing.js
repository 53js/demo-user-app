/* eslint-disable no-console */
import { useCallback, useEffect, useRef } from 'react';
import { Button, Col, Row } from 'reactstrap';

import './Drawing.scss';

const W = 500;
const H = 500;

const fakeData = [
	{ x: 0, y: 0 }, { x: 100, y: 100 },
	{ x: 200, y: 200 }, { x: 300, y: 300 },
	{ x: 400, y: 400 }, { x: 500, y: 500 },
	{ x: 600, y: 600 }, { x: 700, y: 700 },
];

export const ScreenDrawing = () => {
	const canvasRef = useRef(null);

	const initDraw = useCallback((ctx) => {
		console.log('initDraw');
		// draw background
		ctx.fillStyle = '#fff';
		ctx.beginPath();
		ctx.rect(0, 0, canvasRef.current.width, canvasRef.current.height);
		ctx.fill();
		// draw fakeData
		ctx.strokeStyle = '#ddd';
		ctx.fillStyle = '#ddd';
		fakeData.forEach((d, i) => {
			ctx.beginPath();
			ctx.rect(d.x, d.y, 50 + i * 10, 50 + i * 10);
			ctx.fill();
		});
	}, []);

	useEffect(() => {
		console.log('useEffect 1');
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		// tricks to get high resolution canvas
		canvas.width = W * 2;
		canvas.height = H * 2;
		canvas.style.width = `${W}px`;
		canvas.style.height = `${H}px`;
		// end tricks
		initDraw(context);
	}, [initDraw]);

	// un 2eme useEffect
	// il est tout à fait possible d'avoir plusieurs useEffect
	// c'est même recommandé pour séparer les effets
	useEffect(() => {
		console.log('useEffect 2');
		const resize = () => {
			console.log('resize');
		};
		window.addEventListener('resize', () => {
			resize();
		});
		// on oublie pas de nettoyer
		return () => {
			console.log('removeEventListener');
			window.removeEventListener('resize', resize);
		};
	}, []);

	const handleClickBtnRandom = () => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		context.fillStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		context.beginPath();
		context.rect(
			Math.random() * canvas.width,
			Math.random() * canvas.height,
			Math.random() * 20 + 10,
			Math.random() * 20 + 10,
		);
		context.fill();
	};

	console.log('render', canvasRef.current);

	return (
		<Row className="Drawing">
			<Col className="d-flex flex-column justify-content-center align-items-center">
				<canvas ref={canvasRef} />
				<Button onClick={handleClickBtnRandom} className="mt-4">
					Draw random rect
				</Button>
			</Col>
		</Row>
	);
};
