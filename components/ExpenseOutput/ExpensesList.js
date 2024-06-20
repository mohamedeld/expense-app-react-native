import { FlatList, Text } from 'react-native'

const ExpensesList = ({expenses}) => {
  return (
    <FlatList data={expenses} renderItem={(itemData)=>{
      return (
        <Text>{itemData?.item?.description}</Text>
      )
    }} keyExtractor={(item)=> item?.id}/>
  )
}

export default ExpensesList