import {
    LayoutChangeEvent,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React, { useRef } from "react";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import Animated, {
    useAnimatedStyle,
    withSpring,
    withTiming,
} from "react-native-reanimated";

type TabBarComponentProps = {
    active?: boolean;
    options: BottomTabNavigationOptions;
    onLayout: (e: LayoutChangeEvent) => void;
    onPress: () => void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const GTabBarComponent = ({
    active,
    options,
    onLayout,
    onPress,
}: TabBarComponentProps) => {
    const ref = useRef(null);

    const animatedComponentCircleStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    // scale: withTiming(active ? 1 : 0, { duration: 250 }),
                    scale: withSpring(active ? 1 : 0, { stiffness: 200, damping: 20 }),
                },
            ],
        };
    });

    const animatedIconContainerStyles = useAnimatedStyle(() => {
        return {
            // opacity: withTiming(active ? 1 : 0.5, { duration: 250 }),
            opacity: withSpring(active ? 1 : 0.5, { stiffness: 200, damping: 20 }),
        };
    });

    const animatedTranslateY = useAnimatedStyle(() => {
     
        return {
            transform: [
                { translateY: withSpring(active ? -30 : 0, { stiffness: 200, damping: 20 }) },
                // { scale: withSpring(active ? 1 : 0.85, { stiffness: 200, damping: 20 }) }
            ]
        }

    })

    return (
        <AnimatedPressable
            onPress={onPress}
            onLayout={onLayout}
            style={[styles.component, animatedTranslateY]}
        >
            <Animated.View
                style={[styles.componentCircle, animatedComponentCircleStyles]}
            />
            <Animated.View
                style={[styles.iconContainer, animatedIconContainerStyles]}
            >
                {/* @ts-ignore */}
                {options.tabBarIcon ? (
                    options.tabBarIcon({ ref })
                ) : (
                    <Text>?</Text>
                )}
            </Animated.View>
        </AnimatedPressable>
    );
};

export default GTabBarComponent;

const styles = StyleSheet.create({
    component: {
        height: 60,
        width: 60,
        // marginTop: -5,
        transform: [
            { translateY: -30 }
        ]
    },
    componentCircle: {
        flex: 1,
        borderRadius: 30,
        backgroundColor: "white",
    },
    iconContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
});
