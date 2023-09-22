var image1 = null;
var image2 = null;
var image3 = null;
var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");
var canvas4 = document.getElementById("canvas4");
var canvas5 = document.getElementById("canvas5");
var canvas6 = document.getElementById("canvas6");

function handleSizes(imageA, imageB){
	var dimensions = []
	var widthA = imageA.getWidth();
	var heightA = imageB.getHeight();
	var widthB = imageA.getWidth();
	var heightB = imageB.getHeight();
	if (widthA != widthB) {
		var imageWidth = widthB;
	} else {
		(imageWidth = widthA)
	}
	widthA = imageWidth;
	widthB = imageWidth;
	dimensions = [widthA, heightA, widthB, heightB];
}
var imageWidth = handleSizes(image1, image2)

function chooseFile1() {
	var fileinput = document.getElementById("1");
	image1 = new SimpleImage(fileinput);
	image1.drawTo(canvas1);
}
function chooseFile2() {
	var fileinput = document.getElementById("2");
	image2 = new SimpleImage(fileinput);
	image2.drawTo(canvas2);
}
function clearbits(colorval){
	var x = Math.floor(colorval/16)*16;
	return x;
}

function shift(){
	for(var px of image1.values()){
		px.setRed(px.getRed()/16);
		px.setGreen(px.getGreen()/16);
		px.setBlue(px.getBlue()/16);
	}
	return image1
}

function chop2hide(){
	for (var px of image2.values()){
		px.setRed(clearbits(px.getRed()));
		px.setGreen(clearbits(px.getGreen()));
		px.setBlue(clearbits(px.getBlue()));
	}
	return image2
}

function combine(nImage1, nImage2){

	var answer = new SimpleImage(nImage2.getWidth(), nImage2.getHeight());
	for (var px of answer.values()){
		var x = px.getX();
		var y = px.getY();
		var showPixel = nImage2.getPixel(x,y);
		var hidePixel = nImage1.getPixel(x,y);
		px.setRed(showPixel.getRed() + hidePixel.getRed());
		px.setGreen(showPixel.getGreen() + hidePixel.getGreen());
		px.setBlue(showPixel.getBlue() + hidePixel.getBlue());
	}
	return answer
}

function extractbits(colorval){
	var x = colorval % 16
	return x;
}

function performSteganography(){
	nImage1 = shift();
	nImage2 = chop2hide();
	var answer = combine(nImage1, nImage2);
	answer.drawTo(canvas2);

}

function unhide(){
	var answer = new SimpleImage(document.getElementById("canvas2"));
	for(var px of answer.values()){
	var R = px.getRed();
	var G = px.getGreen();
	var B = px.getBlue();
	var Rs = R % 16;
	var Gs = G % 16;
	var Bs = B % 16;
	px.setRed(Rs*16);
	px.setGreen(Gs*16);
	px.setBlue(Bs*16);
	}
	answer.drawTo(canvas3);
}