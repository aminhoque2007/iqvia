import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});

const ContactCard = (props: any) => {
    const classes = useStyles();
    const { email, id, name } = props.contact;
    return (
        <Card raised={true} className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {email}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={props.toggleModal}
                >
                    Edit
                </Button>
                <Button
                    onClick={() => props.handleDelete(id)}
                    size="small"
                    variant="contained"
                    color="secondary"
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default ContactCard;
