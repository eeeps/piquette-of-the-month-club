exports.data = {
	"layout": "index"
};

exports.render = function(data) {

	return `
${ data.piquettes.reverse().map( piquette => {

	const [ yearNum, monthNum ] = piquette.month.split( '-' );
	const monthName = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	][ parseInt( monthNum ) - 1 ],
		prettyDate = `${ monthName } ${ yearNum }`;

	let header = '',
	    image = '',
	    facts = '',
	    rating = '',
	    pullquote = '';

	header = `
<p><time datetime="${ piquette.month }">${ prettyDate }</time></p>
<h2>
	<small class="winery">${ piquette.winery }</small>
	${ piquette.name }
	${ piquette.subtitle && piquette.subtitle !== "" ? `<small class="subtitle">${ piquette.subtitle }</small>` : "" }
</h2>`;

	if ( piquette.photos && piquette.photos.length > 0 ) {
		image = `
<img
	class="hero"
	src="${ piquette.photos[ 0 ].replace(/v\d{10}/, '/c_fill,h_500,w_500,g_auto,f_auto,q_auto/') }"
/>`
	}

	if ( piquette.facts ) {

		let definitions = Object.keys( piquette.facts ).map( k => {
			return `
	<dt>${ k }</dt>
	<dd>${ piquette.facts[ k ] }</dd>
`;
		} );
		
		facts = `<dl>
${ definitions.join("\n") }
</dl>`;
		
	}

	return `
<article>
${ header }
${ image }
${ facts }
${ rating }
${ pullquote }
</article>
`;

} ).join("\n") }
`;

};