import { useState } from 'react'
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlayer } from '../action/tennis';
import { fetchTennisPlayer } from '../api/tennisApi';

function Tennis(props) {
  const tennis = useSelector((state) => state.tennis)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    let player = await fetchTennisPlayer(formData.name)
    dispatch(fetchPlayer(formData.name))
    props.loadedPlayer(player)
    setFormData({
      name: '',
    })
    console.log(player)
  }

  return (
    <>
      <div>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="PlayerName:" variant="outlined"
            name="name"
            onChange={handleChange}
            value={formData.name}
          >
          </TextField>
          <Button type="submit" variant="contained">
            View Player
          </Button>
        </Box>
      </div>
      <div>
        {Object.keys(tennis).length != 0 && tennis.results[0].entity.id}
      </div>
    </>
  )
}

export default Tennis