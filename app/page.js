"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(maintask);
  };

  const deleteHandler = (i) => {
    let copytask = [...maintask];
    copytask.splice(i, 1);
    setmaintask(copytask);
  };

  let rendertask = <h2 className="text-black">No task Available</h2>;

  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex item-center justify-between mb-8">
          <div className="flex item-center justify-between w-2/3">
            <h5 className="text-black text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-black text-xl font-semibold">{t.desc}</h6>
          </div>

          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-white text-black p-5 text-5xl font-bold text-center">
        rvc's todo list
      </h1>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          className="text-black text-2xl border-zinc-800 border-4 m-8 px- py-2"
          placeholder="Enter task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>

        <input
          type="text"
          className="text-black text-2xl border-zinc-800 border-4 m-8 px- py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        ></input>

        <button className="bg-white px-4 py-3 text-2xl font-bold rounded m-5 text-black">
          Add Task
        </button>
      </form>

      <hr></hr>

      <div className="p-8 bg-slate-200">
        <ul>{rendertask}</ul>
      </div>
    </>
  );
};

export default page;
