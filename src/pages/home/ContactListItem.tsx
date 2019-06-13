import React from 'react';
import OpenIcon from '@material-ui/icons/OpenInBrowserRounded';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from "react-router-dom";

const ContactListItem = (props: any) => {
    return (
        <ListItem>
            <ListItemText
                primary={props.contact.name}
            />
            <ListItemSecondaryAction>
                <Link to={`/contact/${props.contact.id}`}>
                    <IconButton aria-label="View">
                        <OpenIcon />
                    </IconButton>
                </Link>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default ContactListItem;