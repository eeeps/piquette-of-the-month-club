exports.render = function(data) {
return `

<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	<title>${ data.title ? data.title + ' – ' : '' }Piquette of the Month Club</title>
	<link rel="stylesheet" href="/style.css" />
	<link rel="icon" href="/favicon.ico">
	<link rel="icon" href="/icon.svg" type="image/svg+xml">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png">
</head>
<body>
	${ data.content }
</body>
</html>

`;
};