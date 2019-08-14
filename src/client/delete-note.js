import client from '.';

client.delete({ id: '5d5484491d7b3f7a66760de5' }, (err, _) => {
    if (err) return console.log(err);

    console.log('Note has been successfully deleted');
});
