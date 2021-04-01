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
	    pullQuote = '';

	header = `
<p class="month"><time datetime="${ piquette.month }">${ prettyDate }</time></p>
<h2>
	<small class="winery">${ piquette.winery }</small>
	<span class="name">${ piquette.name }</span>
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
	<div class="fact">
		<dt>${ k }</dt>
		<dd>${ piquette.facts[ k ] }</dd>
	</div>
`;
		} );
		
		facts = `<dl class="facts">
${ definitions.join("\n") }
</dl>`;
		
	}
	
	if ( piquette.rating && piquette.rating >= 0 && piquette.rating <= 5 ) {
		const filled = ( piquette.rating > 0
		                 ? "<span class='filled'>★</span>".repeat( piquette.rating )
		                 : '' ),
		      empty = ( piquette.rating < 5
		                ? "<span class='empty'>☆</span>".repeat( 5 - piquette.rating )
		                : '' ),
		      stars = `<span class="stars">${ filled }${ empty }</span>`;
		      description = `${ piquette.rating } out of 5 stars`;
		rating = `<div class="rating" aria-label="${ description }">${ stars }</div>`;
	}
	
	if ( piquette.pull_quote && piquette.pull_quote != '' ) {
		pullQuote = `<blockquote class="pullQuote">${ piquette.pull_quote }</blockquote>`;
	}

	return `
<article
	style="--bg: ${ piquette.background_color };">
${ header }
${ image }
${ facts }
${ rating }
${ pullQuote }
</article>
`;

} ).join("\n") }
`;

};