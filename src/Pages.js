import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  title: { marginTop: "3%" },
  emphasis: { fontFamily: 'Helvetica-Bold', color: '#F22300' },
  breakable: { width: '100%', height: 400, backgroundColor: 'yellow' },
  page: {
    // flexDirection: 'row',
    padding: 6,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export default function Pages() {
    return (
  <Document>
       <Page style={styles.page} size="A4" wrap>
         <View>Helloo everyone</View>
      <Text style={styles.title}>This is a <Text style={styles.emphasis}>breakable</Text> component made <Text style={styles.emphasis}>unbreakable</Text>. Instead of wrapping between both pages, it jumps straight to the next one</Text>
      <View style={styles.breakable} wrap={false} />
    </Page>
  </Document>
);
    }