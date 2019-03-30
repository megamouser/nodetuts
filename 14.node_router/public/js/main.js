$(() => {
    $('#form').submit((e) => {
        //e.preventDefault();
        console.log('submitted');
        let data = JSON.stringify($('#form').serializeArray());
        console.log(data);
    });
});

