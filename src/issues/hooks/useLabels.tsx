import { githubApi } from '../../api/githubApi';
import { Labels } from '../interfaces/label';
import {useQuery} from '@tanstack/react-query'

const getLabels = async():Promise<Labels[]> => {
    const {data } = await githubApi.get<Labels[]>('/labels',{
      headers:{
        Authorization: null
      }
    })
    return data
  }


export const useLabels = ()=> {
    const labelsQuery = useQuery(
        ['labels'],
        getLabels,{
            //staleTime: 1000 * 60 *60,
            placeholderData:[{
              id: 791921801,
              node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
              url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
              name: "❤️",
              color: "ffffff",
              default: false,
             
            },
            {
              id: 69105383,
              node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
              url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
              name: "Browser: IE",
              color: "c7def8",
              default: false,
            }
          ]
        }
      )
    
      return labelsQuery
}