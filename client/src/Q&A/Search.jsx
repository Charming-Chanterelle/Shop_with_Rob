import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #525252;
  padding: 1em;
  width: 500px;
  color: #525252;
  border-radius: 5px;
`;
const FormStyle = styled.form`
width: 100%;
`;

const Search = ({ searchTerm, questions }) => {
  const { length } = questions;

  return (
    <FormStyle>
      <div>
        {length ? (
          <form>
            <Input placeholder="Have a question? Search for answers…" onChange={searchTerm} />
          </form>
        ) : null}
      </div>
    </FormStyle>
  );
};

export default Search;
