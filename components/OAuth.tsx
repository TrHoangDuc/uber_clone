import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { icons } from "@/constant";

const OAuth = () => {
  const handleGoogleSignIn = async() => {};

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-neutral-300" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-neutral-300" />
      </View>

      <CustomButton
        title="Sign in with Google"
        className="mt-4 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-4"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
