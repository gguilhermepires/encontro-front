import { UserSnippet } from './user';

export type Note = {
  id: string;
  programmeId: string;
  studentId: string;
  noteType: 'PROGRAMME' | 'STUDENT' | 'LOG';
  comment: string;
  editor: UserSnippet;
  createdAt: string;
  deletedAt: string | null;
};

export type NoteList = {
  list: Note[];
  total: number;
  skip: number;
  take: number;
};
