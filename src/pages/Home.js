import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import axios from 'axios'
import useFetch from '../Hooks/useFetch'

const Home = () => {
    const trendingData = useSelector(state => state.movieoData.bannerData)
 
    const { data : nowPlayingData } = useFetch("/movie/now_playing")
    const { data : topRatedData } = useFetch('/movie/top_rated')
    const { data : popularTvShows } = useFetch('/tv/popular')
    const { data : onAirMovies } = useFetch('/tv/on_the_air')
  

  return (
    <div>
        <BannerHome/>
        <HorizontalScrollCard data={trendingData} heading={"Trending Shows"} trending={true}/>
        <HorizontalScrollCard data={nowPlayingData}
        heading={"Now Playing"} media_type={"movie"}/>
        <HorizontalScrollCard data={topRatedData}
        heading={"Top Rated Movies"} media_type={"movie"}/>
        <HorizontalScrollCard data={popularTvShows}
        heading={"Popular Tv Shows"} media_type={"tv"}/>
         <HorizontalScrollCard data={onAirMovies}
        heading={"On Air Movies"} media_type={"tv"}/>
       
        
    </div>
  )
}

export default Home