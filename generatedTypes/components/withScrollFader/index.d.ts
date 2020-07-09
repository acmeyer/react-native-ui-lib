import React from 'react';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { WithScrollReachedOptionsProps } from '../../commons/withScrollReached';
export declare type ScrollFaderProps = {
    onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    /**
     * Use to render the fade
     */
    renderFader: () => React.ReactNode;
};
export declare type WithScrollFaderOptionsProps = WithScrollReachedOptionsProps & {
    /**
     * Should the fader be set on the start or the end of the scroll (the image is different), defaults to end
     */
    setToStart?: boolean;
    /**
     * Set to change from the default size (50) of the fade view.
     */
    size?: number;
    /**
     * Change the default (white) tint color of the fade view.
     */
    tintColor?: string;
};
export declare type WithScrollFaderProps = {
    scrollFaderProps: ScrollFaderProps;
    ref?: any;
};
/**
 * @description: Creates a fade view over a scroll (when needed)
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/WithScrollFaderScreen.tsx
 * @notes: Send `props.scrollFaderProps.onScroll` to your onScroll and receive the fade component via props.scrollFaderProps.renderFader
 */
declare function withScrollFader<PROPS>(WrappedComponent: React.ComponentType<PROPS & WithScrollFaderProps>, options?: WithScrollFaderOptionsProps): React.ComponentType<PROPS>;
export default withScrollFader;
