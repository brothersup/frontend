import axios from 'axios';

export const getBoardListRequest = (beginIndex, size) => axios.get(`/api/free_board_list/${beginIndex}/${size}`);
