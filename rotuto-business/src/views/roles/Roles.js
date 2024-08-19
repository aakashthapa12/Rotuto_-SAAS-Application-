// import React from 'react'
// import { Page, Text, View, Document, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer'
// import { CButton } from '@coreui/react'

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     backgroundColor: '#FFF',
//     padding: 24,
//     fontSize: 12,
//     fontFamily: 'Times-Roman',
//   },
//   headerSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   logo: {
//     width: 100,
//     height: 30,
//   },
//   section: {
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   leftColumn: {
//     flexDirection: 'column',
//     width: '45%',
//   },
//   rightColumn: {
//     flexDirection: 'column',
//     width: '45%',
//   },
//   boldText: {
//     fontWeight: 'bold',
//     fontFamily: 'Times-Roman', // Ensure the font family is applied
//   },
//   text: {
//     marginBottom: 4,
//   },
//   productDetails: {
//     borderBottom: '1px solid #000',
//     paddingBottom: 8,
//     marginBottom: 8,
//   },
//   productHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottom: '1px solid #000',
//     paddingBottom: 4,
//     marginBottom: 4,
//     fontWeight: 'bold',
//     fontFamily: 'Times-Roman', // Ensure the font family is applied
//   },
//   productRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 4,
//   },
//   totalRow: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     marginTop: 12,
//   },
//   totalText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     fontFamily: 'Times-Roman', // Ensure the font family is applied
//   },
// })

// const Receipt = ({ receiptData }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.headerSection}>
//         <Text style={styles.header}>Invoice</Text>
//         <Image style={styles.logo} src="rotuto-logo.jpg" />
//       </View>
//       <View style={styles.section}>
//         <Text style={[styles.text, styles.boldText]}>
//           Invoice number: {receiptData.invoiceNumber}
//         </Text>
//         <Text style={[styles.text, styles.boldText]}>Date paid: {receiptData.datePaid}</Text>
//       </View>
//       <View style={styles.row}>
//         <View style={styles.leftColumn}>
//           <Text style={[styles.text, styles.boldText]}>{receiptData.seller.comapnyName}</Text>
//           <Text style={styles.text}>{receiptData.seller.line1}</Text>
//           <Text style={styles.text}>
//             {receiptData.seller.line2} {receiptData.seller.city}
//           </Text>
//           <Text style={styles.text}>
//             {receiptData.seller.state} {receiptData.seller.postal_code}
//           </Text>
//           <Text style={styles.text}>{receiptData.seller.country}</Text>
//           <Text style={styles.text}>{receiptData.seller.email}</Text>
//           <Text style={styles.text}>IN GST: {receiptData.seller.GST}</Text>
//         </View>
//         <View style={styles.rightColumn}>
//           <Text style={[styles.text, styles.boldText]}>Bill to</Text>
//           {receiptData.billTo.line1 === '' ? (
//             <>
//               <Text style={styles.text}>{receiptData.billTo.name}</Text>
//               <Text style={styles.text}>{receiptData.billTo.comapnyName}</Text>
//               <Text style={styles.text}>{receiptData.billTo.country}</Text>
//               <Text style={styles.text}>{receiptData.billTo.email}</Text>
//             </>
//           ) : (
//             <>
//               <Text style={styles.text}>{receiptData.billTo.comapnyName}</Text>
//               <Text style={styles.text}>{receiptData.billTo.line1}</Text>
//               <Text style={styles.text}>{receiptData.billTo.line2}</Text>
//               <Text style={styles.text}>
//                 {receiptData.billTo.city} {receiptData.billTo.state}
//               </Text>
//               <Text style={styles.text}>
//                 {receiptData.billTo.country} {receiptData.billTo.postal_code}
//               </Text>
//               <Text style={styles.text}>{receiptData.billTo.email}</Text>
//             </>
//           )}
//         </View>
//       </View>

//       <View style={styles.productDetails}>
//         <View style={styles.productHeader}>
//           <Text style={[styles.boldText, { fontFamily: 'Times-Roman' }]}>Description</Text>
//           <Text>Qty</Text>
//           <Text>Unit price</Text>
//           <Text>Amount</Text>
//         </View>
//         {receiptData.items.map((item, index) => (
//           <View style={styles.productRow} key={index}>
//             <Text>{item.description}</Text>
//             <Text>{item.qty}</Text>
//             <Text>{item.unitPrice}</Text>
//             <Text>{item.amount}</Text>
//           </View>
//         ))}
//       </View>
//       <View style={styles.totalRow}>
//         <Text style={styles.totalText}>Subtotal: $15.00</Text>
//       </View>
//       <View style={styles.totalRow}>
//         <Text style={styles.totalText}>Total: $15.00</Text>
//       </View>
//     </Page>
//   </Document>
// )

// const InvoicePdf = ({}) => {
//   const receiptData = {
//     invoiceNumber: '79E265B0-0007',
//     datePaid: 'June 5, 2024',
//     seller: {
//       comapnyName: 'Neonflake Enterprises OPC Pvt',
//       line1: '303, 3rd Floor, Meridian Plaza',
//       line2: 'Greenlands, Ameerpet',
//       city: 'Hyderabad',
//       state: 'Telangana',
//       country: 'India',
//       postal_code: '500009',
//       GST: '36AAHCN6860B1ZH',
//       email: 'hello@rotuto.com',
//     },
//     billTo: {
//       name: 'Thirumala Rao',
//       comapnyName: 'Google Careers',
//       line1: '2-30/1 villa',
//       line2: 'Polisetty Enclave',
//       city: 'Secunderabad',
//       state: 'Telangana',
//       country: 'India',
//       postal_code: '500009',
//       email: 'googlecareers@gmail.com',
//     },
//     items: [{ description: 'rotuto ai agents', qty: 1, unitPrice: '$15.00', amount: '$15.00' }],
//   }

//   // return (
//   //   <div style={{ width: '100%', height: '100vh' }}>
//   //     <PDFViewer style={{ width: '100%', height: '100%' }} showToolbar={true}>
//   //       <Receipt receiptData={receiptData} />
//   //     </PDFViewer>
//   //   </div>
//   // )

//   return (
//     <PDFDownloadLink document={<Receipt receiptData={receiptData} />} fileName="document.pdf">
//       {({ blob, url, loading, error }) =>
//         loading ? (
//           'Generating PDF...'
//         ) : (
//           <CButton style={{ textAlign: 'center', marginTop: '20px' }} color="primary" />
//         )
//       }
//     </PDFDownloadLink>
//   )
// }

// export default InvoicePdf

// import React from 'react'

// const Roles = () => {
//   return <div>Roles</div>
// }

// export default Roles

import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image, PDFDownloadLink } from '@react-pdf/renderer'
import { CButton } from '@coreui/react'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    padding: 24,
    fontSize: 12,
    fontFamily: 'Times-Roman',
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 30,
  },
  section: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: '45%',
  },
  rightColumn: {
    flexDirection: 'column',
    width: '45%',
  },
  boldText: {
    fontWeight: 'bold',
    fontFamily: 'Times-Roman', // Ensure the font family is applied
  },
  text: {
    marginBottom: 4,
  },
  productDetails: {
    borderBottom: '1px solid #000',
    paddingBottom: 8,
    marginBottom: 8,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #000',
    paddingBottom: 4,
    marginBottom: 4,
    fontWeight: 'bold',
    fontFamily: 'Times-Roman', // Ensure the font family is applied
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  totalText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Times-Roman', // Ensure the font family is applied
  },
})

