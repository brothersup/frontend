import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AuthContext } from '../src/utils/authProvider';
import Layout from '../components/layout';
import { getBoardListAction, loadNextPageAction, resetBoardAction } from '../src/redux/freeboard/actions';
import { makeSelectBoardList, makeSelectLoading, makeSelectTotal } from '../src/redux/freeboard/selectors';

const FreeBoard = () => {
  const { token, isValid } = useContext(AuthContext);
  const [board, setBoard] = useState(null);

  const dispatch = useDispatch();
  const getBoardList = () => {
    dispatch(getBoardListAction());
  };
  const loadNextPage = () => {
    dispatch(loadNextPageAction());
  };
  const resetBoard = () => {
    dispatch(resetBoardAction());
  };

  const boardList = useSelector(makeSelectBoardList());
  const loading = useSelector(makeSelectLoading());
  const total = useSelector(makeSelectTotal());

  useEffect(() => {
    getBoardList();

    return () => {
      resetBoard();
    };
  }, []);

  useEffect(() => {
    const boardListMap = boardList.map((item, i) => (
      <div key={i.toString()} style={{ height: '150px' }}>
        {item.no} | {item.title} | {item.author}
      </div>
    ));
    setBoard(boardListMap);
  }, [boardList]);

  const next = () => {
    loadNextPage();
    getBoardList();
  };

  return (
    <Layout>
      <div>{token && isValid && <Button>글쓰기</Button>}</div>
      <hr />
      <div>
        {board && board.length > 0 ? (
          <InfiniteScroll
            dataLength={board.length}
            next={next}
            hasMore={total > board.length}
            loader={<h4>Loading...</h4>}
          >
            {board}
          </InfiniteScroll>
        ) : (
          <div>등록된 게시물이 없습니다.</div>
        )}
      </div>
      {board && board.length < total && (
        <Button disabled={loading} onClick={next}>
          더보기
        </Button>
      )}
    </Layout>
  );
};

export default FreeBoard;
