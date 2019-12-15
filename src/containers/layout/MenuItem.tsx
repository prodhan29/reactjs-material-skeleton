import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CreateIcon from '@material-ui/icons/Create';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const iconStyle = { color: 'white' };

const items = [
  {
    link: '/',
    text: 'Home',
    icon: <HomeIcon style={iconStyle} />,
  },
  {
    link: '/create-todo',
    text: 'Create Todo',
    icon: <CreateIcon style={iconStyle} />,
  },
];

const MenuItem = (props: any) => {
  return (
    <React.Fragment>
      <List>
        {items.map((item, index) => (
          <ListItem button key={index} >
            <Link to={item.link}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
            </Link>

            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{ color: 'white' }} /> : <MailIcon style={{ color: 'white' }} />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}
export default MenuItem;