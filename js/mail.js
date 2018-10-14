function feedback() {
    var params = {
        action: 'addFeedbackMessage',
        name: jQuery('#name').val(),
        email: jQuery('#email').val(),
        message: jQuery('#message').val()
    };
    jQuery.get('/php/api.php', params, function () {
        jQuery('#name').val('');
        jQuery('#email').val('');
        jQuery('#message').val('');
    });
}