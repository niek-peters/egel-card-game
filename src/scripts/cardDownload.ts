import JsFileDownloader from 'js-file-downloader';

export function jsonDownload(json: string) {
	const src = 'data:text/json;charset=utf-8,' + encodeURIComponent(json);

	new JsFileDownloader({
		url: src,
		filename: 'card.json'
	});
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
export function svgDownload(svgElement: HTMLElement) {
	//get svg source.
	const serializer = new XMLSerializer();
	let source = serializer.serializeToString(svgElement);

	//add name spaces.
	if (!source.match(/^<svg[^>]+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)) {
		source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
	}
	if (!source.match(/^<svg[^>]+"http:\/\/www\.w3\.org\/1999\/xlink"/)) {
		source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
	}

	//add xml declaration
	source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

	//convert svg source to URI data scheme.
	const src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

	new JsFileDownloader({
		url: src,
		filename: 'card.svg'
	});
}

export function svgDownloadAsPng(svgElement: HTMLElement, canvasElement: HTMLCanvasElement) {
	const { width, height } = svgElement.getBoundingClientRect();

	const img = new Image();

	img.onload = () => {
		if (!canvasElement) return;

		const cx = canvasElement.getContext('2d');
		if (!cx) return;

		canvasElement.width = width;
		canvasElement.height = height;

		cx.drawImage(img, 0, 0, width, height);

		downloadCanvasAsPng(canvasElement);
	};
	img.src = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(serializeString(svgElement));
}

// This function serializes SVG and sets all necessary attributes
function serializeString(svgElement: HTMLElement) {
	const xmlns = 'http://www.w3.org/2000/xmlns/';
	const xlinkns = 'http://www.w3.org/1999/xlink';
	const svgns = 'http://www.w3.org/2000/svg';
	svgElement = svgElement.cloneNode(true) as HTMLElement;
	const fragment = window.location.href + '#';
	const walker = document.createTreeWalker(svgElement, NodeFilter.SHOW_ELEMENT, null);
	while (walker.nextNode()) {
		// @ts-ignore
		for (const attr of walker.currentNode.attributes) {
			if (attr.value.includes(fragment)) {
				attr.value = attr.value.replace(fragment, '#');
			}
		}
	}
	svgElement.setAttributeNS(xmlns, 'xmlns', svgns);
	svgElement.setAttributeNS(xmlns, 'xmlns:xlink', xlinkns);
	const serializer = new XMLSerializer();
	const string = serializer.serializeToString(svgElement);
	return string;
}

/* REGISTER DOWNLOAD HANDLER */
/* Only convert the canvas to Data URL when the user clicks. 
   This saves RAM and CPU ressources in case this feature is not required. */
function downloadCanvasAsPng(canvas: HTMLCanvasElement) {
	let src = canvas.toDataURL('image/png');
	/* Change MIME type to trick the browser to downlaod the file instead of displaying it */
	src = src.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');

	/* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
	src = src.replace(
		/^data:application\/octet-stream/,
		'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=card.png'
	);

	new JsFileDownloader({
		url: src,
		filename: 'card.png'
	});
}
