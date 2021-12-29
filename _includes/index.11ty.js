exports.data = {
	"layout": "base"
};

exports.render = function(data) {
	return `

<h1>Piquette of the Month Club</h1>
<main>
${ data.content }
</main>
<footer>
<p>For Britt, with ❤️</p>
</footer>

<script>
const meta = document.createElement('meta');
meta.setAttribute( 'name', 'theme-color' );
const htmlBackgroundColor = getComputedStyle( document.querySelector( 'html' ) ).backgroundColor;
const footerColor = getComputedStyle( document.querySelector( 'html' ) ).backgroundColor;
meta.setAttribute( 'content', htmlBackgroundColor );
document.querySelector('head').appendChild( meta );
const articles = document.querySelectorAll('article');
const io = new IntersectionObserver( (entries) => {

    entries.forEach( entry => {
        if ( entry.isIntersecting && entry.intersectionRect.y <= 0 ) {
            console.log( entry, "entering from top" );
            meta.setAttribute( 'content', getComputedStyle( entry.target ).backgroundColor );
        }
        if ( !entry.isIntersecting && entry.boundingClientRect.bottom <= 0 ) {
            console.log( entry, "just left top" );
            let color = footerColor;
            if ( entry.target.nextElementSibling && entry.target.nextElementSibling.nodeName === "ARTICLE" ) {
                color = getComputedStyle( entry.target.nextElementSibling ).backgroundColor;
            }
            meta.setAttribute( 'content', color );
        }
    } );

} );
articles.forEach( a => {
    io.observe( a );
} )
const header = document.querySelector('h1');
const header_io = new IntersectionObserver( (entries) => {

    entries.forEach( entry => {
        if ( entry.isIntersecting && entry.intersectionRect.y <= 0 ) {
            console.log( entry, "header entering from top" );
            meta.setAttribute( 'content', htmlBackgroundColor );
        }
        if ( !entry.isIntersecting && entry.boundingClientRect.bottom <= 0 ) {
            console.log( entry, "header just left top" );
            meta.setAttribute( 'content', getComputedStyle( articles[0] ).backgroundColor );
        }
    } );

} );
header_io.observe( header );
</script>

`;
};
