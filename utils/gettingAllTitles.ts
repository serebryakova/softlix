import * as Api from '@/api'
import axios from 'axios'

export default async function gettingAllTitles() {
const movies = await Api.movies.getAll();

}