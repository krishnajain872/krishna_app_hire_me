import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

const ContactScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 24 }}>
        {/* Header */}
        <View className="flex-row items-center justify-between p-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
          <TouchableOpacity
            className="w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 items-center justify-center"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-gray-900 dark:text-white text-2xl">←</Text>
          </TouchableOpacity>
          <Text className="text-lg font-bold text-gray-900 dark:text-white">Contact</Text>
          <View className="w-10" />
        </View>

        {/* Profile */}
        <View className="items-center py-8 gap-5">
          <View className="relative">
            <View className="h-32 w-32 rounded-full shadow-xl bg-gray-300 overflow-hidden border-4 border-primary/20">
               {/* Placeholder Image */}
               <View className="w-full h-full bg-gray-400" />
            </View>
            <View className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-background-light dark:border-background-dark" />
          </View>
          <View className="items-center gap-1">
            <Text className="text-2xl font-bold text-gray-900 dark:text-white">Krishna Jain</Text>
            <Text className="text-slate-500 dark:text-slate-400 font-medium">Full-Stack Developer</Text>
            <Text className="text-sm text-slate-400 dark:text-slate-500 text-center max-w-[240px]">Building scalable apps & websites with modern tech stacks.</Text>
          </View>
        </View>

        {/* Contact List */}
        <View className="px-4 gap-3">
          <TouchableOpacity className="flex-row items-center justify-between p-4 bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 active:scale-[0.98]">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 rounded-lg bg-primary/10 items-center justify-center">
                <Text className="text-primary text-2xl">📞</Text>
              </View>
              <View>
                <Text className="text-base font-bold text-gray-900 dark:text-white">Phone</Text>
                <Text className="text-sm text-slate-500 dark:text-slate-400 font-medium">+1 (555) 000-0000</Text>
              </View>
            </View>
            <Text className="text-slate-400 text-xl">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between p-4 bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 active:scale-[0.98]">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 rounded-lg bg-primary/10 items-center justify-center">
                <Text className="text-primary text-2xl">✉️</Text>
              </View>
              <View>
                <Text className="text-base font-bold text-gray-900 dark:text-white">Email</Text>
                <Text className="text-sm text-slate-500 dark:text-slate-400 font-medium">hello@krishnajain.dev</Text>
              </View>
            </View>
            <Text className="text-slate-400 text-xl">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between p-4 bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 active:scale-[0.98]">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 rounded-lg bg-primary/10 items-center justify-center">
                <Text className="text-primary text-2xl">💼</Text>
              </View>
              <View>
                <Text className="text-base font-bold text-gray-900 dark:text-white">LinkedIn</Text>
                <Text className="text-sm text-slate-500 dark:text-slate-400 font-medium">/in/krishnajain</Text>
              </View>
            </View>
            <Text className="text-slate-400 text-xl">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between p-4 bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 active:scale-[0.98]">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 rounded-lg bg-primary/10 items-center justify-center">
                <Text className="text-primary text-2xl">💻</Text>
              </View>
              <View>
                <Text className="text-base font-bold text-gray-900 dark:text-white">GitHub</Text>
                <Text className="text-sm text-slate-500 dark:text-slate-400 font-medium">@krishnajain</Text>
              </View>
            </View>
            <Text className="text-slate-400 text-xl">›</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-8 px-4 gap-6">
          <View className="items-center">
            <Text className="text-sm font-medium text-slate-500 dark:text-slate-400">Ready to transform your ideas?</Text>
          </View>
          <TouchableOpacity className="w-full bg-primary h-14 rounded-full shadow-lg flex-row items-center justify-center gap-2 active:scale-[0.98]">
            <Text className="text-white text-xl">🚀</Text>
            <Text className="text-white font-bold text-lg">Start a Project</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center pb-2">
             <Text className="text-sm text-primary font-medium">View Portfolio Website</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;
