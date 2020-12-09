import React, {useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

 


function Generator() {

    const classes = useStyles();
    const [name,setName] = useState("");
    const [data,setData] = useState(['Sreerag','Sumayya','Sujith']);  //initial names
    const crypto = require('crypto');


    const nameToColor = (str)=>{   //color generation
      var c;
      c= '#' + crypto.createHash('sha256').update(str).digest('hex').substr(0, 6);  //hashing
      console.log(c + ' color ' + str);
      return c;
    }

    
    const invertColor= (hex) => {  //background color 
      console.log('invert')
      if (hex.indexOf('#') === 0) {
          hex = hex.slice(1);
      }
      var r = parseInt(hex.slice(0, 2), 16),
          g = parseInt(hex.slice(2, 4), 16),
          b = parseInt(hex.slice(4, 6), 16);
  
      return (r * 0.299 + g * 0.587 + b * 0.114) > 186  //checking brightness 
          ? '#000000'
          : '#FFFFFF';
      
  }


    const handleSubmit = (event)=> {
      event.preventDefault();
      console.log(name);
      setData(data.concat(name)); //adding name to list
      setName('');
      }
    
    
    const handleChange = (event) =>{
      setName(event.target.value);
      // console.log(name);
    }




    return (
      <div style={{width:'50%', marginLeft:'20%', marginTop:'2%'}}>
       
        <form onSubmit={handleSubmit}>
            <TextField 
            label="Enter name" variant="outlined" 
            required
            InputLabelProps={{required: false}}
            style={{ width: "40%", marginLeft:"30%", marginTop:"1%"}}
            value={name}
            onChange={handleChange}/>
          <Button 
            type="submit"
            style={{width: "20%", marginLeft:"40%", marginTop:'1%', backgroundColor:'#0f5778', color:'white'}}>
              ADD
          </Button>
        </form>

<List className={classes.root}>
    {data.map((a, i)=>(   //listing names with color id
      <ListItem key={i}>
        <ListItemAvatar>
          <Avatar style={{color:invertColor(nameToColor(a)), background:nameToColor(a)}}>
            {a[0]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText >{a}</ListItemText>
      </ListItem>
      ))}
    </List>
      </div>
    );
  }

  
  export default Generator;
  