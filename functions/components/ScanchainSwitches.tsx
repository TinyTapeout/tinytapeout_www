// SPDX-License-Identifier: Apache-2.0
// Copyright (C) 2024, Tiny Tapeout LTD

import React from 'react';

export function ScanchainSwitches({ address }: { address: number }) {
  const addressBinary = address.toString(2).padStart(9, '0');
  return (
    <svg
      width="26.45mm"
      height="48.7mm"
      version="1.1"
      viewBox="0 0 52.9 97.4"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ float: 'right', maxWidth: '20vw' }}
    >
      <defs>
        <linearGradient id="a">
          <stop stop-color="#dcdbdb" offset="0" />
          <stop stop-color="#6f7172" offset="1" />
        </linearGradient>
        <radialGradient
          id="j"
          cx="-85.1"
          cy="71.8"
          r="14.1"
          gradientTransform="matrix(.424 -.0127 .00479 .16 -115 42)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        />
        <radialGradient
          id="i"
          cx="-85.1"
          cy="71.8"
          r="14.1"
          gradientTransform="matrix(.424 -.0127 .00479 .16 -115 51.5)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        />
        <radialGradient
          id="h"
          cx="-85.1"
          cy="71.8"
          r="14.1"
          gradientTransform="matrix(.424 -.0127 .00479 .16 -115 60.7)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        />
        <radialGradient
          id="g"
          cx="-85.1"
          cy="71.8"
          r="14.1"
          gradientTransform="matrix(.424 -.0127 .00479 .16 -115 69.6)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        />
        <radialGradient
          id="f"
          cx="-85.1"
          cy="71.8"
          r="14.1"
          gradientTransform="matrix(.424 -.0127 .00479 .16 -115 79.1)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        />
        <radialGradient
          id="e"
          cx="-85.1"
          cy="71.8"
          r="14.1"
          gradientTransform="matrix(.424 -.0127 .00479 .16 -115 88.3)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        />
        <radialGradient
          id="d"
          cx="-85.1"
          cy="71.8"
          r="14.1"
          gradientTransform="matrix(.424 -.0127 .00479 .16 -115 97.6)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        />
        <radialGradient
          id="c"
          cx="-85.1"
          cy="71.8"
          r="14.1"
          gradientTransform="matrix(.424 -.0127 .00479 .16 -115 107)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        />
        <radialGradient
          id="b"
          cx="-85.1"
          cy="71.8"
          r="14.1"
          gradientTransform="matrix(.424 -.0127 .00479 .16 -115 116)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        />
      </defs>
      <style>{`
    .switch-on {
      transform: translate(-22px, 0);
    }
  `}</style>
      <g transform="translate(186 -45.7)">
        <g>
          <rect x="-186" y="45.7" width="52.9" height="97.4" ry=".31" fill="#384a25" />
          <path
            d="m-184 46.8h43.7s2.95 0.236 4.31 1.6c1.54 1.54 1.49 4.92 1.49 4.92v76.5s0.173 3.03-1.54 4.75c-1.72 1.72-3.31 2.54-5.74 2.54h-42.2z"
            fill="#384a25"
            stroke="#fff"
            stroke-width=".697"
          />
          <rect x="-155" y="48" width=".659" height="89.2" ry=".303" fill="#f9f9f9" />
        </g>
        <path
          d="m-159 125h2.88s0.0531 0.992 0.412 1.24c0.45 0.307 6.18 0.0618 6.18 0.0618-7e-3 1.31-0.0366 2.62-0.0618 3.94 0 0-4.65-0.234-6.12 0.124-1.47 0.358-3.21 0.33-3.21 0.33l0.0395-1.8s1.23 0.0157 1.16-0.916c-0.0641-0.914-1.27-0.715-1.27-0.715z"
          fill="url(#b)"
        />
        <path
          d="m-159 116h2.88s0.0531 0.992 0.412 1.24c0.45 0.307 6.18 0.0618 6.18 0.0618-7e-3 1.31-0.0366 2.62-0.0618 3.94 0 0-4.65-0.234-6.12 0.124-1.47 0.358-3.21 0.33-3.21 0.33l0.0395-1.8s1.23 0.0157 1.16-0.916c-0.0641-0.914-1.27-0.715-1.27-0.715z"
          fill="url(#c)"
        />
        <path
          d="m-159 107h2.88s0.0531 0.992 0.412 1.24c0.45 0.307 6.18 0.0618 6.18 0.0618-7e-3 1.31-0.0366 2.62-0.0618 3.94 0 0-4.65-0.234-6.12 0.124-1.47 0.358-3.21 0.33-3.21 0.33l0.0395-1.8s1.23 0.0157 1.16-0.916c-0.0641-0.914-1.27-0.715-1.27-0.715z"
          fill="url(#d)"
        />
        <path
          d="m-159 97.7h2.88s0.0531 0.992 0.412 1.24c0.45 0.307 6.18 0.0618 6.18 0.0618-7e-3 1.31-0.0366 2.62-0.0618 3.94 0 0-4.65-0.234-6.12 0.124-1.47 0.358-3.21 0.33-3.21 0.33l0.0395-1.8s1.23 0.0157 1.16-0.916c-0.0641-0.914-1.27-0.715-1.27-0.715z"
          fill="url(#e)"
        />
        <path
          d="m-159 88.4h2.88s0.0531 0.992 0.412 1.24c0.45 0.307 6.18 0.0618 6.18 0.0618-7e-3 1.31-0.0366 2.62-0.0618 3.94 0 0-4.65-0.234-6.12 0.124-1.47 0.358-3.21 0.33-3.21 0.33l0.0395-1.8s1.23 0.0157 1.16-0.916c-0.0641-0.914-1.27-0.715-1.27-0.715z"
          fill="url(#f)"
        />
        <path
          d="m-159 79h2.88s0.0531 0.992 0.412 1.24c0.45 0.307 6.18 0.0618 6.18 0.0618-7e-3 1.31-0.0366 2.62-0.0618 3.94 0 0-4.65-0.234-6.12 0.124-1.47 0.358-3.21 0.33-3.21 0.33l0.0395-1.8s1.23 0.0157 1.16-0.916c-0.0641-0.914-1.27-0.715-1.27-0.715z"
          fill="url(#g)"
        />
        <path
          d="m-159 70.1h2.88s0.0531 0.992 0.412 1.24c0.45 0.307 6.18 0.0618 6.18 0.0618-7e-3 1.31-0.0366 2.62-0.0618 3.94 0 0-4.65-0.234-6.12 0.124-1.47 0.358-3.21 0.33-3.21 0.33l0.0395-1.8s1.23 0.0157 1.16-0.916c-0.0641-0.914-1.27-0.715-1.27-0.715z"
          fill="url(#h)"
        />
        <path
          d="m-159 60.8h2.88s0.0531 0.992 0.412 1.24c0.45 0.307 6.18 0.0618 6.18 0.0618-7e-3 1.31-0.0366 2.62-0.0618 3.94 0 0-4.65-0.234-6.12 0.124-1.47 0.358-3.21 0.33-3.21 0.33l0.0395-1.8s1.23 0.0157 1.16-0.916c-0.0641-0.914-1.27-0.715-1.27-0.715z"
          fill="url(#i)"
        />
        <path
          d="m-159 51.4h2.88s0.0531 0.992 0.412 1.24c0.45 0.307 6.18 0.0618 6.18 0.0618-7e-3 1.31-0.0366 2.62-0.0618 3.94 0 0-4.65-0.234-6.12 0.124-1.47 0.358-3.21 0.33-3.21 0.33l0.0395-1.8s1.23 0.0157 1.16-0.916c-0.0641-0.914-1.27-0.715-1.27-0.715z"
          fill="url(#j)"
        />
        <rect x="-183" y="47.4" width="24.6" height="89" ry=".14" fill="#382e25" />
        <text
          transform="rotate(90)"
          x="57.168346"
          y="147.09151"
          fill="#f9f9f9"
          font-family="sans-serif"
          font-size="11.1px"
          stroke-width=".277"
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
        >
          <tspan x="57.168346" y="147.09151" fill="#f9f9f9" stroke-width=".277">
            Select Project
          </tspan>
        </text>
        <g fill="#000000" font-family="sans-serif" font-size="3.71px" stroke-width=".0926">
          <text
            transform="rotate(-90)"
            x="-130.03841"
            y="-159.62483"
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
          >
            <tspan
              x="-130.03841"
              y="-159.62483"
              fill="#f9f9f9"
              stroke-width=".0926"
              text-align="center"
              text-anchor="middle"
            >
              1
            </tspan>
          </text>
          <g text-anchor="middle">
            <text
              transform="rotate(-90)"
              x="-120.74912"
              y="-159.56654"
              text-align="center"
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
            >
              <tspan
                x="-120.74912"
                y="-159.56654"
                fill="#f9f9f9"
                stroke-width=".0926"
                text-align="center"
                text-anchor="middle"
              >
                2
              </tspan>
            </text>
            <text
              transform="rotate(-90)"
              x="-111.13242"
              y="-159.71225"
              text-align="center"
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
            >
              <tspan
                x="-111.13242"
                y="-159.71225"
                fill="#f9f9f9"
                stroke-width=".0926"
                text-align="center"
                text-anchor="middle"
              >
                3
              </tspan>
            </text>
            <text
              transform="rotate(-90)"
              x="-101.74884"
              y="-159.82883"
              text-align="center"
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
            >
              <tspan
                x="-101.74884"
                y="-159.82883"
                fill="#f9f9f9"
                stroke-width=".0926"
                text-align="center"
                text-anchor="middle"
              >
                4
              </tspan>
            </text>
            <text
              transform="rotate(-90)"
              x="-92.481827"
              y="-159.8871"
              text-align="center"
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
            >
              <tspan
                x="-92.481827"
                y="-159.8871"
                fill="#f9f9f9"
                stroke-width=".0926"
                text-align="center"
                text-anchor="middle"
              >
                5
              </tspan>
            </text>
            <text
              transform="rotate(-90)"
              x="-82.690269"
              y="-159.71225"
              text-align="center"
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
            >
              <tspan
                x="-82.690269"
                y="-159.71225"
                fill="#f9f9f9"
                stroke-width=".0926"
                text-align="center"
                text-anchor="middle"
              >
                6
              </tspan>
            </text>
            <text
              transform="rotate(-90)"
              x="-72.957001"
              y="-159.82883"
              text-align="center"
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
            >
              <tspan
                x="-72.957001"
                y="-159.82883"
                fill="#f9f9f9"
                stroke-width=".0926"
                text-align="center"
                text-anchor="middle"
              >
                7
              </tspan>
            </text>
            <text
              transform="rotate(-90)"
              x="-63.34029"
              y="-159.82883"
              text-align="center"
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
            >
              <tspan
                x="-63.34029"
                y="-159.82883"
                fill="#f9f9f9"
                stroke-width=".0926"
                text-align="center"
                text-anchor="middle"
              >
                8
              </tspan>
            </text>
            <text
              transform="rotate(-90)"
              x="-53.89843"
              y="-159.8871"
              text-align="center"
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
            >
              <tspan
                x="-53.89843"
                y="-159.8871"
                fill="#f9f9f9"
                stroke-width=".0926"
                text-align="center"
                text-anchor="middle"
              >
                9
              </tspan>
            </text>
          </g>
        </g>
        <rect x="-179" y="52.4" width="15.8" height="4.66" ry=".31" fill="#201710" />
        <text
          transform="rotate(-90)"
          x="-128.81447"
          y="-179.75931"
          fill="#000000"
          font-family="sans-serif"
          font-size="3.71px"
          stroke-width=".0926"
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
        >
          <tspan
            x="-128.81447"
            y="-179.75931"
            fill="#f9f9f9"
            stroke-width=".0926"
            text-align="center"
            text-anchor="middle"
          >
            ON
          </tspan>
        </text>
        <g transform="matrix(.35 0 0 .35 -121 29.7)">
          <rect x="-166" y="64.8" width="45.1" height="13.3" ry=".886" fill="#201710" />
          <rect
            x="-139"
            y="66.3"
            width="13.7"
            height="10.5"
            ry=".886"
            fill="#d2c6a6"
            className={addressBinary[0] === '1' ? 'switch-on' : ''}
          />
        </g>
        <g transform="matrix(.35 0 0 .35 -121 38.8)">
          <rect x="-166" y="64.8" width="45.1" height="13.3" ry=".886" fill="#201710" />
          <rect
            x="-139"
            y="66.3"
            width="13.7"
            height="10.5"
            ry=".886"
            fill="#d2c6a6"
            className={addressBinary[1] === '1' ? 'switch-on' : ''}
          />
        </g>
        <g transform="matrix(.35 0 0 .35 -121 48.4)">
          <rect x="-166" y="64.8" width="45.1" height="13.3" ry=".886" fill="#201710" />
          <rect
            x="-139"
            y="66.3"
            width="13.7"
            height="10.5"
            ry=".886"
            fill="#d2c6a6"
            className={addressBinary[2] === '1' ? 'switch-on' : ''}
          />
        </g>
        <g transform="matrix(.35 0 0 .35 -121 57.8)">
          <rect x="-166" y="64.8" width="45.1" height="13.3" ry=".886" fill="#201710" />
          <rect
            x="-139"
            y="66.3"
            width="13.7"
            height="10.5"
            ry=".886"
            fill="#d2c6a6"
            className={addressBinary[3] === '1' ? 'switch-on' : ''}
          />
        </g>
        <g transform="matrix(.35 0 0 .35 -121 67.1)">
          <rect x="-166" y="64.8" width="45.1" height="13.3" ry=".886" fill="#201710" />
          <rect
            x="-139"
            y="66.3"
            width="13.7"
            height="10.5"
            ry=".886"
            fill="#d2c6a6"
            className={addressBinary[4] === '1' ? 'switch-on' : ''}
          />
        </g>
        <g transform="matrix(.35 0 0 .35 -121 76.4)">
          <rect x="-166" y="64.8" width="45.1" height="13.3" ry=".886" fill="#201710" />
          <rect
            x="-139"
            y="66.3"
            width="13.7"
            height="10.5"
            ry=".886"
            fill="#d2c6a6"
            className={addressBinary[5] === '1' ? 'switch-on' : ''}
          />
        </g>
        <g transform="matrix(.35 0 0 .35 -121 86)">
          <rect x="-166" y="64.8" width="45.1" height="13.3" ry=".886" fill="#201710" />
          <rect
            x="-139"
            y="66.3"
            width="13.7"
            height="10.5"
            ry=".886"
            fill="#d2c6a6"
            className={addressBinary[6] === '1' ? 'switch-on' : ''}
          />
        </g>
        <g transform="matrix(.35 0 0 .35 -121 95.5)">
          <rect x="-166" y="64.8" width="45.1" height="13.3" ry=".886" fill="#201710" />
          <rect
            x="-139"
            y="66.3"
            width="13.7"
            height="10.5"
            ry=".886"
            fill="#d2c6a6"
            className={addressBinary[7] === '1' ? 'switch-on' : ''}
          />
        </g>
        <g transform="matrix(.35 0 0 .35 -121 105)">
          <rect x="-166" y="64.8" width="45.1" height="13.3" ry=".886" fill="#201710" />
          <rect
            x="-139"
            y="66.3"
            width="13.7"
            height="10.5"
            ry=".886"
            fill="#d2c6a6"
            className={addressBinary[8] === '1' ? 'switch-on' : ''}
          />
        </g>
        <ellipse cx="-152" cy="134" rx="1.9" ry="1.98" fill="#f9f9f9" />
        <text
          x="-168.03447"
          y="142.74278"
          fill="#000000"
          font-family="sans-serif"
          font-size="6.62px"
          stroke-width=".166"
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
        >
          <tspan x="-168.03447" y="142.74278" fill="#f9f9f9" font-weight="bold" stroke-width=".166">
            SW2
          </tspan>
        </text>
      </g>
    </svg>
  );
}
