import { makeStyles } from '@mui/styles';

const Style = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    h1: {
        margin: 0
    },
    avatar: {
        backgroundColor: '#135ca3 !important'
    },
    bgDark: {
        backgroundColor: '#212121 !important',
        color: '#ffffff !important'
    },
    bgLight: {
        backgroundColor: '#ffffff !important',
        color: '#212121 !important'
    }
}));

export default Style;