const Receipt = ({ receiptData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerSection}>
        <Text style={styles.header}>Invoice</Text>
        <Image style={styles.logo} src="rotuto-logo.jpg" />
      </View>
      <View style={styles.section}>
        <Text style={[styles.text, styles.boldText]}>
          Invoice number: {receiptData.invoiceNumber}
        </Text>
        <Text style={[styles.text, styles.boldText]}>Date paid: {receiptData.datePaid}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.leftColumn}>
          <Text style={[styles.text, styles.boldText]}>{receiptData.seller.comapnyName}</Text>
          <Text style={styles.text}>{receiptData.seller.line1}</Text>
          <Text style={styles.text}>
            {receiptData.seller.line2} {receiptData.seller.city}
          </Text>
          <Text style={styles.text}>
            {receiptData.seller.state} {receiptData.seller.postal_code}
          </Text>
          <Text style={styles.text}>{receiptData.seller.country}</Text>
          <Text style={styles.text}>{receiptData.seller.email}</Text>
          <Text style={styles.text}>IN GST: {receiptData.seller.GST}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={[styles.text, styles.boldText]}>Bill to</Text>
          {receiptData.billTo.line1 === '' ? (
            <>
              <Text style={styles.text}>{receiptData.billTo.name}</Text>
              <Text style={styles.text}>{receiptData.billTo.comapnyName}</Text>
              <Text style={styles.text}>{receiptData.billTo.country}</Text>
              <Text style={styles.text}>{receiptData.billTo.email}</Text>
            </>
          ) : (
            <>
              <Text style={styles.text}>{receiptData.billTo.comapnyName}</Text>
              <Text style={styles.text}>{receiptData.billTo.line1}</Text>
              <Text style={styles.text}>{receiptData.billTo.line2}</Text>
              <Text style={styles.text}>
                {receiptData.billTo.city} {receiptData.billTo.state}
              </Text>
              <Text style={styles.text}>
                {receiptData.billTo.country} {receiptData.billTo.postal_code}
              </Text>
              <Text style={styles.text}>{receiptData.billTo.email}</Text>
            </>
          )}
        </View>
      </View>

      <View style={styles.productDetails}>
        <View style={styles.productHeader}>
          <Text style={[styles.boldText, { fontFamily: 'Times-Roman' }]}>Description</Text>
          <Text>Qty</Text>
          <Text>Unit price</Text>
          <Text>Amount</Text>
        </View>
        {receiptData.items.map((item, index) => (
          <View style={styles.productRow} key={index}>
            <Text>{item.description}</Text>
            <Text>{item.qty}</Text>
            <Text>{item.unitPrice}</Text>
            <Text>{item.amount}</Text>
          </View>
        ))}
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Subtotal: $15.00</Text>
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total: $15.00</Text>
      </View>
    </Page>
  </Document>
)

