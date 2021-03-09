//
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import api from '../settings/api';

export default () => {

    const [result, setResult] = useState({})
    const [errMsg, setErrMsg] = useState()

    const route = useRoute()

    const id = route.params.id

    const getResult = async (id) => {

        try {

            const response = await api.get(`/${id}`)

            setResult(response.data)
            
        } catch (error) {
            
            setErrMsg('tidak dapat menampilkan gambar')
        }
    }

    useEffect(() => {

        getResult(id)

    },[])

    return [getResult, result, errMsg]

}