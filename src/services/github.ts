import axios from 'axios';
import { IGetRepository } from '../interfaces/gitHubApi';

const api = axios.create({ baseURL: 'https://api.github.com/' });

const githubApi = {
  getRepository: async (searchText: string) =>
    api.get<IGetRepository>(`/repos/${searchText}`),
};

export default githubApi;
