"use client"

import React from 'react'

interface Props {
  error: Error;
  reset: () => void;
}

const Error = ({error, reset}: Props) => {
  console.log("Error: ", error);
  return (
    <div>
      에상치못한 오류가 발생했습니다.
      <button className="btn btn-warning" onClick={() => reset()}>Retry</button>
    </div>
  )
}

export default Error

/*
 * 1. Sentry
 * 2. reset 사용
 */