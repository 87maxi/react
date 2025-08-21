import {useQuery} from 'react-query';


export function Lista() {
    
    /*
    const query =  useQuery(['query1'], () => {
        return [1,2,3,4,5,6]
    })
    */

    const {data, isLoading, isError} =  useQuery(['query1'], () => {
        //throw new Error("aaa")

        return [1,2,3,4,5,6]
        //return ['juan', 'pedro']
    })


    if (isError) {
         return <p>Error.....</p>
    }
    if (isLoading) { 
        return <p>Loading.....</p>
    }
    
    return (
            <div>
                
                    
                    <ul>
                        {
                        
                        data.map( (item, idx) => 
                                
                                <li key={idx}>{item}</li>
                            )
                        } 
                    </ul>
                
            </div>
    );
}


/*

{
    "status": "success",
    "isLoading": false,
    "isSuccess": true,
    "isError": false,
    "isIdle": false,
    "data": [
        1,
        2,
        3,
        4,
        5,
        6
    ],
    "dataUpdatedAt": 1755798423152,
    "error": null,
    "errorUpdatedAt": 0,
    "failureCount": 0,
    "errorUpdateCount": 0,
    "isFetched": true,
    "isFetchedAfterMount": true,
    "isFetching": false,
    "isRefetching": false,
    "isLoadingError": false,
    "isPlaceholderData": false,
    "isPreviousData": false,
    "isRefetchError": false,
    "isStale": true
}


*/