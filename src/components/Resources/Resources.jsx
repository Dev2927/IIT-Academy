import React from "react";
import { useNavigate } from "react-router-dom";
import "./Resources.css";
import { Flask } from "phosphor-react";
import { Atom } from "phosphor-react";
import { ClipboardText } from "phosphor-react";
import { Books } from "phosphor-react";
import { Bandaids } from "phosphor-react";
import { Book } from "phosphor-react";
import { BookOpen } from "phosphor-react";

function Resources() {
  const navigate = useNavigate();

  return (
    <div className="resources-container">
      <div>
        <button onClick={() => navigate("/jeemain")} className="resources-card">
          <Flask size={60} color="#0112f3" weight="duotone" />
          <h1>JEE MAIN PYQ</h1>
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/jeeadv")} className="resources-card">
          <Atom size={52} color="#0112f3" weight="duotone" />
          <h1>JEE ADV PYQ</h1>
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/neet")} className="resources-card">
          <Bandaids size={52} color="#0112f3" weight="duotone" />
          <h1>NEET PYQ</h1>
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/boards")} className="resources-card">
          <ClipboardText size={52} color="#0112f3" weight="duotone" />
          <h1>BOARDS PYQ</h1>
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/kvpy")} className="resources-card">
          <BookOpen size={52} color="#0112f3" weight="duotone" />
          <h1>KVPY PYQ</h1>
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/ncert")} className="resources-card">
          <Book size={52} color="#0112f3" weight="duotone" />
          <h1>NCERT BOOKS</h1>
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/other")} className="resources-card">
          <Books size={52} color="#0112f3" weight="duotone" />
          <h1>OTHER BOOKS</h1>
        </button>
      </div>
    </div>
  );
}

export default Resources;
