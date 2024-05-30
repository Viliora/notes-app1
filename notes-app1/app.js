class NoteItem extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title');
        const body = this.getAttribute('body');
        const createdAt = this.getAttribute('createdAt');
   
        this.innerHTML = `
            <div class="note-item">
                <h3>${title}</h3>
                <p>${body}</p>
                <small>${createdAt}</small>
            </div>
        `;
    }
  }
   
  customElements.define('note-item', NoteItem);
   
  class NoteList extends HTMLElement {
    connectedCallback() {
        const notesData = JSON.parse(this.getAttribute('notes-data') || '[]'); // Menggunakan '[]' sebagai nilai default jika tidak ada data
   
        const noteList = document.createElement('div');
        noteList.setAttribute('id', 'noteList');
        noteList.classList.add('note-list');
   
        notesData.forEach(note => {
            const noteItem = document.createElement('note-item');
            noteItem.setAttribute('title', note.title);
            noteItem.setAttribute('body', note.body);
            noteItem.setAttribute('createdAt', note.createdAt);
            noteList.appendChild(noteItem);
        });
   
        this.appendChild(noteList);
    }
  }
   
  customElements.define('note-list', NoteList);
   
  class NoteForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="noteForm">
                <input type="text" id="noteTitle" placeholder="Enter note title" required>
                <textarea id="noteBody" placeholder="Enter note body" required></textarea>
                <button id="addNoteBtn">Add Note</button>
            </div>
        `;
   
        this.querySelector('#addNoteBtn').addEventListener('click', () => {
            this.addNote();
        });
    }
   
    addNote() {
        const title = this.querySelector('#noteTitle').value;
        const body = this.querySelector('#noteBody').value;
   
        if (title && body) {
            const newNote = {
                id: 'notes-' + Math.random().toString(36).substr(2, 10),
                title: title,
                body: body,
                createdAt: new Date().toISOString(),
                archived: false,
            };
            
            const noteList = document.querySelector('note-list');
            const notesData = JSON.parse(noteList.getAttribute('notes-data') || '[]');
            notesData.push(newNote);
            noteList.setAttribute('notes-data', JSON.stringify(notesData));
            noteList.connectedCallback(); // Memicu ulang callback untuk merender ulang daftar catatan
   
            this.querySelector('#noteTitle').value = '';
            this.querySelector('#noteBody').value = '';
        } else {
            alert('Please enter both title and body for the note.');
        }
    }
  }
   
  customElements.define('note-form', NoteForm);
   
  const notesData = [
    {
      id: 'notes-jT-jjsyz61J8XKiI',
      title: 'Welcome to Notes, Dimas!',
      body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
      createdAt: '2022-07-28T10:03:12.594Z',
      archived: false,
    },
    {
      id: 'notes-aB-cdefg12345',
      title: 'Meeting Agenda',
      body: 'Discuss project updates and assign tasks for the upcoming week.',
      createdAt: '2022-08-05T15:30:00.000Z',
      archived: false,
    },
    {
      id: 'notes-XyZ-789012345',
      title: 'Shopping List',
      body: 'Milk, eggs, bread, fruits, and vegetables.',
      createdAt: '2022-08-10T08:45:23.120Z',
      archived: false,
    },
    {
      id: 'notes-1a-2b3c4d5e6f',
      title: 'Personal Goals',
      body: 'Read two books per month, exercise three times a week, learn a new language.',
      createdAt: '2022-08-15T18:12:55.789Z',
      archived: false,
    },
    {
      id: 'notes-LMN-456789',
      title: 'Recipe: Spaghetti Bolognese',
      body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
      createdAt: '2022-08-20T12:30:40.200Z',
      archived: false,
    },
    {
      id: 'notes-QwErTyUiOp',
      title: 'Workout Routine',
      body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
      createdAt: '2022-08-25T09:15:17.890Z',
      archived: false,
    },
    {
      id: 'notes-abcdef-987654',
      title: 'Book Recommendations',
      body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
      createdAt: '2022-09-01T14:20:05.321Z',
      archived: false,
    },
    {
      id: 'notes-zyxwv-54321',
      title: 'Daily Reflections',
      body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
      createdAt: '2022-09-07T20:40:30.150Z',
      archived: false,
    },
    {
      id: 'notes-poiuyt-987654',
      title: 'Travel Bucket List',
      body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
      createdAt: '2022-09-15T11:55:44.678Z',
      archived: false,
    },
    {
      id: 'notes-asdfgh-123456',
      title: 'Coding Projects',
      body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
      createdAt: '2022-09-20T17:10:12.987Z',
      archived: false,
    },
    {
      id: 'notes-5678-abcd-efgh',
      title: 'Project Deadline',
      body: 'Complete project tasks by the deadline on October 1st.',
      createdAt: '2022-09-28T14:00:00.000Z',
      archived: false,
    },
    {
      id: 'notes-9876-wxyz-1234',
      title: 'Health Checkup',
      body: 'Schedule a routine health checkup with the doctor.',
      createdAt: '2022-10-05T09:30:45.600Z',
      archived: false,
    },
    {
      id: 'notes-qwerty-8765-4321',
      title: 'Financial Goals',
      body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
      createdAt: '2022-10-12T12:15:30.890Z',
      archived: false,
    },
    {
      id: 'notes-98765-54321-12345',
      title: 'Holiday Plans',
      body: 'Research and plan for the upcoming holiday destination.',
      createdAt: '2022-10-20T16:45:00.000Z',
      archived: false,
    },
    {
      id: 'notes-1234-abcd-5678',
      title: 'Language Learning',
      body: 'Practice Spanish vocabulary for 30 minutes every day.',
      createdAt: '2022-10-28T08:00:20.120Z',
      archived: false,
    },
  ];
   
  console.log(notesData);
   
  document.addEventListener('DOMContentLoaded', () => {
    const storedNotes = localStorage.getItem('notesData');
    if (storedNotes) {
        renderNotes(JSON.parse(storedNotes));
    } else {
        renderNotes(notesData);
    }
  });
   
  function saveNotesToLocalStorage(notes) {
    localStorage.setItem('notesData', JSON.stringify(notes));
  }
   
  function renderNotes(notes) {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';
   
    notes.forEach(note => {
        const noteItem = document.createElement('note-item');
        noteItem.setAttribute('title', note.title);
        noteItem.setAttribute('body', note.body);
        noteItem.setAttribute('createdAt', note.createdAt);
        noteList.appendChild(noteItem);
    });
   
    saveNotesToLocalStorage(notes);
  }
   
  function addNote() {
    const title = document.getElementById('noteTitle').value;
    const body = document.getElementById('noteBody').value;
   
    if (title && body) {
        const newNote = {
            id: 'notes-' + Math.random().toString(36).substr(2, 10),
            title: title,
            body: body,
            createdAt: new Date().toISOString(),
            archived: false,
        };
        
        notesData.push(newNote);
        renderNotes(notesData);
   
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteBody').value = '';
    } else {
        alert('Please enter both title and body for the note.');
    }
  }