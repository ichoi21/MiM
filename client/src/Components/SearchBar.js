import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchBar = (props) => {

  return (
    <Form inline>
      <FormGroup>
        <Label for="ticker" hidden>Ticker</Label>
        <Input type="text" placeholder="AAPL" onChange={props.onChange}/>
      </FormGroup>
      {' '}
      <Button onSubmit={props.onSubmit}>Submit</Button>
    </Form>
  );
}

export default SearchBar;