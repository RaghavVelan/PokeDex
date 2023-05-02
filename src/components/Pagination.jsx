import React from 'react'
import '../App.css';

export default function Pagination({gotoNextPage, gotoPrevPage, HandleHome}) {
  return (
    <div className='pagination'>
        {gotoPrevPage && <button onClick={gotoPrevPage} className='btn prev'>Prev Page</button>}
        {gotoNextPage && <button onClick={gotoNextPage} className='btn next'>Next Page</button>}
    </div>
  )
}
