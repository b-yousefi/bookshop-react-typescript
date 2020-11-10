import React, { useEffect } from "react";
import "./App.css";

import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Author from "./models/Author";
import { thunkFetchAuthors } from "./store/author/thunk";
import { AppState } from "./store";

const App: React.FC = () => {
  const authors: readonly Author[] = useSelector(
    (state: AppState) => state.authors.arr,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();

  const fetchedAuthors = React.useCallback(
    () => dispatch(thunkFetchAuthors()),
    [dispatch]
  );

  useEffect(() => {
    fetchedAuthors();
  }, [dispatch, fetchedAuthors]);

  return (
    <div className="App">
      <ul>
        {authors.map((author, indx) => (
          <li key={indx}>{author.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;