import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ContactListItem from './ContactListItem';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
        margin: '0 auto',
    },
}));

const ContactList = (props: any) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container style={{ marginLeft: '150px', marginTop: '36px' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">All Contacts</Typography>
                    <List dense={true}>
                        {props.contacts &&
                        props.contacts.length > 0 &&
                        props.contacts.map(
                            (contact: any, index: number) => (
                                <ContactListItem
                                    contact={contact}
                                    key={`contact-${index}`}
                                />
                            )
                        )}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactList;
