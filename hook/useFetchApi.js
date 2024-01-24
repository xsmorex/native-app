import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';

const rapidApiKey = process.env.RAPID_API_KEY;

const useFetchApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://api.slingacademy.com/v1/sample-data/photos`,
    headers: {},
    params: {}
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.photos);

      //console.log(('test'),response.data.photos)
      setIsLoading(false);
    } catch (error) {
      setError(error);
      
      alert('There is an error')
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  //console.log()
  return { data, isLoading, error, refetch };

}

export default useFetchApi;

