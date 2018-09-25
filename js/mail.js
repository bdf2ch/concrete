function feedback() {
    var params = {
        name: jQuery('#name').val(),
        email: jQuery('#email').val(),
        message: jQuery('#message').val()
    };
    jQuery.post('/php/mail.php', params, function () {
        console.log('mail.php called', params);
        jQuery('#name').val('');
        jQuery('#email').val('');
        jQuery('#message').val('');

    });
}