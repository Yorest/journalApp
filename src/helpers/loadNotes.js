import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();

  const notes = [];

  notesSnap.forEach((snapchild) => {
    notes.push({
      id: snapchild.id,
      ...snapchild.data(),
    });
  });

  return notes;
};
