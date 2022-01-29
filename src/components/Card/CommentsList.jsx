import { Flex, List, ListItem } from "@chakra-ui/react";
import { CommentCard } from "./CommentCard";

export const CommentsList = ({ array }) => {
  return (
    <Flex>
      <List>
        {array.map((item) => {
          return (
            <ListItem key={item.id}>
              <CommentCard comment={item.text} autor={item.author} />
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};
