import client from '.';

client.list({}, (err, notes) => {
    if (err) return console.log(err);

    console.log('Successfully fetch list notes');
    console.log(notes);
});