
import { Grid } from '@mui/material';

//components
import Categories from './Categories';
import Posts from './post/Posts';

const Movies = () => {

    return (
            <Grid >
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={10} sm={10} md={10} lg={10}>
                    <Posts />
                </Grid>
            </Grid>
    )
}

export default Movies;