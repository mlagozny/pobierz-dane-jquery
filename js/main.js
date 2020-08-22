$(document).ready(function(){
        // $('#get-data').click(function(){
        //     $.get('https://akademia108.pl/api/ajax/get-post.php')
        //         .done(function(data){
        //             console.log(data)
        //             let id = $('<p></p>').text(`Post ID: ${data.id}`);
        //             let userId = $('<p></p>').text(`User ID: ${data.userId}`);
        //             let title = $('<p></p>').text(`Title: ${data.title}`);
        //             let body = $('<p></p>').text(`Body: ${data.body}`);
        //             let hr = $('<hr />')

        //             $('body').append(id);
        //             $('body').append(userId);
        //             $('body').append(title);
        //             $('body').append(body);
        //             $('body').append(hr);
        //         })
        //         .fail(function(error){
        //             console.error(error)
        //         });
        // });

        // Pobieranie za pomocą getJSON
        $('#get-data').click(function(){
            $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
                .done(function(data){
                    console.log(data)
                    let id = $('<p></p>').text(`Post ID: ${data.id}`);
                    let userId = $('<p></p>').text(`User ID: ${data.userId}`);
                    let title = $('<p></p>').text(`Title: ${data.title}`);
                    let body = $('<p></p>').text(`Body: ${data.body}`);
                    let hr = $('<hr />')

                    $('body').append(id);
                    $('body').append(userId);
                    $('body').append(title);
                    $('body').append(body);
                    $('body').append(hr);
                })
                .fail(function(error){
                    console.error(error)
                });
        });
       
       
    });