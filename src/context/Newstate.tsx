import React, { useState } from "react";
import NewContext from "./Newcontext";
import type { Note, NewContextType } from "../types"; // Correct relative path

const NewState: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState<Note[]>([]);
  const authtoken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3OTNkNTYyZjgyOWFhNTNjOTA2Y2VkIn0sImlhdCI6MTc1Mjc3NjA5MX0.D_jn-ea8vzlPsWhQ7qvTXYrRzqRn40dq5qqszLsjofM"

  const getNotes: NewContextType["getNotes"] = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  const addNote: NewContextType["addNote"] = async (title, description, tag) => {
    await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    await getNotes();
  };

  const deleteNote: NewContextType["deleteNote"] = async (id) => {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
      },
    });
    setNotes(notes.filter((note) => note._id !== id));
  };

  const editNote: NewContextType["editNote"] = async (id, title, description, tag) => {
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      )
    );
  };

  return (
    <NewContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {children}
    </NewContext.Provider>
  );
};

export default NewState;
