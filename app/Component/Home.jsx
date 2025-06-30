import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather'

const categories = ['Trending Now', 'All', 'New', 'Fashion', 'Mens', 'Womens', 'Accessories', 'Sale'];

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('Trending Now');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome to the app</Text>
                <Ionicons name="person-circle-outline" size={40} color="#222" />
            </View>
            <View style={styles.searchBarContainer}>
                <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                />
            </View>
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoryList}
                >
                    {categories.map((cat) => (
                        <TouchableOpacity
                            key={cat}
                            style={[styles.categoryItem, activeCategory === cat && styles.categoryItemActive]}
                            onPress={() => setActiveCategory(cat)}
                        >
                            <Text style={[styles.categoryText, activeCategory === cat && styles.categoryTextActive]}>{cat}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffbfc',
        paddingTop: 50,
    },
    header: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#fffbfc',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        textAlign: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        margin: 20,
        paddingHorizontal: 10,
        height: 40,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#222',
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    categoryList: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 10,
        height: 60,
        alignItems: 'center',
    },
    categoryItem: {
        backgroundColor: '#dfdcdc',
        color: '#938f8f', // pink
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#ffb6d5',
    },
    categoryItemActive: {
        backgroundColor: '#f99dc4',
        borderColor: '#ff69b4',
        shadowColor: '#ff69b4',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    categoryText: {
        color: '#888',
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
        backgroundColor: 'transparent',
    },
    categoryTextActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginBottom: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})