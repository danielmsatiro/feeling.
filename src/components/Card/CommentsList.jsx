import { Flex, List, ListItem } from "@chakra-ui/react";
import { CommentCard } from "./CommentCard";

export const CommentsList = ({ array }) => {
  return (
    <Flex pb={["50px"]}>
      <List>
        {array.map((item) => {
          return (
            <ListItem key={item?.id}>
              <CommentCard comment={item?.commentText} userId={item?.userId} />
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};
