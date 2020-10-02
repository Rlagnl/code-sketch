import { create } from "domain"

function init(): void {
	var app = document.getElementById('app')
	var canvas = setStyle(setAttribute(document.createElement('canvas')))
	app?.appendChild(canvas)

	var context = canvas.getContext('2d') as CanvasRenderingContext2D
	context.strokeStyle = "red";
	// context.lineWidth = 3
	// context.lineJoin = "round"
	// context.strokeRect(80, 10, 20, 30)

	context.fillStyle = "#0000ff";
	// context.fillRect(10, 10, 20, 30)

	context.fillStyle = "#a0a0a0";
	// context.fillRect(50, 50, 30, 30)

	// context.clearRect(60, 60, 10, 10);

	// context.arc(160, 160, 50, 0, 2 * Math.PI)
	// context.stroke();

	// context.beginPath();
	// context.moveTo(194, 100);
	// context.arc(100, 100, 94, 0, Math.PI, true);
	// context.arcTo(150, 150, 200, 200, 180)
	// context.moveTo(100, 100);
	// context.lineTo(35, 100);
	// context.stroke();
	context.beginPath();

	context.shadowOffsetX = 5;
	context.shadowOffsetY = 5;
	context.shadowBlur = 4;
	context.shadowColor = "rgba(0, 0, 0, 0.5)";
	//绘制外圆
	context.arc(100, 100, 99, 0, 2 * Math.PI, false);
	//绘制内圆
	context.moveTo(194, 100);
	context.arc(100, 100, 94, 0, 2 * Math.PI, false);
	//变换原点
	context.translate(100, 100);
	//旋转表针
	context.rotate(1);
	context.moveTo(0,0);
	context.lineTo(0, -85);
	//绘制时针
	context.moveTo(0, 0);
	context.lineTo(-65, 0);
	//描边路径
	context.stroke();

	context.font = "bold 14px Arial";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText("12 abc 加油", 200, 100);


	console.log('measureText', context.measureText("Hello world!").width)
}

function setAttribute($canvas: HTMLCanvasElement): HTMLCanvasElement {
	$canvas.setAttribute('id', 'test1')
	$canvas.setAttribute('width', '400')
	$canvas.setAttribute('height', '400')
	return $canvas
}

function setStyle($canvas: HTMLCanvasElement): HTMLCanvasElement {
	$canvas.style.border = '2px solid black'
	$canvas.style.display = 'block'
	$canvas.style.position = 'absolute'
	$canvas.style.top = '50px'
	$canvas.style.left = '50px'
	return $canvas
}

export default init
