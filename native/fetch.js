// // import React, { useEffect, useState } from "react"
// // import { View, Text } from "react-native"
// // import { firebase } from "./dbConfig"

// // const Fetch = () => {
// //   const [users, setUsers] = useState([])
// //   const todoRef = firebase.firestore().collection("todo")

// //   useEffect(async () => {
// //     todoRef.onSnapshot((queueSnapshot) => {
// //       const users = []
// //       queueSnapshot.forEach((doc) => {
// //         const { heading, text } = doc.data()
// //         users.push({
// //           id: doc.id,
// //           heading,
// //           text,
// //         })
// //       })
// //       setUsers(users)
// //     })
// //   })

// //   console.log(users)

// //   return (
// //     <View>
// //       <Text>Hello</Text>
// //     </View>
// //   )
// // }

// // export default Fetch

// import React, { useEffect, useState } from "react"
// import db from "./dbConfig"

// const Fetch = () => {
//   const [data, setData] = useState([])
//   const [users, setUsers] = useState([])


//   useEffect(() => {
//     const fetchData = async () => {


//       db.onSnapshot((queueSnapshot) => {
//         const users = []
//         queueSnapshot.forEach((doc) => {
//           const { heading, text } = doc.data()
//           users.push({
//             id: doc.id,
//             heading,
//             text,
//           })
//         })
//         setUsers(users)
//       })
//     }

//     fetchData()
//   }, [])

//   console.log(users)
// }

// export default Fetch
