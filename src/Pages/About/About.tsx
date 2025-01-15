import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useState } from "react";

const array = [
    {id:1,name:'hasan'},
    {id:2,name:'ali'},
    {id:3,name:'yeasin'},
    {id:4,name:'rahim'},
    {id:5,name:'sojib'},
]

export const About = () => {
    const [value, setValue] = useState('1');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
      <div className="pt-16">
  <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
                  <TabPanel value="1" className="">
                       {
           array.map(item => <li key={item.id}>{ item.name}</li>)
        }  
        </TabPanel>
                  <TabPanel value="2" className="">
                       {
           array.map(item => <li key={item.id}>{ item.name}</li>)
        }  
        </TabPanel>
        <TabPanel value="3" className="grid grid-cols-3">
         {
           array.map(item => <li key={item.id}>{ item.name}</li>)
        }              
        </TabPanel>
      </TabContext>
    </Box>    </div>
  )
}
