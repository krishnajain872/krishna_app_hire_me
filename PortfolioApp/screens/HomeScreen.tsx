import React from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 py-3 bg-background-light/90 dark:bg-background-dark/90 border-b border-gray-200 dark:border-gray-800">
          <View className="flex-row items-center gap-3">
            <View className="relative">
              <View className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-primary">
                 {/* Placeholder for Profile Image */}
                 <View className="w-full h-full bg-gray-400" />
              </View>
              <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-background-dark" />
            </View>
            <View>
              <Text className="text-sm font-semibold text-primary uppercase tracking-wider mb-0.5">Welcome back</Text>
              <Text className="text-lg font-bold text-slate-900 dark:text-white leading-none">Krishna Jain</Text>
            </View>
          </View>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-gray-100 dark:bg-card-dark items-center justify-center">
            {/* Notification Icon Placeholder */}
            <Text className="text-gray-900 dark:text-white">🔔</Text>
          </TouchableOpacity>
        </View>

        <View className="px-4 py-4">
          <Text className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">My Portfolio</Text>
          <Text className="text-text-secondary text-sm font-medium">Selected works & technical contributions</Text>
        </View>

        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4 pb-4 gap-3">
          <TouchableOpacity className="h-9 px-5 bg-primary rounded-full items-center justify-center shadow-lg shadow-primary/25">
            <Text className="text-white text-sm font-bold">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-9 px-5 bg-gray-200 dark:bg-card-dark rounded-full items-center justify-center">
            <Text className="text-gray-700 dark:text-text-secondary text-sm font-medium">FinTech</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-9 px-5 bg-gray-200 dark:bg-card-dark rounded-full items-center justify-center">
            <Text className="text-gray-700 dark:text-text-secondary text-sm font-medium">Full-Stack</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-9 px-5 bg-gray-200 dark:bg-card-dark rounded-full items-center justify-center">
            <Text className="text-gray-700 dark:text-text-secondary text-sm font-medium">AI/ML</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Project Card 1 */}
        <View className="px-4 pb-4">
          <View className="rounded-2xl bg-white dark:bg-card-dark overflow-hidden shadow-sm mb-6">
            <View className="h-48 bg-gray-800 relative">
               <View className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
               <View className="absolute bottom-3 left-3 px-2 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10">
                 <Text className="text-[10px] font-bold text-white uppercase tracking-wider">FinTech</Text>
               </View>
            </View>
            <View className="p-4 gap-3">
              <View>
                <View className="flex-row justify-between items-start">
                  <Text className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Secure FinTech Solution</Text>
                  <Text className="text-text-secondary">↗</Text>
                </View>
                <Text className="text-gray-600 dark:text-text-secondary text-sm mt-2 line-clamp-2">High-frequency trading platform with real-time data encryption and sub-millisecond latency.</Text>
              </View>
              <View className="flex-row flex-wrap gap-2 mt-1">
                <Text className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold">Node.js</Text>
                <Text className="px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-xs font-semibold">Blockchain</Text>
                <Text className="px-2.5 py-1 rounded-md bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 text-xs font-semibold">Socket.io</Text>
              </View>
              <TouchableOpacity className="mt-2 w-full h-10 bg-gray-100 dark:bg-[#2a2e39] rounded-xl items-center justify-center">
                <Text className="text-sm font-bold text-gray-900 dark:text-white">View Case Study</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Project Card 2 */}
          <View className="rounded-2xl bg-white dark:bg-card-dark overflow-hidden shadow-sm mb-6">
            <View className="h-48 bg-gray-800 relative">
               <View className="absolute bottom-3 left-3 px-2 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10">
                 <Text className="text-[10px] font-bold text-white uppercase tracking-wider">Full-Stack</Text>
               </View>
            </View>
            <View className="p-4 gap-3">
              <View>
                <View className="flex-row justify-between items-start">
                  <Text className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Zomato Clone</Text>
                  <Text className="text-text-secondary">↗</Text>
                </View>
                <Text className="text-gray-600 dark:text-text-secondary text-sm mt-2 line-clamp-2">Full-featured food delivery app with live geolocation tracking and secure payment gateway integration.</Text>
              </View>
              <View className="flex-row flex-wrap gap-2 mt-1">
                <Text className="px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 text-xs font-semibold">React Native</Text>
                <Text className="px-2.5 py-1 rounded-md bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 text-xs font-semibold">Firebase</Text>
                <Text className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">Stripe</Text>
              </View>
              <TouchableOpacity className="mt-2 w-full h-10 bg-gray-100 dark:bg-[#2a2e39] rounded-xl items-center justify-center">
                <Text className="text-sm font-bold text-gray-900 dark:text-white">View Case Study</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="px-4 pb-6 pt-2 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
         <TouchableOpacity
            className="w-full h-14 bg-primary rounded-2xl flex-row items-center justify-center gap-3 shadow-lg shadow-blue-900/20"
            onPress={() => (navigation as any).navigate('Contact')}
         >
            <Text className="text-white">✉️</Text>
            <Text className="text-white font-bold text-lg">Contact Krishna</Text>
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
