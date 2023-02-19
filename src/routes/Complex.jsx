import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Container } from "react-bootstrap";
import Single from "forms/complex/Single.jsx";
import zcomplex from "forms/complex/zcomplex";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { LangKontext } from "komponenty/Kontext";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import zsize from "scripts/zsize.js";

function Complex() {
  const text = useContext(LangKontext);
  const TXT = text[0];
  const isSmall = zsize((state) => state.isSmall);
  const maxNumberofCosts = 5;
  const [wskazniki, setWskazniki] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [visAdd, setVisAdd] = useState(true);
  const setLastFormNumber = zcomplex((state) => state.setLastFormNumber);

  useEffect(() => {
    wskazniki.length === 0 && handleAdd();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setLastFormNumber(wskazniki.slice(-1)[0]);
    wskazniki.length >= maxNumberofCosts ? setVisAdd(false) : setVisAdd(true);
    // eslint-disable-next-line
  }, [wskazniki]);

  const handleAdd = () => {
    setWskazniki((prevs) => [...prevs, nextNumber]);
    setNextNumber(nextNumber + 1);
  };

  const handleRemove = (current) => {
    const updatedComponents = wskazniki.filter((item) => item !== current);
    setWskazniki(updatedComponents);
  };

  const handleSubmit = () => {
    confirmAlert({
      title: TXT.json_api,
      message: TXT.in_real,
      buttons: [
        {
          label: TXT.not_db,
        },
      ],
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setWskazniki((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <Container fluid className="container_main">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={wskazniki} strategy={verticalListSortingStrategy}>
          {wskazniki.map((current, index) => (
            <Single key={current} numer={current} index={index} handleRemove={handleRemove} />
          ))}
        </SortableContext>
      </DndContext>
      <div className="py-2 mt-4">
        {visAdd && (
          <Button onClick={handleAdd} variant="outline-primary" size="sm" className="button_bottom_nav short_buttons mx-4">
            <FontAwesomeIcon icon={faPlus} className="awesome" /> {isSmall ? TXT.add_next_sh : TXT.add_next}
          </Button>
        )}

        {wskazniki.length > 0 && (
          <Button onClick={handleSubmit} variant="outline-primary" size="sm" className="button_bottom_nav short_buttons mx-4">
            {" "}
            <FontAwesomeIcon icon={faPaperPlane} className="awesome" />
            {isSmall ? TXT.send_all_sh : TXT.send_all}
          </Button>
        )}
      </div>
    </Container>
  );
}

export default Complex;
