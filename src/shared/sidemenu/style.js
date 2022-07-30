import { makeStyles } from '@mui/styles';

const Style = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    highlight: {
        backgroundColor: 'red',
    }
}));

export default Style;