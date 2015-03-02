var bestPictures = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: 'data/ever.json?%QUERY'
});

asdf = function(query, cb){
    var query = $('#search_form').serialize();
    $.get('data/ever.json?'+query, function(data){
        cb(data);
    }, 'json')
}

//bestPictures.ttAdapter()

bestPictures.initialize();

var $input = $('.typeahead');
$input.typeahead(null, {
    source: asdf,
    name: 'best-pictures',
    displayKey: 'value',
    autoSelect: true,
    minLength: 3,
    highlight: true,
    templates: {
        empty: [
            '<div class="empty-message text-center">', 
            'Sorry. We can\'t find any results.', 
            '</div>'
        ].join('\n'),
        suggestion: function(item) {
            return '<div class="clearfix">' 
            + '<img class="item-img" src="' + item.artworkUrl60 + '"/>' 
            + '<div class="item">' + item.trackName + '</div>' 
            + '<div class="item-type text-sm text-muted"><small>' + item.genre + '</small></div>' 
            + '</div>';
        }
    }
});


$('.country-item').on('click', function() {
    $(this).parents('.dropdown').find('button>img').attr('src', $(this).find('img').attr('src'))
    $('input[name="countryCode"]').val($(this).attr('data-code'))
})

$('[data-toggle="tooltip"]').tooltip();

$('#search_form').submit(function(e) {
    e.preventDefault();
    console.log($(this).serialize());
});

$row = $('.periodic-row');

for(var i = 0; i< 160; i++){
    $row.prepend('<div class="cell" style=""> <div class="element" style="background-position:'+(128*i)+'px 0px"></div> </div>' )
}
