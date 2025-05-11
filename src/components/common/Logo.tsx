import React from 'react'

type Props = {
  width?: number | string
  height?: number | string
  className?: string
}

export default function Logo({ width = 80, height = 80, className = '' }: Props) {
  // 비율 계산을 위한 기본 크기 (기본값 80x80 기준)
  const baseSize = 80
  const boxSize = typeof width === 'number' ? width * 0.8 : '80%' // 내부 박스는 container의 80%

  // 위치 계산 - 기본 비율 유지
  function getPosition(pos: number) {
    return typeof width === 'number' ? (pos / baseSize) * width : pos
  }

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: typeof width === 'string' ? width : `${width}px`,
        height: typeof height === 'string' ? height : `${height}px`
      }}
    >
      <div
        className="bg-blue-600 rounded-sm absolute shadow-lg transform rotate-6 animate-pulse"
        style={{
          width: typeof boxSize === 'string' ? boxSize : `${boxSize}px`,
          height: typeof boxSize === 'string' ? boxSize : `${boxSize}px`,
          top: getPosition(0),
          left: getPosition(0)
        }}
      />
      <div
        className="bg-indigo-500 rounded-sm absolute shadow-lg transform -rotate-3 animate-pulse"
        style={{
          width: typeof boxSize === 'string' ? boxSize : `${boxSize}px`,
          height: typeof boxSize === 'string' ? boxSize : `${boxSize}px`,
          top: getPosition(8),
          left: getPosition(8),
          animationDelay: '0.2s'
        }}
      />
      <div
        className="bg-purple-500 rounded-sm absolute shadow-lg transform rotate-2 animate-pulse"
        style={{
          width: typeof boxSize === 'string' ? boxSize : `${boxSize}px`,
          height: typeof boxSize === 'string' ? boxSize : `${boxSize}px`,
          top: getPosition(16),
          left: getPosition(16),
          animationDelay: '0.4s'
        }}
      />
    </div>
  )
}
