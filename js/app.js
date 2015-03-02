var bestPictures = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'data/ever.json',
  remote: 'data/ever.json'
});
 
bestPictures.initialize();

var $input = $('.typeahead');
$input.typeahead(null, {
    source: bestPictures.ttAdapter(),
    name: 'best-pictures',
    displayKey: 'value',
    autoSelect: true,
    templates: {
        empty: [
            '<div class="empty-message">', 
            'unable to find any Best Picture winners that match the current query', 
            '</div>'
        ].join('\n'),
        suggestion: function(item){
            return '<div class="item">' + item.trackName + '</div>'
            + '<div class="item-type">'+ item.productivity + '</div>';
        }
    }
});
