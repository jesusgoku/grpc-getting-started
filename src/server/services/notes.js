import grpc from 'grpc';
import Note from '../models/note';

const notesProto = grpc.load(__dirname + '/../../../definitions/notes.proto');

async function listHandler(_, cb) {
    const notes = (await Note.find())
      .map(({ _id: id, title, content }) => ({ id: String(id), title, content }))
    ;

    cb(null, notes);

}

async function insertHandler(call, cb) {
    const note = new Note(call.request);
    await note.save();

    cb(null, { id: String(note._id), title: note.title, content: note.content });
}

async function deleteHandler(call, cb) {
  const _id = call.request.id;

  try {
    const note = await Note.findOne({ _id  });
    if (!note) throw new Error('Not found');

    await Note.deleteOne({ _id });

    cb(null, {});
  } catch(e) {
    cb({
        code: grpc.status.NOT_FOUND,
        details: 'Not found',
    });
  }
}

const service = [notesProto.NoteService.service, {
    list: listHandler,
    insert: insertHandler,
    delete: deleteHandler,
}];

export {
    service as default,
    listHandler,
    insertHandler,
    deleteHandler,
};