const InvoicePdf = ({}) => {
  const receiptData = {
    invoiceNumber: '79E265B0-0007',
    datePaid: 'June 5, 2024',
    seller: {
      comapnyName: 'Neonflake Enterprises OPC Pvt',
      line1: '303, 3rd Floor, Meridian Plaza',
      line2: 'Greenlands, Ameerpet',
      city: 'Hyderabad',
      state: 'Telangana',
      country: 'India',
      postal_code: '500009',
      GST: '36AAHCN6860B1ZH',
      email: 'hello@rotuto.com',
    },
    billTo: {
      name: 'Thirumala Rao',
      comapnyName: 'Google Careers',
      line1: '2-30/1 villa',
      line2: 'Polisetty Enclave',
      city: 'Secunderabad',
      state: 'Telangana',
      country: 'India',
      postal_code: '500009',
      email: 'googlecareers@gmail.com',
    },
    items: [{ description: 'rotuto ai agents', qty: 1, unitPrice: '$15.00', amount: '$15.00' }],
  }

  return (
    <PDFDownloadLink document={<Receipt receiptData={receiptData} />} fileName="document.pdf">
      {({ blob, url, loading, error }) =>
        loading ? (
          'Generating PDF...'
        ) : (
          <CButton style={{ textAlign: 'center', marginTop: '20px' }} color="primary" />
        )
      }
    </PDFDownloadLink>
  )
}

export default InvoicePdf
