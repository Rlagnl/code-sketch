import { create } from "domain"

function init(): void {
	var app = document.getElementById('app')
	var canvas = setStyle(setAttribute(document.createElement('canvas')))
	app?.appendChild(canvas)

	draw(canvas)
}

function draw($canvas: HTMLCanvasElement): void {
	// 创建上下文
	var gl = $canvas.getContext("webgl2") as WebGL2RenderingContext
	// 清除<canvas>
	gl.clearColor(0,0,0,1);
	gl.clear(gl.COLOR_BUFFER_BIT);
	// 设置视口
	gl.viewport(50, 50, 300, 300)
	// 设置缓冲区
	var buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0.5, 1]), gl.STATIC_DRAW);
}

function setAttribute($canvas: HTMLCanvasElement): HTMLCanvasElement {
	$canvas.setAttribute('id', 'test2')
	$canvas.setAttribute('width', '400')
	$canvas.setAttribute('height', '400')
	return $canvas
}

function setStyle($canvas: HTMLCanvasElement): HTMLCanvasElement {
	$canvas.style.border = '2px solid black'
	$canvas.style.display = 'block'
	$canvas.style.position = 'absolute'
	$canvas.style.top = '50px'
	$canvas.style.left = '550px'
	return $canvas
}

export default init
