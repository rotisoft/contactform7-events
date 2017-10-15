document.addEventListener( 'wpcf7mailsent', function( event ) {
    myFunctionsikeres();
}, false );
document.addEventListener( 'wpcf7invalid', function( event ) {
    myFunctionhelytelen();
}, false );
document.addEventListener( 'wpcf7mailfailed', function( event ) {
    myFunctionsikertelen();
}, false );

function myFunctionsikeres() {
    $("#cfsikeres").click()
}
function myFunctionhelytelen() {
    $("#cfhelytelen").click()
}
function myFunctionsikertelen() {
    $("#cfsikertelen").click()
}
