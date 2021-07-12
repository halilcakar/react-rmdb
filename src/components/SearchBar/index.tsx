import React, { useEffect, useState, useRef } from "react";

// Styles
import { Content, Wrapper } from "./SearchBar.styles";

// Image
import searchIcon from "../../images/search-icon.svg";

type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const [state, setState] = useState<string>("");
  const initial = useRef<boolean>(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="search"
          placeholder="Search movie"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
