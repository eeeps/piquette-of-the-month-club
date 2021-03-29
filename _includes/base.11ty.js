exports.render = function(data) {
return `

<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	<title>${ data.title ? data.title + ' – ' : '' }Piquette of the Month Club</title>
	<link rel="stylesheet" href="/style.css" />
</head>
<body>
	${ data.content }
</body>
</html>

`;
};