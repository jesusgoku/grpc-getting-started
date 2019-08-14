import client from '.';

const newNote = {
    title: 'New note',
    content: 'New note content',
};

client.insert(newNote, (err, note) => {
    if (err) return console.log(err);

    console.log('New note created successfully');
    console.log({ note });
});