import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather'
import ProductCard from './ProductCard';

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
            <View style={{ flexDirection: 'row' }}>
                <ProductCard />
                <ProductCard />
            </View> 

            <View style={{ flexDirection: 'row' }}>
                <ProductCard />
                <ProductCard />
            </View> 
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff3f8', // Lighter pinkish background
        paddingTop: 40,
        paddingHorizontal: 0,
    },
    header: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff0f6',
        borderBottomWidth: 1,
        borderBottomColor: '#ffd6e6',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        shadowColor: '#ffb6d5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 2,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ff69b4',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        margin: 20,
        marginBottom: 10,
        paddingHorizontal: 16,
        height: 44,
        shadowColor: '#ffb6d5',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
        elevation: 1,
    },
    searchIcon: {
        marginRight: 10,
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
        paddingLeft: 16,

        height: 54,
        alignItems: 'center',
    },
    categoryItem: {
        backgroundColor: '#f7e6f7',
        borderRadius: 18,
        paddingVertical: 7,
        paddingHorizontal: 16,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#ffb6d5',
    },
    categoryItemActive: {
        backgroundColor: '#ff69b4',
        borderColor: '#ff69b4',
        shadowColor: '#ff69b4',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    categoryText: {
        color: '#888',
        fontSize: 15,
        fontWeight: '600',
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