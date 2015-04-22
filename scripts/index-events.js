$( document ).ready( function() {

    /* 
     * Display only City, State
     *
     * SquareSpace only allows developers to render the combined City, State, and Zip code (the addressLine2 property of the location)
     * This code assumes that there are commas separating the city, state, and zip code, and attempts to display only the first two in the list
     *
     */

    var cityStateZipList = $( '.city-state-zip' );
    cityStateZipList.each( function() {
        var cszArray = $( this ).text().split(",");
        var cityState = '';
        if ( cszArray.length > 1 ) {
            // Typical operation - Result: "New York, NY"
            cityState = cszArray[ 0 ] + ', ' + cszArray[ 1 ];
        } 
        else if ( cszArray.length > 0 ) {
            // Rare case, no commas found - Result: "New York"
            cityState = cszArray[ 0 ];
        }
        $( this ).text( cityState );
    });

});
