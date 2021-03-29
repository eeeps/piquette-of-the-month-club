exports.data = {
	"layout": "base"
};

exports.render = function(data) {
	return `

<h1>Piquette of the Month Club</h1>
<main>
${ data.content }
</main>

`;
};