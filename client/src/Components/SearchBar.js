import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchBar = (props) => {

  return (
<FormGroup>
    <Input onChange={props.onChange}/>
      <Button onClick={props.onClick}>Submit</Button>
      </FormGroup> 
  );
}

export default SearchBar;