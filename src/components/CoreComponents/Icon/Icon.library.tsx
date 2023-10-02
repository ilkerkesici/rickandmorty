import React from 'react';

import Svg, {Path} from 'react-native-svg';

import {IconProps, IconType} from './Icon.type';

type IconLibraryProps = Omit<IconProps, 'color'> & {
  color?: string;
};

export const HomeOutline = ({
  width = 24,
  height = 24,
  color,
  strokeWidth = 1.5,
}: IconLibraryProps): JSX.Element => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12L11.2045 3.04549C11.6438 2.60615 12.3562 2.60615 12.7955 3.04549L21.75 12M4.5 9.75V19.875C4.5 20.4963 5.00368 21 5.625 21H9.75V16.125C9.75 15.5037 10.2537 15 10.875 15H13.125C13.7463 15 14.25 15.5037 14.25 16.125V21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V9.75M8.25 21H16.5"
      />
    </Svg>
  );
};

export const HomeSolid = ({
  width = 24,
  height = 24,
  color,
}: IconLibraryProps): JSX.Element => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M11.4697 3.84099C11.7626 3.5481 12.2374 3.5481 12.5303 3.84099L21.2197 12.5303C21.5126 12.8232 21.9874 12.8232 22.2803 12.5303C22.5732 12.2374 22.5732 11.7626 22.2803 11.4697L13.591 2.78033C12.7123 1.90165 11.2877 1.90165 10.409 2.78033L1.71967 11.4697C1.42678 11.7626 1.42678 12.2374 1.71967 12.5303C2.01256 12.8232 2.48744 12.8232 2.78033 12.5303L11.4697 3.84099Z"
      />
      <Path
        fill={color}
        d="M12 5.43198L20.159 13.591C20.1887 13.6207 20.2191 13.6494 20.25 13.6771V19.875C20.25 20.9105 19.4105 21.75 18.375 21.75H15C14.5858 21.75 14.25 21.4142 14.25 21V16.5C14.25 16.0858 13.9142 15.75 13.5 15.75H10.5C10.0858 15.75 9.75 16.0858 9.75 16.5V21C9.75 21.4142 9.41421 21.75 9 21.75H5.625C4.58947 21.75 3.75 20.9105 3.75 19.875V13.6771C3.78093 13.6494 3.81127 13.6207 3.84099 13.591L12 5.43198Z"
      />
    </Svg>
  );
};

export const ArrowLeftOutline = ({
  width = 24,
  height = 24,
  color,
  strokeWidth = 1.5,
}: IconLibraryProps): JSX.Element => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
      />
    </Svg>
  );
};

export const ArrowLeftSolid = ({
  width = 24,
  height = 24,
  color,
}: IconLibraryProps): JSX.Element => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M11.0303 3.96967C11.3232 4.26256 11.3232 4.73744 11.0303 5.03033L4.81066 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H4.81066L11.0303 18.9697C11.3232 19.2626 11.3232 19.7374 11.0303 20.0303C10.7374 20.3232 10.2626 20.3232 9.96967 20.0303L2.46967 12.5303C2.17678 12.2374 2.17678 11.7626 2.46967 11.4697L9.96967 3.96967C10.2626 3.67678 10.7374 3.67678 11.0303 3.96967Z"
      />
    </Svg>
  );
};

const iconLookUp: Record<IconType, any> = {
  'o:home': HomeOutline,
  's:home': HomeSolid,
  'o:arrow_left': ArrowLeftOutline,
  's:arrow_left': ArrowLeftSolid,
};

export default iconLookUp;
