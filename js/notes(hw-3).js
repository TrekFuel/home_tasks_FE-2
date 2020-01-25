// eslint-disable-next-line func-names
const NotesList = ((function () {
  const NOTE_TITLE = 'notesList';

  const initNotesList = () => {
    if (localStorage.getItem(NOTE_TITLE)) {
      return JSON.parse(localStorage.getItem(NOTE_TITLE));
    }

    return [];
  };

  let notesList = initNotesList();

  const saveData = (data) => {
    notesList = [...data];
    localStorage.setItem(NOTE_TITLE, JSON.stringify(notesList));
  };

  const addNote = (note) => {
    if (notesList.includes(note)) {
      return {
        done: false,
        error: 'The note is in the notes list already',
      };
    }

    saveData([...notesList, note]);
    return {
      done: true,
    };
  };

  const removeNote = (note) => {
    const filteredNotesList = notesList.filter((item) => item !== note);
    if (filteredNotesList.length === notesList.length) {
      return {
        done: false,
        error: 'Note doesn\'t exist',
      };
    }

    saveData(filteredNotesList);
    return { done: true };
  };

  return {
    getNotesList() {
      return notesList;
    },
    addItem(item) {
      return addNote(item);
    },
    removeItem(item) {
      return removeNote(item);
    },
  };
})());

const STYLES = {
  show: 'd-block',
};

const UI = {
  noteValue: document.querySelector('#note-value'),
  addNote: document.querySelector('#add-note'),
  removeNote: document.querySelector('#remove-note'),
  errorMessage: document.querySelector('#error-message'),
  list: document.querySelector('#list'),

  renderNotesList() {
    this.clearNotesList();
    NotesList.getNotesList().forEach((item) => {
      const li = document.createElement('li');
      li.innerText = item;
      this.list.append(li);
    });
  },

  clearNotesList() {
    this.list.innerText = '';
  },

  handleNotesListResponse(result) {
    if (result.done) {
      this.noteValue.value = '';
      this.errorMessage.classList.remove(STYLES.show);
      this.renderNotesList();
    } else {
      this.errorMessage.innerText = result.error;
      this.errorMessage.classList.add(STYLES.show);
    }
  },
};

UI.addNote.addEventListener('click', (event) => {
  event.preventDefault();
  const result = NotesList.addItem(UI.noteValue.value);
  UI.handleNotesListResponse(result);
});

UI.removeNote.addEventListener('click', (event) => {
  event.preventDefault();
  const result = NotesList.removeItem(UI.noteValue.value);
  UI.handleNotesListResponse(result);
});

UI.renderNotesList();
