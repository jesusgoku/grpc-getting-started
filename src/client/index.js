import grpc from 'grpc';
import config from '../config';

const PORT = config.app.port;
const PROTO_PATH = __dirname + '/../../definitions/notes.proto';
const NoteService = grpc.load(PROTO_PATH).NoteService;
const client = new NoteService(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure());

export default client;