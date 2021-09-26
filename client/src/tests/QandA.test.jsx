import React from 'react';

import {
  render, screen, cleanup, fireEvent, waitFor, afterEach,
} from '@testing-library/react';
import axios from 'axios';
import Questions from '../Q&A/App.jsx';
import 'regenerator-runtime/runtime';

afterEach(cleanup);

describe('Q and A', () => {
  it('should have "Questions" header', () => {
    const { getByText } = render(<Questions />);
    expect(getByText('Questions and Answers')).toBeDefined();
  });
  it('should include an individual container for each Question', () => {
    const { getByTestId } = render(<Questions />);
    expect(getByTestId('QuestionItem')).toBeDefined();
  });
  it('should retrieve questions, async', async () => {

  });
});
