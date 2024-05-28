import Search from '../Search/Search';
import Title from '../Title/Title';
import FilterGenre from '../Filters/FilterGenre/FilterGenre';
import FilterYear from '../Filters/FilterYear/FilterYear';
import classes from './Content.module.css';

export default function Content() {
  return (
    <div className={classes.content}>
      <div className={classes.content_body}>
        <div className={classes.content_head}>
          <Title />
          <Search />
        </div>
        <div className={classes.content_filters}>
          filters
          <FilterGenre />
          <FilterYear />
        </div>
        <div className={classes.content_filmsList}>filmlist</div>
      </div>
    </div>
  );
}
