import React from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1 pb-24">
        {/* Top App Bar */}
        <View className="sticky top-0 z-50 flex-row items-center justify-between p-4 bg-background-light/90 dark:bg-background-dark/90 border-b border-gray-200 dark:border-gray-800">
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 items-center justify-center"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-gray-900 dark:text-white">←</Text>
          </TouchableOpacity>
          <Text className="text-lg font-bold text-gray-900 dark:text-white">About Me</Text>
          <View className="w-10" />
        </View>

        {/* Profile Header */}
        <View className="flex-col items-center gap-6 pt-6 px-4">
          <View className="relative">
            <View className="w-32 h-32 rounded-full border-4 border-background-light dark:border-background-dark shadow-xl overflow-hidden bg-gray-300">
               {/* Placeholder Image */}
               <View className="w-full h-full bg-gray-400" />
            </View>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-900 dark:text-white text-center">Krishna Jain</Text>
            <Text className="text-gray-500 dark:text-text-secondary text-base font-medium text-center">Full-Stack Developer | FinTech Expert</Text>
          </View>
        </View>

        {/* Actions Bar */}
        <View className="px-4 py-6">
          <View className="flex-row justify-between gap-3">
            <TouchableOpacity className="flex-1 items-center gap-2">
              <View className="w-full aspect-square rounded-2xl bg-white dark:bg-surface-dark items-center justify-center shadow-sm">
                <Text className="text-blue-600 dark:text-blue-400 text-2xl">in</Text>
              </View>
              <Text className="text-xs font-medium text-gray-600 dark:text-gray-400">LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 items-center gap-2">
              <View className="w-full aspect-square rounded-2xl bg-white dark:bg-surface-dark items-center justify-center shadow-sm">
                <Text className="text-gray-900 dark:text-white text-2xl">&lt;/&gt;</Text>
              </View>
              <Text className="text-xs font-medium text-gray-600 dark:text-gray-400">GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 items-center gap-2">
              <View className="w-full aspect-square rounded-2xl bg-white dark:bg-surface-dark items-center justify-center shadow-sm">
                <Text className="text-emerald-500 dark:text-emerald-400 text-2xl">@</Text>
              </View>
              <Text className="text-xs font-medium text-gray-600 dark:text-gray-400">Email</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 items-center gap-2">
              <View className="w-full aspect-square rounded-2xl bg-primary items-center justify-center shadow-md shadow-primary/20">
                <Text className="text-white text-2xl">🤝</Text>
              </View>
              <Text className="text-xs font-bold text-primary dark:text-blue-400">Hire Me</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bio */}
        <View className="px-4 pb-6">
          <View className="rounded-2xl bg-white dark:bg-surface-dark p-5 shadow-sm">
            <Text className="text-gray-700 dark:text-gray-300 text-base font-normal leading-relaxed text-center">
              Building scalable FinTech solutions and robust web applications. Passionate about clean code, security, and user-centric design patterns that drive engagement.
            </Text>
          </View>
        </View>

        <View className="h-px bg-gray-200 dark:bg-gray-800 mx-4 mb-6" />

        {/* Experience */}
        <View className="px-4">
          <View className="flex-row items-center gap-2 mb-4">
            <Text className="text-primary text-2xl">💼</Text>
            <Text className="text-lg font-bold text-gray-900 dark:text-white">Experience</Text>
          </View>

          <View className="flex-col gap-4">
            {/* Job 1 */}
            <View className="flex-row gap-4">
               <View className="items-center">
                 <View className="w-3 h-3 rounded-full bg-primary" />
                 <View className="w-0.5 flex-1 bg-gray-200 dark:bg-gray-800 my-1" />
               </View>
               <View className="flex-1 pb-6">
                 <View className="rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm">
                   <View className="flex-row justify-between items-start mb-1">
                     <Text className="text-base font-bold text-gray-900 dark:text-white">Senior Developer</Text>
                     <View className="bg-primary/10 px-2 py-0.5 rounded-full">
                       <Text className="text-xs font-semibold text-primary">Current</Text>
                     </View>
                   </View>
                   <Text className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">FinCorp Solutions</Text>
                   <Text className="text-gray-600 dark:text-gray-300 text-sm leading-snug">
                     Leading the backend migration to microservices and overseeing security protocols for real-time payment gateways.
                   </Text>
                 </View>
               </View>
            </View>

            {/* Job 2 */}
            <View className="flex-row gap-4">
               <View className="items-center">
                 <View className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
               </View>
               <View className="flex-1">
                 <View className="rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm">
                   <View className="flex-row justify-between items-start mb-1">
                     <Text className="text-base font-bold text-gray-900 dark:text-white">Full-Stack Engineer</Text>
                     <Text className="text-xs font-medium text-gray-500 dark:text-gray-400">2020 - 2022</Text>
                   </View>
                   <Text className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">TechStart Inc.</Text>
                   <Text className="text-gray-600 dark:text-gray-300 text-sm leading-snug">
                     Developed core banking modules using React Native and Node.js. Integrated 3rd party financial APIs.
                   </Text>
                 </View>
               </View>
            </View>
          </View>
        </View>

        {/* Skills */}
        <View className="px-4 pt-8">
          <View className="flex-row items-center gap-2 mb-4">
            <Text className="text-primary text-2xl">🛠️</Text>
            <Text className="text-lg font-bold text-gray-900 dark:text-white">Technical Skills</Text>
          </View>
          <View className="gap-4">
            <View>
              <Text className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 pl-1">Languages</Text>
              <View className="flex-row flex-wrap gap-2">
                <Text className="px-3 py-1.5 rounded-lg bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 text-sm font-medium shadow-sm">JavaScript (ES6+)</Text>
                <Text className="px-3 py-1.5 rounded-lg bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 text-sm font-medium shadow-sm">Python</Text>
                <Text className="px-3 py-1.5 rounded-lg bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 text-sm font-medium shadow-sm">Swift</Text>
                <Text className="px-3 py-1.5 rounded-lg bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 text-sm font-medium shadow-sm">SQL</Text>
              </View>
            </View>
            <View>
              <Text className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 pl-1">Frameworks & Tools</Text>
              <View className="flex-row flex-wrap gap-2">
                <Text className="px-3 py-1.5 rounded-lg bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 text-sm font-medium shadow-sm">React Native</Text>
                <Text className="px-3 py-1.5 rounded-lg bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 text-sm font-medium shadow-sm">Node.js</Text>
                <Text className="px-3 py-1.5 rounded-lg bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 text-sm font-medium shadow-sm">Django</Text>
                <Text className="px-3 py-1.5 rounded-lg bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 text-sm font-medium shadow-sm">Docker</Text>
                <Text className="px-3 py-1.5 rounded-lg bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 text-sm font-medium shadow-sm">AWS</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Education */}
        <View className="px-4 pt-8 mb-4">
          <View className="flex-row items-center gap-2 mb-4">
            <Text className="text-primary text-2xl">🎓</Text>
            <Text className="text-lg font-bold text-gray-900 dark:text-white">Education</Text>
          </View>
          <View className="rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm flex-row items-center gap-4">
            <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center">
              <Text className="text-primary text-2xl">🏛️</Text>
            </View>
            <View>
              <Text className="text-base font-bold text-gray-900 dark:text-white">B.Tech in Computer Science</Text>
              <Text className="text-sm text-gray-500 dark:text-gray-400">University of Technology</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-6 left-4 right-4">
        <TouchableOpacity
          className="w-full bg-primary h-14 rounded-xl shadow-lg flex-row items-center justify-center gap-2"
          onPress={() => (navigation as any).navigate('Contact')}
        >
          <Text className="text-white font-bold text-lg">Let's Connect</Text>
          <Text className="text-white text-xl">→</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
