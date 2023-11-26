import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  EditButton,
} from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />
    </Datagrid>
  </List>
);
