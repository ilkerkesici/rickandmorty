import {ColorType} from 'assets/colors';

export interface MarginDesignProps {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  margin?: number;
}

export interface PaddingDesignProps {
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  padding?: number;
}

export interface SizeDesignProps {
  width?: number | string;
  height?: number | string;
  minHeight?: number;
}

export interface BorderDesignProps {
  borderWidth?: number;
  borderRadius?: number;
  borderColor?: ColorType;
}

export interface Alignment {
  justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
  alignItems?: 'center' | 'flex-end' | 'flex-start' | 'baseline';
  flexDirection?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
}

export interface BlockProps extends Alignment {
  flex?: number;
  gap?: number;
}

export interface FillmentDesignProps {
  fill?: boolean;
  fillInRow?: boolean;
}

export interface ColorDesignProps {
  backgroundColor?: ColorType;
  color?: ColorType;
}

export interface DesignProps
  extends MarginDesignProps,
    PaddingDesignProps,
    BorderDesignProps,
    Alignment,
    SizeDesignProps,
    ColorDesignProps,
    FillmentDesignProps {}

export interface TextDesignProps extends DesignProps {
  right?: boolean;
  left?: boolean;
  center?: boolean;
}
