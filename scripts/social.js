YUI().use('node', 'jsonp', 'jsonp-url', function (Y) {

    function handleJSONP(response) {
        var posts = response.data.data;
        var html='<div id="fb-post-list" class="grid">';

        for (var p=0; p < posts.length; p++) {
            var post = posts[p];
            html +='<div class="col-1-3"><article class="fb-post-item item"><p>"' + post.message + '"</p> <hr />';
            html +='<p class="username"><i></i><span>' + post.from.name + '</span></p>';
            html +='</article></div>';
        }
        html += '</div>';

        Y.one("#fb-post-outer").setHTML(html);
    }

    Y.jsonp('//api.narrative.is/facebook/graphGet?path=/southernrites/tagged/&params={%22fields%22:%20%22from,message%22,%20%22limit%22:%203}', handleJSONP);

});


