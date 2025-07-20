export  interface Note {
  _id: string;
  title: string;
  description: string;
  tag: string;
  date?: string;
}

export interface NewContextType {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  getNotes: () => Promise<void>;
  addNote: (title: string, description: string, tag: string) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
  editNote: (
    id: string,
    title: string,
    description: string,
    tag: string
  ) => Promise<void>;
}
