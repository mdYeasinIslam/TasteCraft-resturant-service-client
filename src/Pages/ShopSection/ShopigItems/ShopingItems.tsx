import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useMenu } from '../../../hooks/useMenu';
import { DisplayShopItems } from './DisplayShopItems';
import { CircularProgress } from '@mui/material';


export  const ShopingItems=()=> {
  const [value, setValue] = React.useState('1');
    const {menu,loading} = useMenu()
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault()
    setValue(newValue); 
  };
      const dessert = menu?.filter((item) => item.category === 'dessert')
      const pizza = menu?.filter((item) => item.category === 'pizza')
      const salad = menu?.filter((item) => item.category === 'salad')
      const soup = menu?.filter((item) => item.category === 'soup')
      const drinks = menu?.filter((item) => item.category === 'drinks')
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Salad" defaultValue='1' value="1" />
            <Tab label="Pizza" value="2"/>
            <Tab label="Dessert" value="3"/>
            <Tab label="Soup" value="4"/>
            <Tab label="Drinks" value="5"/>
        </TabList>
        </Box>
        {
          loading ?
            <div className="flex justify-center "><CircularProgress className="" size="3rem" /></div>
            :
            <>
             <TabPanel defaultValue={'1'} value="1" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  '>
            {
             salad?.map(item=><DisplayShopItems key={item._id} item={item} />)         
            }  
        </TabPanel>
        <TabPanel value="2"className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  p-0 m-0'>
                 {
             pizza.map(item=><DisplayShopItems key={item._id} item={item} />)         
            }  
        </TabPanel>
         <TabPanel value="3"className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                   {
             dessert.map(item=><DisplayShopItems key={item._id} item={item} />)         
            }
          </TabPanel>
              
          <TabPanel value="4"className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 '>
                   {
             soup.map(item=><DisplayShopItems key={item._id} item={item} />)         
            }
        </TabPanel>
        <TabPanel value="5"className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                   {
             drinks.map(item=><DisplayShopItems key={item._id} item={item} />)         
            }
        </TabPanel>
            </>
        }
              
      </TabContext>
    </Box>
  );
}
