$(document).ready(function() {
    
    
    // #1 - change background color
    $('#bgColor').css( "background-color", "green" );
    
    // #2 
    $('#cloneDiv').clone().appendTo('#cloneContainer');

    // #3, 4
    $('.buttonlist .btn:even').addClass('btn-warning');
    $('.buttonlist .btn:eq(3)').addClass('btn-info');
    
    // #5
    $('input[type="password"]').prop('disabled', 'disabled');
    
    // #6
    $('#inputName').val('TJ Nicolaides');
    
    // #7
    $('input[type="checkbox"]').prop('checked', true);
    
    // #8
    $('option:contains("Orange")').prop('selected', true);
    
    // #9
    $('#hidee').hide();
    
    // #10
    $('#slideme').slideUp();
    
    // #11
    $('#fademe').fadeIn('slow');
    
    // #12
    $('#removeme').remove();
    
    // #13
    $('#emptyme').html('');
    
    // #14
    $('.highlight-divs div').not('.highlighted').css('opacity', .5);
    
    // #15
    var offset = $('#findme').offset();
    var offset_txt = 'Left: ' + offset.left + ' / Top: ' + offset.top;
    $('#findme').html(offset_txt);



});