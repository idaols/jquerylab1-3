$('p:eq(1)').attr('id', 'toinen');
$('#fp').remove();
$('#fdiv').css(
    {
        backgroundColor: 'grey',
        color: 'white'
    }
);

/*
function sayHello() {
    $('#toinen').after('<p>Hello user</p>');
}

$('#nappi').click(sayHello);
*/

//anonyymi funktio, toinen tapa toteuttaa ylempänä kommentoitu koodi
$('#nappi').click(function() {
    $('#toinen').after('<p>Hello user</p>');
});

//piilotetaan elementti
$('#4p').hide();

//kun hiirellä mennään divin päälle, teksti tulee näkyviin
$('#sdiv').hover(
    function() {
        $('#4p').text('About to select a link ...').show();
    },
    function() {
        $('#4p').hide();
    }
)

