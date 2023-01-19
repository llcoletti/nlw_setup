interface HabitProps {
  completed: number
}

const Habit = (props: HabitProps) => {
  return (
    <div className="">{props.completed}</div>
  )
}

export default Habit