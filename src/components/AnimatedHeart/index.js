import React from 'react'

import './style.scss'

export default React.createClass({
  render () {
    return (
      <svg width='84' height='64' viewBox='0 0 84 64' className='AnimatedHeart'>
        <defs>
          <path id='a' d='M.34 14.573h13.604V.87H.34z' />
          <path id='c' d='M.325 9.852H9.93V.18H.324z' />
          <path id='e' d='M.708 5.656h5.59V.028H.707z' />
          <path id='g' d='M.014 27.496h26.84V.462H.014z' />
          <path id='i' d='M.378 45.453h51.48V.187H.378z' />
          <path id='k' d='M.73 42.03h47.773V.02H.73z' />
          <path id='m' d='M.364 36.506H41.39V.436H.364z' />
        </defs>
        <g fill='none' fill-rule='evenodd'>
          <g transform='rotate(-180 10.095 13.57)'>
            <mask id='b' fill='#fff'>
              <use xlinkHref='#a' />
            </mask>
            <path className='AnimatedHeart__heart-1 AnimatedHeart__heart-7' fill='#01a044' d='M2.006 2.02c-2.653 2.69-2.653 7.025 0 9.69 2.658 2.685 6.962 2.685 9.617.01 2.664-2.675 2.664-7.002 0-9.7-2.655-2.664-6.96-2.664-9.617 0' transform='translate(.323 .848)' mask='url(#b)' />
          </g>
          <g transform='rotate(-180 6.712 24.025)'>
            <mask id='d' fill='#fff'>
              <use xlinkHref='#c' />
            </mask>
            <path className='AnimatedHeart__heart-1 AnimatedHeart__heart-6' fill='#83C67B' d='M2.006 2.02C.128 3.916.128 6.97 2.006 8.86c1.875 1.894 4.91 1.894 6.782.01 1.885-1.897 1.885-4.947 0-6.847C6.916.138 3.88.138 2.006 2.02' transform='translate(-.273 -.428)' mask='url(#d)' />
          </g>
          <g transform='rotate(-180 3.577 6.066)'>
            <mask id='f' fill='#fff'>
              <use xlinkHref='#e' />
            </mask>
            <path className='AnimatedHeart__heart-1 AnimatedHeart__heart-5' fill='#55BA6F' d='M1.003 1.01C-.093 2.125-.107 3.902.973 4.99c1.08 1.09 2.846 1.074 3.948-.027 1.106-1.117 1.12-2.886.036-3.986C3.87-.11 2.106-.097 1.003 1.01' transform='translate(.536 -.142)' mask='url(#f)' />
          </g>
          <g transform='rotate(-180 19.246 20.708)'>
            <mask id='h' fill='#fff'>
              <use xlinkHref='#g' />
            </mask>
            <path className='AnimatedHeart__heart-1 AnimatedHeart__heart-4' fill='#83C67B' d='M4.01 4.04c-5.238 5.307-5.238 13.855 0 19.117 5.24 5.292 13.727 5.292 18.963.026 5.265-5.288 5.265-13.815 0-19.142-5.236-5.26-13.724-5.26-18.962 0' transform='translate(-.068 .367)' mask='url(#h)' />
          </g>
          <g transform='rotate(-180 36.544 24.21)'>
            <mask id='j' fill='#fff'>
              <use xlinkHref='#i' />
            </mask>
            <path className='AnimatedHeart__heart-1 AnimatedHeart__heart-3' fill='#43AA4C' d='M14.29 45.465c7.022-.068 10.687-4.82 11.628-6.246.973 1.406 4.724 6.094 11.752 6.022 7.745-.082 13.996-6.32 13.92-13.918-.072-6.127-3.567-12.942-10.428-20.236C37.032 6.686 28.09.188 25.552.2c-2.554.038-11.356 6.708-15.416 11.19C3.424 18.815.05 25.7.11 31.84c.067 7.582 6.432 13.7 14.18 13.625' transform='translate(.27 -.013)' mask='url(#j)' />
          </g>
          <g transform='rotate(-180 35.792 30)'>
            <mask id='l' fill='#fff'>
              <use xlinkHref='#k' />
            </mask>
            <path className='AnimatedHeart__heart-1 AnimatedHeart__heart-2' fill='#55BA6F' d='M13.287 42.434c6.514-.062 9.92-4.472 10.79-5.796.905 1.302 4.385 5.653 10.903 5.588 7.193-.074 12.994-5.863 12.92-12.913-.063-5.69-3.308-12.015-9.678-18.783C34.395 6.444 26.092.413 23.74.425 21.37.463 13.197 6.65 9.43 10.812 3.203 17.702.07 24.088.13 29.787.187 36.825 6.095 42.5 13.286 42.434' transform='translate(.602 -.406)' mask='url(#l)' />
          </g>
          <g transform='rotate(-180 41.433 27.96)'>
            <mask id='n' fill='#fff'>
              <use xlinkHref='#m' />
            </mask>
            <path className='AnimatedHeart__heart-1' fill='#83C67B' d='M12.033 36.372c5.597-.054 8.52-3.84 9.276-4.976.772 1.12 3.76 4.856 9.358 4.8 6.172-.063 11.157-5.038 11.094-11.09-.054-4.885-2.844-10.314-8.313-16.128C30.16 5.475 23.033.292 21.01.302c-2.028.03-9.05 5.343-12.283 8.917C3.377 15.136.692 20.62.737 25.51c.054 6.046 5.13 10.92 11.296 10.86' transform='translate(-.373 .134)' mask='url(#n)' />
          </g>
          <path className='AnimatedHeart__heart-1' fill='#FFF' d='M70.832 17.272c-5.842.055-8.89 4.007-9.677 5.19-.808-1.168-3.926-5.066-9.767-5.01-6.44.07-11.64 5.258-11.576 11.574.055 5.098 2.967 10.763 8.672 16.827 3.433 3.656 10.874 9.065 12.98 9.054 2.118-.033 9.44-5.577 12.817-9.306 5.584-6.17 8.388-11.895 8.34-16.998-.06-6.31-5.352-11.396-11.788-11.33' />
        </g>
      </svg>
    )
  }
})
