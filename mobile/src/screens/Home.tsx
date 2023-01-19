import { Text, View, ScrollView } from "react-native";

import { generateDatesFromYearBeguinning } from "../utils/generate-dates-from-year-beguinning";

import { Header } from "../components/Header";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";

const weekDays = [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateDatesFromYearBeguinning()
const minimumSummaryDateSize = 18 * 5;
const amountOfDaysToFill = minimumSummaryDateSize - datesFromYearStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header/>
      <View className="flex-row mt-6 mb-2">
        {
          weekDays.map((day, i) => {
           return (
           <Text key={`${day}-${i}`}
           className="text-zinc-400 text-xl font-bold text-center mx-1"
           style={{width: DAY_SIZE}}>
              {day}
           </Text>)
          })
        }
      </View>
      
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}>
        <View className="flex-row flex-wrap opc">
          {
            datesFromYearStart.map(date=>(
              <HabitDay key={date.toISOString()} />
            ))
          }
          {
            amountOfDaysToFill > 0 && Array
            .from({ length: amountOfDaysToFill })
            .map((_, index)=>(
              <View 
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={ {width: DAY_SIZE, height: DAY_SIZE} }
                />
            ))
          }

        </View>
        </ScrollView>
    </View>
  )
}