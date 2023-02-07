// import { ChangeEventHandler } from "react";
import { ChangeEvent } from "react";
import "./search-box.styles.css";

type searchBoxProps = {
  className: string;
  placeholder: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: searchBoxProps) => {
  return (
    <div> 
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
