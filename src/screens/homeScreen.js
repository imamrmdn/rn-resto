import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { AppBar, SearchBar } from '../components';
import { ResultList } from '../containers';
import useResults from  '../hooks/useResults';

export function HomeScreen() {

  const [search, setSearch] = useState('')
  const [searchApi, results, errMessage] = useResults()

  const filterResultsByPrice = (price) => {

    const resp = results.filter(res => {
      return res.price === price
    })

    return resp

  }

  return (
    <>
      <AppBar title='Home Screen' />
      <SafeAreaView style={styles.container}>
        <SearchBar 
          value={search}
          onSearchChange={newSearch => setSearch(newSearch)}
          onSearchSubmit={() => searchApi(search)}
        />
        {
          errMessage ? <Text>{errMessage}</Text> : null
        }
        <Text style={styles.textFound} >
          Found {results.length} result
        </Text>
        <ScrollView>
          <ResultList 
            result={filterResultsByPrice('$$')}
            title={'Restaurant 1'}
          />
          <ResultList 
            result={filterResultsByPrice('$')}
            title={'Restaurant 2'}
          />
          <ResultList 
            result={filterResultsByPrice('$$$')}
            title={'Restaurant 3'}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  textFound: {
    marginBottom: 15
  }
});
