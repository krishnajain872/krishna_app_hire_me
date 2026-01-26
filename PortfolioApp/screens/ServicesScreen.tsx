import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

const ServicesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1 pb-24">
        {/* Header */}
        <View className="p-4 pt-6 pb-2">
          <View className="flex-row items-center justify-between h-12">
            <TouchableOpacity
              className="w-10 h-10 rounded-full bg-white/5 items-center justify-center"
              onPress={() => navigation.goBack()}
            >
              <Text className="text-white text-lg">←</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-full bg-white/5 items-center justify-center">
              <Text className="text-white text-lg">⋮</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-slate-900 dark:text-white tracking-tight text-[32px] font-extrabold leading-tight mt-2">Services</Text>
        </View>

        <Text className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal px-4 pb-6">
          Crafting digital experiences from code to deployment. I help clients build scalable solutions.
        </Text>

        <View className="flex-col gap-5 px-4">
          {/* Card 1 */}
          <View className="rounded-xl bg-white dark:bg-[#1c1f27] border border-gray-200 dark:border-white/5 overflow-hidden shadow-sm">
            <View className="flex-row justify-between p-5 gap-4">
              <View className="flex-1 gap-2">
                <View className="flex-row items-center gap-2 mb-1">
                  <View className="w-8 h-8 rounded-lg bg-primary/20 items-center justify-center">
                    <Text className="text-primary text-[20px]">📱</Text>
                  </View>
                  <Text className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Mobile Apps</Text>
                </View>
                <Text className="text-slate-600 dark:text-[#9da6b9] text-sm font-normal leading-relaxed">
                  Native and cross-platform mobile applications tailored for iOS and Android with seamless performance.
                </Text>
              </View>
              <View className="w-24 h-24 bg-primary/10 rounded-lg border border-primary/10 items-center justify-center">
                 <Text className="text-4xl text-primary opacity-80">⚙️</Text>
              </View>
            </View>
            <View className="px-5 pb-5 flex-row flex-wrap gap-2">
              <View className="h-7 px-3 rounded-full bg-gray-100 dark:bg-[#282e39] border border-gray-200 dark:border-white/5 items-center justify-center">
                <Text className="text-xs text-slate-700 dark:text-white/90 font-medium">React Native</Text>
              </View>
              <View className="h-7 px-3 rounded-full bg-gray-100 dark:bg-[#282e39] border border-gray-200 dark:border-white/5 items-center justify-center">
                <Text className="text-xs text-slate-700 dark:text-white/90 font-medium">Swift</Text>
              </View>
              <View className="h-7 px-3 rounded-full bg-gray-100 dark:bg-[#282e39] border border-gray-200 dark:border-white/5 items-center justify-center">
                <Text className="text-xs text-slate-700 dark:text-white/90 font-medium">Flutter</Text>
              </View>
            </View>
          </View>

          {/* Card 2 */}
          <View className="rounded-xl bg-white dark:bg-[#1c1f27] border border-gray-200 dark:border-white/5 overflow-hidden shadow-sm">
            <View className="flex-row justify-between p-5 gap-4">
              <View className="flex-1 gap-2">
                <View className="flex-row items-center gap-2 mb-1">
                  <View className="w-8 h-8 rounded-lg bg-purple-500/20 items-center justify-center">
                    <Text className="text-purple-400 text-[20px]">🌐</Text>
                  </View>
                  <Text className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Web Development</Text>
                </View>
                <Text className="text-slate-600 dark:text-[#9da6b9] text-sm font-normal leading-relaxed">
                  Responsive, high-performance websites and web apps built for scale and SEO optimization.
                </Text>
              </View>
              <View className="w-24 h-24 bg-purple-500/10 rounded-lg border border-purple-500/10 items-center justify-center">
                 <Text className="text-4xl text-purple-400 opacity-80">💻</Text>
              </View>
            </View>
            <View className="px-5 pb-5 flex-row flex-wrap gap-2">
              <View className="h-7 px-3 rounded-full bg-gray-100 dark:bg-[#282e39] border border-gray-200 dark:border-white/5 items-center justify-center">
                <Text className="text-xs text-slate-700 dark:text-white/90 font-medium">Next.js</Text>
              </View>
              <View className="h-7 px-3 rounded-full bg-gray-100 dark:bg-[#282e39] border border-gray-200 dark:border-white/5 items-center justify-center">
                <Text className="text-xs text-slate-700 dark:text-white/90 font-medium">React</Text>
              </View>
              <View className="h-7 px-3 rounded-full bg-gray-100 dark:bg-[#282e39] border border-gray-200 dark:border-white/5 items-center justify-center">
                <Text className="text-xs text-slate-700 dark:text-white/90 font-medium">Node.js</Text>
              </View>
            </View>
          </View>

          {/* Card 3 */}
          <View className="rounded-xl bg-white dark:bg-[#1c1f27] border border-gray-200 dark:border-white/5 overflow-hidden shadow-sm mb-6">
            <View className="flex-row justify-between p-5 gap-4">
              <View className="flex-1 gap-2">
                <View className="flex-row items-center gap-2 mb-1">
                  <View className="w-8 h-8 rounded-lg bg-emerald-500/20 items-center justify-center">
                    <Text className="text-emerald-400 text-[20px]">⌨️</Text>
                  </View>
                  <Text className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Contributions</Text>
                </View>
                <Text className="text-slate-600 dark:text-[#9da6b9] text-sm font-normal leading-relaxed">
                  Code reviews, architecture planning, and professional contributions to existing codebases.
                </Text>
              </View>
              <View className="w-24 h-24 bg-emerald-500/10 rounded-lg border border-emerald-500/10 items-center justify-center">
                 <Text className="text-4xl text-emerald-400 opacity-80">🛡️</Text>
              </View>
            </View>
            <View className="px-5 pb-5 flex-row flex-wrap gap-2">
              <View className="h-7 px-3 rounded-full bg-gray-100 dark:bg-[#282e39] border border-gray-200 dark:border-white/5 items-center justify-center">
                <Text className="text-xs text-slate-700 dark:text-white/90 font-medium">Git</Text>
              </View>
              <View className="h-7 px-3 rounded-full bg-gray-100 dark:bg-[#282e39] border border-gray-200 dark:border-white/5 items-center justify-center">
                <Text className="text-xs text-slate-700 dark:text-white/90 font-medium">CI/CD</Text>
              </View>
              <View className="h-7 px-3 rounded-full bg-gray-100 dark:bg-[#282e39] border border-gray-200 dark:border-white/5 items-center justify-center">
                <Text className="text-xs text-slate-700 dark:text-white/90 font-medium">System Design</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-6 left-4 right-4">
        <TouchableOpacity className="shadow-lg bg-primary h-14 rounded-full flex-row items-center justify-center gap-2">
            <Text className="text-white text-xl">🚀</Text>
            <Text className="text-white font-bold text-lg">Let's Build Something</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ServicesScreen;
