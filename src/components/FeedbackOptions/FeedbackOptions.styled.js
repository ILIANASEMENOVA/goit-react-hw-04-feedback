import { styled } from 'styled-components';

const FeedbackOptionsStyle = styled.div`
  ul {
    padding-left: 0;
    list-style: none;
    display: flex;
    column-gap: 20px;

    align-items: center;
    justify-content: center;
  }

  button {
    width: 100px;
    font-size: 20px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 1px 7px rgba(255, 255, 255, 0.3);
  }
  button:hover,
  button:focus {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

export default FeedbackOptionsStyle;
