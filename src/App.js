import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import { Flex, Box, Input, Button } from "@chakra-ui/react";
import styled, { css } from "styled-components";

const elements = [
  {
    id: "Arsenal",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t3.svg",
  },
  {
    id: "Aston villa",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t7.svg",
  },
  {
    id: "Bournemouth",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t91.svg",
  },
  {
    id: "Brentford",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t94.svg",
  },
  {
    id: "Brighton And Hove Albion",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t36.svg",
  },
  {
    id: "Burnley",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t90.svg",
  },
  {
    id: "Chelsea",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t8.svg",
  },
  {
    id: "Crystal palace",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t31.svg",
  },
  {
    id: "Everton",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t11.svg",
  },
  {
    id: "Fulham",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t54.svg",
  },
  {
    id: "Liverpool",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t14.svg",
  },
  {
    id: "Luton Town",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t102.svg",
  },
  {
    id: "Manchester City",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t43.svg",
  },
  {
    id: "Manchester United",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t1.png",
  },
  {
    id: "Newcastle United",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t4.png",
  },
  {
    id: "Nottingham Forest",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t17.svg",
  },
  {
    id: "Sheffield United",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t49.svg",
  },
  {
    id: "Tottenham Hotspur",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t6.svg",
  },
  {
    id: "West Ham United",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t21.svg",
  },
  {
    id: "Wolverhampton Wonderers",
    content:
      "https://resources.premierleague.com/premierleague/badges/rb/t39.svg",
  },
];

function DragAndDropList({ items, setItems }) {
  const onDragEnd = (result) => {
    const newItems = Array.from(items);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <ListItem
                    provided={provided}
                    snapshot={snapshot}
                    item={item}
                    index={index}
                  />
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default function App() {
  const [items, setItems] = useState(elements);
  const [name, setName] = useState("");

  const Save = () => {
    if (!name) {
      alert("Please enter a name");
    } else {
      alert(items[0].id);
    }
  };

  return (
    <Box className="App" p={4}>
      <Flex
        align="center"
        pos="relative"
        justify="center"
        boxSize="full"
        position="static"
        p={4}
      >
        <Input
          value={name}
          onChange={() => setName()}
          placeholder="Enter your name"
        ></Input>

        <Button onClick={() => Save()} ml={4} colorScheme="blue">
          Save Prediction
        </Button>
      </Flex>
      <DragAndDropList items={items} setItems={setItems} />
    </Box>
  );
}
