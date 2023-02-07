import { useEffect, useState, ChangeEvent } from "react";
import SearchBox from "./components/search-box/search-box.functional-component";
import CardList from "./components/card-list/card-list.functional-component";
import { getCatData } from './utils/data.utils';
import "./App.css";

export type Cats = {
  id: string;
  name: string;
  email: string;
};

const AppFunction = () => {
  const [cats, setCats]= useState<Cats[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredCats, setFilteredCats] = useState(cats);

  useEffect(() => {
    const fetchCats = async () => {
      const data = await getCatData<Cats[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setCats(data);
    };
    fetchCats();
  }, []);

  useEffect(() => {
    const newFilteredCharacters = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredCats(newFilteredCharacters);
  }, [cats, searchField]);

  const onSearchChange  = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className="App">
      <h1>Characters From Cat Kingdom</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search The Cat Characters"
        className="cats-search-box"
      />
      <CardList cats={filteredCats} />
    </div>
  );
};

export default AppFunction;
