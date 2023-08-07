import { Draggable } from "react-beautiful-dnd";
import { LoremIpsum } from "lorem-ipsum";
import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Heading,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;

const lorem = new LoremIpsum();

const ListItem = ({ item, provided, snapshot, index }) => {
  const randomHeader = useMemo(() => lorem.generateWords(5), []);

  return (
    <DragItem
      ref={provided.innerRef}
      snapshot={snapshot}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Stack h={6} direction={"row"} spacing={4} align={"center"}>
        <Box w={12} ml={10}>
          <Text fontWeight={200}>{index + 1}</Text>
        </Box>
        <Center>
          <Avatar src={item.content} h={6} w={6} />
        </Center>

        <Text fontWeight={600}>{item.id}</Text>
      </Stack>
    </DragItem>
  );
};

export default ListItem;
