//
import React, { useState, useEffect } from 'react';
import api from '../settings/api';

export default () => {

    const [results, setResults] = useState([])
    const [errMessage, setErrMessage] = useState('')
  
    const searchApi = async (element) => {
  
      try {
       
        const response =  await api.get('/search', {
          params: {
            limit: 40,
            term: element,
            location: 'san jose'
          }
        }) 
    
        setResults(response.data.businesses)
        
      } catch (error) {
  
        setErrMessage('Something when wrong!')
        
      }
  
    }
  
    useEffect(() => {
  
      searchApi('pasta')
  
    },[])

    return [searchApi, results, errMessage]

}