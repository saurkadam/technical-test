import React, {useCallback, useEffect, useState} from 'react';
import {
    Box, Grid, Paper, Button, Stack
  } from "@mui/material";
import { styled } from '@mui/material/styles';
import axios from 'axios'

import  CardComponent from '../CardComponent/CardComponent';
import { useApplicationContext } from '../../context/ApplicationContext';
import { Actions } from '../../context/ApplicationFile';

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const CardsContainer = (props) => {
  const { dispatch } = useApplicationContext()
  const [listData, setListData] = useState({
    list: [],
    selectedItems: []
  })

  const preprocessData = useCallback((data) => {
    data.forEach((item) => {
      item['selected'] = false;
    })
    return data;
  },[])

  const getList = useCallback(() => {
    axios.get('https://api.mockaroo.com/api/08100050?count=50&key=3e2ade60').then((response) => {
      setListData({
        list:preprocessData(response.data),
        selectedItems: []
      })
    }).catch((e) => {
      console.log(e)
    })
  }, [preprocessData])


  const terminateItems = useCallback(() => {
    dispatch({type: Actions.TERMINATE_ITEM, payload: listData.selectedItems})
    let filterListData = listData.list.filter((item) => !item.selected)
    setListData({
      selectedItems: [],
      list:filterListData
    })
  }, [dispatch, listData])

  const scanItems = useCallback(() => {
    dispatch({type: Actions.SCAN_ITEM, payload: listData.selectedItems})
    let filterListData = listData.list.filter((item) => !item.selected)
    setListData({
      selectedItems: [],
      list:filterListData
    })
  }, [dispatch, listData])

  const handleSelect = useCallback((ele, i) => {
    const updateListData = [...listData.list]
    updateListData[i].selected = !updateListData[i].selected
    let selectedList = [];
    if(updateListData[i].selected) {
      selectedList = [...listData.selectedItems, updateListData[i]]
    }
    setListData({
      list:updateListData,
      selectedItems: selectedList
    })
  }, [listData])

  useEffect(() => {
    getList()
  }, [])

  return (
        <Box sx={{ flexGrow: 1 }}>
            <Box component="div" mr={4} mb={3} sx={{ display:'flex', justifyContent: 'flex-end' }}>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={scanItems}>Scan</Button>
                <Button variant="outlined" onClick={terminateItems}>Terminate</Button>
              </Stack>
            </Box>
          <Grid container spacing={2}>
              {listData.list.map((ele, index) => {
                return (
                  <Grid key={ele.deviceName} item xs={12} sm={6} md={3} lg={4}>
                    <Item  onClick={() => {handleSelect(ele, index)}}>
                      <CardComponent cardData={ele}/>
                    </Item>
                  </Grid>
                )
              })}
          </Grid>
        </Box>
    )
}
export default CardsContainer
