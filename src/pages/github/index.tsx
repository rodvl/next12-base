import { useState, useCallback } from 'react';
import { Button, TextField, Alert } from '@mui/material';
import githubApi from '../../services/github';
import { IGetRepository } from '../../interfaces/gitHubApi';
import {wrapperStyle, searchStyle, resultStyle}  from './style';
import { Search } from '@mui/icons-material';

export default function Github() {
  const [searchText, setSearchText] = useState('');
  const [repositoriesData, setRepositoriesData] = useState<IGetRepository[]>(
    [],
  );
  const [requestError, setRequestError] = useState(false);

  const handleSearchData = useCallback(async () => {
    if (searchText) {
      try {
        const { data } = await githubApi.getRepository(searchText);
        setRepositoriesData(oldData => {
          const newData = [...oldData];
          newData.unshift(data);
          return newData;
        });
        setSearchText("");
        setRequestError(false);
      } catch (e) {
        setRequestError(true);
      }
    }
  }, [searchText]);

  return (
    <div css={wrapperStyle()}>
      <div css={searchStyle()}>
        <TextField
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          label="Repository name"
          className='Input'
        />
        <Button onClick={handleSearchData} variant="contained" 
          className='Button'
          >
          <Search />
        </Button>
      </div>
      {requestError && <Alert className='Alert' color='error'>Error processing your request!</Alert>}
      <div css={resultStyle()}>
        {repositoriesData.map(e => (
          <div key={e.full_name} className='Item'>
            <img src={e.owner.avatar_url} />{' '}
            <div className='TextContainer'>
              <h5 className='Title'>{e.full_name}</h5>
              <p className='Description'>{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
