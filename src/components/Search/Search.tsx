import SearchInput from '../SearchInput/SearchInput';
import classes from './Search.module.css';

export default function Search() {
  return (
    <div className={classes.search}>
      <SearchInput />
    </div>
  );
}
