import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNote] = useState([]);

  function fetchnotes() {
    axios.get("https://backend-wplb.onrender.com/notes").then(res => {
      setNote(res.data.note);
    });
  }

  useEffect(() => {
    fetchnotes();
  }, []);

  function formeventhandle(e) {
    e.preventDefault();
    const { title, discription } = e.target.elements;
    axios
      .post("https://backend-wplb.onrender.com/notes", {
        title: title.value,
        discription: discription.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchnotes();
      });
  }

  function deleteHandle(Notid) {
    axios.delete("https://backend-wplb.onrender.com/notes/" + Notid).then((res) => {
      console.log(res.data);
      fetchnotes();
    });
  }

  return (
    <>
      <form
        className="note-field"
        onSubmit={(e) => {
          formeventhandle(e);
        }}
      >
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="discription" placeholder="Discription" />
        <button>Submit</button>
      </form>

      <div className="notes">
        {notes.map((note,idx) => {
          return (
            <div key={idx} className="note">
              <h1>{note.title}</h1>
              <p>{note.discription}</p>
              <button
                onClick={() => {
                  deleteHandle(note._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
